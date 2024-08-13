import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import ImageIcon from "@/components/atoms/icons/ImageIcon";
import MailIcon from "@/components/atoms/icons/MailIcon";
import Key2Icon from "@/components/atoms/icons/Key2Icon";

const AccountScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 space-y-4 bg-background px-6">
        <Text className="whitespace-nowrap mt-12 text-2xl font-semibold leading-none tracking-tight">
          Credential Details
        </Text>
        <View className=" flex-row flex items-center justify-between space-x-2">
          <View className="border border-input  rounded-xl">
            <Image
              className="w-11 h-11 rounded-xl"
              source={{
                uri: "https://i.pinimg.com/736x/29/95/95/29959595fe22edde8408b060d3ac3d82.jpg",
              }}
            />
          </View>
          <TextInput
            className="py-2 flex-1 px-4 rounded-xl border border-border"
            placeholder="Figma account"
          />

          <View className="rounded-xl p-2 border border-border">
            <ImageIcon />
          </View>
        </View>

        <View className="space-y-2 w-full">
          <Text className="font-medium text-mutedForeground">
            Username/email address
          </Text>
          <View className="relative w-full rounded-xl border border-border space-x-2 flex-row py-2 px-4 items-center">
            <View className="">
              <MailIcon size={22} />
            </View>
            <TextInput className=" flex-1 " placeholder="Figma account" />
          </View>
        </View>
        <View className="space-y-2 w-full">
          <Text className="font-medium text-mutedForeground">Password</Text>
          <View className="relative w-full rounded-xl border border-border space-x-2 flex-row py-2 px-4 items-center">
            <View className="">
              <Key2Icon size={22} />
            </View>
            <TextInput className=" flex-1 " placeholder="Figma account" />
          </View>
        </View>
        <View className="space-y-2 w-full">
          <Text className="font-medium text-mutedForeground">Note</Text>
          <View className="relative w-full rounded-xl space-x-2 flex-row  items-center">
            <TextInput
              className="flex-1 h-28 border border-border rounded-xl p-4"
              placeholder="Enter description here"
              multiline={true}
              textAlignVertical="top"
            />
          </View>
        </View>

        <View className="space-y-2">
          <Text className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
            History
          </Text>

          <View className="w-full space-y-2 px-2">
            <View className="w-full flex flex-row py-2 border-b border-border justify-between items-center">
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-mutedForeground text-lg font-medium">
                  Date
                </Text>
              </View>
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-mutedForeground text-lg font-medium">
                  Action
                </Text>
              </View>
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-mutedForeground text-lg font-medium">
                  User
                </Text>
              </View>
            </View>
            <View className="w-full flex flex-row py-2 border-b border-border justify-between items-center">
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">2023-04-15</Text>
              </View>
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">Created</Text>
              </View>
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">John Doe</Text>
              </View>
            </View>
            <View className="w-full flex flex-row py-2 border-b border-border justify-between items-center">
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">2023-04-15</Text>
              </View>
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">Updated</Text>
              </View>
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">John Doe</Text>
              </View>
            </View>
            <View className="w-full flex flex-row py-2 border-b border-border justify-between items-center">
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">2023-04-15</Text>
              </View>
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">Used</Text>
              </View>
              <View className="w-[(100/3)%] flex-1">
                <Text className="text-foreground font-medium ">John Doe</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
