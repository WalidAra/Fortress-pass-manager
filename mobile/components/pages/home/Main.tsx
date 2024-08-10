import { FlatList, Text, View } from "react-native";
import React from "react";
import RightArrow from "@/components/atoms/icons/RightArrow";
import CredCard from "@/components/molecules/CredCard";

const Main = () => {
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
  ];
  return (
    <View className="my-4 space-y-4">
      <View className="w-full items-center flex-row justify-between">
        <Text className="text-foreground font-medium text-lg">
          Recently opened
        </Text>
        <View className="flex-row items-center space-x-2">
          <Text className="font-medium text-lg">Recent</Text>
          <RightArrow size={22} />
        </View>
      </View>

      <FlatList
        data={array}
        renderItem={({ index, item: { email, image, name } }) => <CredCard />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        scrollEnabled={false} // Prevent scrolling inside FlatList
      />
    </View>
  );
};

export default Main;
