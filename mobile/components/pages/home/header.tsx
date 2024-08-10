import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "native-base";

const Header = () => {
  return (
    <View className="inline-flex mt-9 flex-row items-center space-x-2 py-2 mr-auto px-4 rounded-3xl border border-border">
      <Avatar
        size={"sm"}
        source={{
          uri: "https://i.pinimg.com/236x/d6/91/73/d69173d8dc5a6b14bea844f6bb25c8bc.jpg",
        }}
      />

      <Text className="text-foreground font-medium" >arawalid90</Text>
    </View>
  );
};

export default Header;
