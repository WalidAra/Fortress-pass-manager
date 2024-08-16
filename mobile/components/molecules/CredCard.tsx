import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import RightArrow from "../atoms/icons/RightArrow";
import { Link } from "expo-router";
import defaultImageCred from "@/constants/defaultImageCred";

type Props = {
  account: Account;
};

const CredCard = ({ account }: Props) => {

  return (
    <View className="flex w-full  flex-row rounded-xl justify-between items-center p-2 border border-input">
      <View className="flex flex-row space-x-2 items-center ">
        <View className="border border-input  rounded-md">
          <Image
            className="w-11 h-11 rounded-xl"
            source={{
              uri:
                account?.image ||
                defaultImageCred,
            }}
          />
        </View>

        <View>
          <Text className="text-foreground font-semibold">
            {account?.title} account
          </Text>
          <Text className="text-sm text-mutedForeground">
            {account?.credential}
          </Text>
        </View>
      </View>
      <Link href={`/cred/${account?.id}`} asChild>
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
