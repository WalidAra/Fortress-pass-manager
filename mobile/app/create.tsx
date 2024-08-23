import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { FlatList, Image } from "native-base";
import defaultImageCred from "@/constants/defaultImageCred";
import ImageIcon from "@/components/atoms/icons/ImageIcon";
import MailIcon from "@/components/atoms/icons/MailIcon";
import Key2Icon from "@/components/atoms/icons/Key2Icon";
import GlobalCategory from "@/constants/globalCategory";
import Category from "@/constants/category";
import Flag from "@/constants/flag";
import { useAuth, useAxios } from "@/hooks";
import { router } from "expo-router";
import LoadingReq from "@/components/molecules/LoadingReq";

const CreateAccount = () => {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [cred, setCred] = useState({
    title: "",
    credential: "",
    password: "",
    flag: "",
    globalCategory: "",
    category: "",
    note: "",
    image: "",
  });

  const [activeCategory, setActiveCategory] = useState<
    "PERSONAL" | "FINANCE" | "PROFESSIONAL"
  >("PERSONAL");

  const [activeGlobalCategory, setActiveGlobalCategory] = useState<
    "SAVED_PASSWORD" | "SAVED_CREDENTIALS"
  >("SAVED_PASSWORD");

  const [flag, setFlag] = useState<
    | "SOCIAL_MEDIA"
    | "STREAMING_SERVICE"
    | "ONLINE_SHOPPING"
    | "FINANCE"
    | "WORK"
    | "GAMING"
  >("SOCIAL_MEDIA");

  const onUpdate = (prop: string, value: string) => {
    setCred({ ...cred, [prop]: value });
  };

  const createNewCreds = async () => {
    setIsLoading(true);
    const res = await useAxios({
      domain: "general",
      endpoint: "create",
      feature: "accounts",
      method: "POST",
      accessToken: token,
      includeToken: true,
      body: {
        ...cred,
        flag,
        globalCategory: activeGlobalCategory,
        category: activeCategory,
        image: defaultImageCred,
      },
    });
    setIsLoading(false);

    if (res.status === true) {
      router.push("/cred");
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" />

      <ScrollView className="flex-1 pt-6 px-6 bg-background space-y-6 ">
        <Text className="font-semibold text-xl">Create new credentials</Text>
        <View className=" flex-row flex items-center justify-between space-x-2">
          <View className="border border-input  rounded-xl">
            <Image
              className="w-11 h-11 rounded-xl"
              source={{
                uri: defaultImageCred,
              }}
              alt="profile image"
            />
          </View>
          <TextInput
            className="py-2 flex-1 px-4 rounded-xl border text-mutedForeground border-border"
            placeholder="Figma account"
            value={"Account title"}
            onChangeText={(text) => onUpdate("title", text)}
          />

          <View className="rounded-xl p-2 border border-border">
            <ImageIcon color="hsl(215.4, 16.3%, 46.9%)" />
          </View>
        </View>

        <View className="w-full space-y-2">
          <Text className="font-medium text-mutedForeground">
            Global category
          </Text>

          <FlatList
            horizontal
            contentContainerStyle={{ gap: 8 }}
            data={GlobalCategory}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setActiveGlobalCategory(item as any)}
                activeOpacity={0.7}
                className={`inline-flex items-center py-2 px-4 rounded-3xl border-border border ${
                  activeCategory === item ? "bg-foreground " : "bg-secondary"
                } `}
              >
                <Text
                  className={`text-xs  font-bold ${
                    activeCategory === item
                      ? "text-background"
                      : "text-mutedForeground"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View className="w-full space-y-2">
          <Text className="font-medium text-mutedForeground">Category</Text>

          <FlatList
            horizontal
            contentContainerStyle={{ gap: 8 }}
            data={Category}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setActiveCategory(item as any)}
                activeOpacity={0.7}
                className={`inline-flex items-center py-2 px-4 rounded-3xl border-border border ${
                  activeCategory === item ? "bg-foreground " : "bg-secondary"
                } `}
              >
                <Text
                  className={`text-xs  font-bold ${
                    activeCategory === item
                      ? "text-background"
                      : "text-mutedForeground"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View className="w-full space-y-2">
          <Text className="font-medium text-mutedForeground">Flag</Text>

          <FlatList
            horizontal
            contentContainerStyle={{ gap: 8 }}
            data={Flag}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setFlag(item as any)}
                activeOpacity={0.7}
                className={`inline-flex items-center py-2 px-4 rounded-3xl border-border border ${
                  activeCategory === item ? "bg-foreground " : "bg-secondary"
                } `}
              >
                <Text
                  className={`text-xs  font-bold ${
                    activeCategory === item
                      ? "text-background"
                      : "text-mutedForeground"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View className="space-y-2 w-full">
          <Text className="font-medium text-mutedForeground">
            Username/email address
          </Text>
          <View className="relative w-full rounded-xl border border-border space-x-2 flex-row py-2 px-4 items-center">
            <View className="">
              <MailIcon color="hsl(215.4, 16.3%, 46.9%)" size={20} />
            </View>
            <TextInput
              className=" flex-1 text-mutedForeground"
              placeholder="Enter your credential"
              onChangeText={(text) => onUpdate("credential", text)}
            />
          </View>
        </View>
        <View className="space-y-2 w-full">
          <Text className="font-medium text-mutedForeground">Password</Text>
          <View className="relative w-full rounded-xl border border-border space-x-2 flex-row py-2 px-4 items-center">
            <View className="">
              <Key2Icon color="hsl(215.4, 16.3%, 46.9%)" size={20} />
            </View>
            <TextInput
              secureTextEntry
              className=" flex-1 "
              placeholder="Enter your password"
              onChangeText={(text) => onUpdate("password", text)}
            />
          </View>
        </View>
        <View className="space-y-2 w-full">
          <Text className="font-medium text-mutedForeground">Note</Text>
          <View className="relative w-full rounded-xl space-x-2 flex-row  items-center">
            <TextInput
              className="flex-1 h-28 border text-mutedForeground border-border rounded-xl p-4"
              placeholder="Enter description here"
              multiline={true}
              textAlignVertical="top"
              onChangeText={(text) => onUpdate("note", text)}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={createNewCreds}
          className="w-full flex items-center justify-center py-3  rounded-md bg-primary"
        >
          {isLoading ? (
            <LoadingReq color="#fff" />
          ) : (
            <Text className="text-white font-medium">
              Create new credential
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;
