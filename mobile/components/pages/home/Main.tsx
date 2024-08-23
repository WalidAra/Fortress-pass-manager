import { FlatList, Text, View } from "react-native";
import React from "react";
import CredCard from "@/components/molecules/CredCard";
import { useAuth, useFetch } from "@/hooks";

const Main = () => {
  const { token } = useAuth();

  const { loading, response } = useFetch({
    domain: "general",
    endpoint: "recentAccounts",
    feature: "accounts",
    method: "GET",
    accessToken: token,
    includeToken: true,
  });

  console.log('====================================');
  console.log("here : " ,response);
  console.log('====================================');

  return (
    <View className="my-4 space-y-4">
      <View className="w-full items-center flex-row justify-start">
        <Text className="text-foreground font-medium text-lg">
          Recently opened
        </Text>
      </View>

      {/* <FlatList
        data={array}
        renderItem={({ index, item: { email, image, name } }) => <CredCard />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        scrollEnabled={false} 
      /> */}
    </View>
  );
};

export default Main;
