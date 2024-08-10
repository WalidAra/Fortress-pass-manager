import React from "react";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import HomeIcon from "@/components/atoms/icons/HomeIcon";
import KeyIcon from "@/components/atoms/icons/KeyIcon";
import SettingIcon from "@/components/atoms/icons/SettingIcon";
import SparkleIcon from "@/components/atoms/icons/SparkleIcon";

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center gap-y-1">
              <HomeIcon
                color={
                  focused
                    ? "hsl(221.2, 83.2%, 53.3%)"
                    : "hsl(215.4, 16.3%, 46.9%)"
                }
              />
              <Text
                className={`${
                  focused ? "text-primary" : "text-mutedForeground"
                } text-xs font-medium`}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cred"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center gap-y-1">
              <KeyIcon
                color={
                  focused
                    ? "hsl(221.2, 83.2%, 53.3%)"
                    : "hsl(215.4, 16.3%, 46.9%)"
                }
              />
              <Text
                className={`${
                  focused ? "text-primary" : "text-mutedForeground"
                } text-xs font-medium`}
              >
                Cred
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="generate"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center gap-y-1">
              <SparkleIcon
                color={
                  focused
                    ? "hsl(221.2, 83.2%, 53.3%)"
                    : "hsl(215.4, 16.3%, 46.9%)"
                }
              />
              <Text
                className={`${
                  focused ? "text-primary" : "text-mutedForeground"
                } text-xs font-medium`}
              >
                Generate
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center gap-y-1">
              <SettingIcon
                color={
                  focused
                    ? "hsl(221.2, 83.2%, 53.3%)"
                    : "hsl(215.4, 16.3%, 46.9%)"
                }
              />
              <Text
                className={`${
                  focused ? "text-primary" : "text-mutedForeground"
                } text-xs font-medium`}
              >
                Setting
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
