import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IconFlag from "@/components/molecules/IconFlag";
import FlowerIcon from "@/components/atoms/icons/FlowerIcon";
import { Link } from "expo-router";
import RightArrow from "@/components/atoms/icons/RightArrow";
import { useAuth, useFetch } from "@/hooks";

const SavedCredStatus = () => {
  const { token } = useAuth();
  const { loading, response } = useFetch({
    domain: "general",
    endpoint: "savedCreds",
    method: "GET",
    feature: "accounts",
    accessToken: token,
    includeToken: true,
  });
  
  return (
    <View className="w-[48%] p-4 border border-border rounded-xl">
      <IconFlag>
        <FlowerIcon />
      </IconFlag>
      <View className="w-full mt-4">
        <Text className="text-mutedForeground ">Saved creds</Text>
        <View className="flex items-center space-y-1 justify-between flex-row">
          <Text className="text-foreground font-semibold">
            {response?.data?.length || 0} pass
          </Text>
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
  );
};

export default SavedCredStatus;
