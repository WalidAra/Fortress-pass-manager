import { View, TouchableOpacity, Text } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  isActive?: boolean;
};

const TabCategory = ({ children, title, isActive }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className=" flex items-center space-y-2 justify-center py-6  w-[30%] border border-border rounded-xl"
    >
      <View className="p-2 bg-slate-200 rounded-full">{children}</View>
      <Text className="text-xs font-semibold text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default TabCategory;
