import React, { useEffect } from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@/hooks";
import { View } from "react-native";
import { asyncStorage } from "@/lib";
import { HEADER } from "@/config";

const App = () => {
  const { isLoading, token } = useAuth();

  if (isLoading) return null;

  if (!token) {
    return <Redirect href={"/sign-in"} />;
  } else {
    return <Redirect href={"/home"} />;
  }

  // useEffect(() => {
  //   const removeData = async () => {
  //     await asyncStorage.removeItem(HEADER);
  //   };
  //   removeData();
  // }, []);

  // return <View></View>;
};

export default App;
