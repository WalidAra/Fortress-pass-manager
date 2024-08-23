import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IconFlag from "@/components/molecules/IconFlag";
import KeyIcon from "@/components/atoms/icons/KeyIcon";
import { Link } from "expo-router";
import RightArrow from "@/components/atoms/icons/RightArrow";
import { useAuth, useFetch } from "@/hooks";
import { Skeleton } from "native-base";

const SavedPassStatus = () => {
  const { token } = useAuth();
  const { loading, response } = useFetch<any>({
    domain: "general",
    endpoint: "savedPasswords",
    method: "GET",
    feature: "accounts",
    accessToken: token,
    includeToken: true,
  });


  if (loading) {
    return (
      <View className="flex items-center justify-between">
        <Skeleton className="w-[48%] h-36 rounded-xl" />
        <Skeleton className="w-[48%] h-36 rounded-xl" />
      </View>
    );
  }

  return (
    <View className="w-[48%] p-4 border h-36 border-border rounded-xl">
      <IconFlag>
        <KeyIcon />
      </IconFlag>
      <View className="w-full mt-4">
        <Text className="text-mutedForeground">Saved passwords</Text>
        <View className="flex items-center space-y-1 justify-between flex-row">
          <Text className="text-foreground font-semibold">
            {response?.data?.length || 0} pass
          </Text>
          <Link href="/saved-passwords" asChild>
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

export default SavedPassStatus;
