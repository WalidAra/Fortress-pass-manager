import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IconFlag from "@/components/molecules/IconFlag";
import KeyIcon from "@/components/atoms/icons/KeyIcon";
import RightArrow from "@/components/atoms/icons/RightArrow";
import FlowerIcon from "@/components/atoms/icons/FlowerIcon";
import { Link } from "expo-router";

const UserCredStatus = () => {
  return (
    <View className="w-full flex flex-row mt-4 space-x-4">
      <View className="flex-1 p-4 border border-border rounded-xl">
        <IconFlag>
          <KeyIcon />
        </IconFlag>

        <View className="w-full mt-4">
          <Text className="text-mutedForeground ">Saved passwords</Text>
          <View className="flex items-center space-y-1 justify-between flex-row">
            <Text className="text-foreground font-semibold">32 pass</Text>
            <Link href={"/saved-passwords"} asChild>
              <TouchableOpacity
                activeOpacity={0.7}
                className="rounded-full p-1 border border-border"
              >
                <RightArrow size={20} />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>

      <View className="flex-1 p-4 border border-border rounded-xl">
        <IconFlag>
          <FlowerIcon />
        </IconFlag>
        <View className="w-full mt-4">
          <Text className="text-mutedForeground ">Saved creds</Text>
          <View className="flex items-center space-y-1 justify-between flex-row">
            <Text className="text-foreground font-semibold">32 pass</Text>
            <Link href={"/saved-creds"} asChild>
              <TouchableOpacity
                activeOpacity={0.7}
                className="rounded-full p-1 border border-border"
              >
                <RightArrow size={20} />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserCredStatus;
