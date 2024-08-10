import React from "react";
import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="cred" />
      <Tabs.Screen name="generate" />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
};

export default HomeLayout;
