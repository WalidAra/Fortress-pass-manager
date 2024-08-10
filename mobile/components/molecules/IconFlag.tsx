import { View } from "react-native";
import React from "react";

const IconFlag = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="mr-auto">
      <View className="p-2 bg-slate-200 rounded-full">{children}</View>
    </View>
  );
};

export default IconFlag;
