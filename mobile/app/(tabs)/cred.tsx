import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import SearchIcon from "@/components/atoms/icons/SearchIcon";

import TabCategory from "@/components/pages/cred/TabCategory";
import WalletIcon from "@/components/atoms/icons/WalletIcon";
import CubeIcon from "@/components/atoms/icons/CubeIcon";
import GemIcon from "@/components/atoms/icons/GemIcon";
import CredCard from "@/components/molecules/CredCard";
import { useAuth, useFetch } from "@/hooks";

const Cred = () => {
  const { token } = useAuth();
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentCategory, setCurrentCategory] = useState<
    "PERSONAL" | "FINANCE" | "PROFESSIONAL"
  >("PERSONAL");

  const { loading, response } = useFetch<Account[]>({
    domain: "general",
    endpoint: `category/${currentCategory}`,
    feature: "accounts",
    method: "GET",
    accessToken: token,
    includeToken: true,
  });

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" />

      <ScrollView className="flex-1 space-y-4 w-full  bg-background px-6">
        <View className="w-full mt-10 space-x-2 py-2 px-4 bg-secondary items-center flex flex-row border border-input rounded-3xl">
          <SearchIcon size={22} color="#444444" />
          <TextInput
            onChangeText={(text) => setSearchValue(text)}
            placeholder="Search account"
          />
        </View>

        <Text className="text-xl font-semibold">Category</Text>

        <View className="w-full flex flex-row justify-between items-center ">
          <TabCategory
            category={currentCategory}
            setCategory={setCurrentCategory}
            title="Personal"
          >
            <CubeIcon />
          </TabCategory>
          <TabCategory
            category={currentCategory}
            setCategory={setCurrentCategory}
            title="Finance"
          >
            <WalletIcon />
          </TabCategory>
          <TabCategory
            category={currentCategory}
            setCategory={setCurrentCategory}
            title="Professional"
          >
            <GemIcon />
          </TabCategory>
        </View>
        <View className="mb-4">
          {loading ? (
            <View className="w-full flex flex-row justify-center items-center">
              <Text className="text-xl font-semibold">Loading...</Text>
            </View>
          ) : (
            <FlatList
              data={response?.data}
              renderItem={({ index, item }) => <CredCard account={item} />}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              scrollEnabled={false} // Prevent scrolling inside FlatList
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cred;
