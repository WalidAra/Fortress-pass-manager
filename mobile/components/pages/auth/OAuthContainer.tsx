import { View, Text, Pressable } from "react-native";
import React from "react";
import { FacebookIcon, GoogleIcon } from "@/components/atoms/icons";


const OAuthContainer = () => {
  return (
    <View className="w-full space-x-7 mb-2 flex items-center flex-row justify-between">
      <View className="w-full shrink relative rounded-xl border border-border bg-white">
        <Pressable
          className=" flex-row justify-center space-x-1.5 w-full items-center py-2.5 px-4 "
          android_ripple={{
            color: "hsl(210, 40%, 98%)",
            borderless: true,
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#f0f0f0" : "white",
            },
          ]}
        >
          <FacebookIcon color="hsl(221.2, 83.2%, 53.3%)" />
          <Text className="text-sm font-medium text-accentForeground">
            Facebook
          </Text>
        </Pressable>
      </View>
      <View className="w-full shrink relative rounded-xl border border-border bg-white">
        <Pressable
          className=" flex-row justify-center space-x-1.5 w-full items-center py-2.5 px-4 "
          android_ripple={{
            color: "hsl(210, 40%, 98%)",
            borderless: true,
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#f0f0f0" : "white",
            },
          ]}
        >
          <GoogleIcon />
          <Text className="text-sm font-medium text-accentForeground">
            Google
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OAuthContainer;
