import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const GlobalCategoryLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="saved-creds" options={{ headerShown: false }} />
      <Stack.Screen name="saved-passwords" options={{ headerShown: false }} />
    </Stack>
  );
};

export default GlobalCategoryLayout;
