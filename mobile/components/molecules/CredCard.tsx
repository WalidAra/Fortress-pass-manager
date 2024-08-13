import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import RightArrow from "../atoms/icons/RightArrow";
import { Link } from "expo-router";

type Props = {
  image: string | null;
  name: string;
  email: string;
};

const CredCard = () => {
  return (
    <View className="flex w-full bg-slate-50 flex-row rounded-xl justify-between items-center p-2 border border-input">
      <View className="flex flex-row space-x-2 items-center ">
        <View className="border border-input  rounded-md">
          <Image
            className="w-11 h-11 rounded-xl"
            source={{
              uri: "https://i.pinimg.com/736x/29/95/95/29959595fe22edde8408b060d3ac3d82.jpg",
            }}
          />
        </View>

        <View>
          <Text className="text-foreground font-medium">Figma account</Text>
          <Text className="text-sm text-mutedForeground">
            arawalid90@gmail.com
          </Text>
        </View>
      </View>
      <Link href={`/cred/123`} asChild>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full p-1 border border-border"
        >
          <RightArrow size={20} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default CredCard;
