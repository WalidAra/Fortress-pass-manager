import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Skeleton } from "native-base";
import { Link } from "expo-router";
import { useAuth, useFetch } from "@/hooks";
import defaultPfp from "@/constants/defaultPfp";

const Header = () => {
  const { token } = useAuth();

  const { response, loading } = useFetch<Client>({
    domain: "general",
    endpoint: "profile",
    method: "GET",
    accessToken: token,
    feature: "client",
    includeToken: true,
  });

  if (loading) {
    return <Skeleton className="mt-9 rounded-md" />;
  }

  return (
    <Link asChild href={"/user-profile"}>
      <TouchableOpacity
        activeOpacity={0.8}
        className="inline-flex mt-9 flex-row items-center space-x-2 py-2 mr-auto px-4 rounded-3xl border border-border"
      >
        <Avatar
          size={"sm"}
          source={{
            uri: response?.data.image || defaultPfp,
          }}
        />

        <Text className="text-foreground font-medium">
          {response?.data?.name}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Header;
