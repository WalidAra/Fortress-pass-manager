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

const Cred = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentCategory, setCurrentCategory] = useState<
    "PERSONAL" | "FINANCE" | "PROFESSIONAL"
  >("PERSONAL");

    const array = [
      {
        image: "https://example.com/image1.jpg",
        name: "John Doe",
        email: "john@example.com",
      },
      {
        image: "https://example.com/image2.jpg",
        name: "Jane Smith",
        email: "jane@example.com",
      },
      {
        image: "https://example.com/image3.jpg",
        name: "Bob Johnson",
        email: "bob@example.com",
      },
      {
        image: "https://example.com/image4.jpg",
        name: "Alice Brown",
        email: "alice@example.com",
      },
      {
        image: "https://example.com/image5.jpg",
        name: "Charlie Davis",
        email: "charlie@example.com",
      },
      {
        image: "https://example.com/image6.jpg",
        name: "Eva Wilson",
        email: "eva@example.com",
      },
      {
        image: "https://example.com/image6.jpg",
        name: "Eva Wilson",
        email: "eva@example.com",
      },
      {
        image: "https://example.com/image6.jpg",
        name: "Eva Wilson",
        email: "eva@example.com",
      },
      {
        image: "https://example.com/image6.jpg",
        name: "Eva Wilson",
        email: "eva@example.com",
      },
    ];

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
          <TabCategory title="Personal">
            <CubeIcon />
          </TabCategory>
          <TabCategory title="Finance">
            <WalletIcon />
          </TabCategory>
          <TabCategory title="Professional">
            <GemIcon />
          </TabCategory>
        </View>
        <View className="mb-4">
          <FlatList
            data={array}
            renderItem={({ index, item: { email, image, name } }) => (
              <CredCard />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            scrollEnabled={false} // Prevent scrolling inside FlatList
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cred;
