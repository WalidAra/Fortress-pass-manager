import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { OAuthContainer } from "../molecules";
import { Link } from "expo-router";

type Props = {
  isSignIn?: boolean;
  children: React.ReactNode;
};

const FormLayout = ({ children, isSignIn = false }: Props) => {
  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex flex-1"
      >
        <View className="flex p-6 flex-1 flex-col gap-y-4 justify-center items-center">
          <View className="w-full mb-6">
            <Text className="font-semibold tracking-tight text-2xl">
              {isSignIn ? "Login to Your Account" : "Create an account"}
            </Text>
            <Text className="text-sm text-mutedForeground">
              {isSignIn
                ? "Enter your details to sign in to your account"
                : "Enter your email below to create your account"}
            </Text>
          </View>

          <OAuthContainer />

          <View className=" w-full flex flex-row justify-center items-center">
            <View className="flex-1  border-b border-muted"></View>
            <Text className="px-2 text-sm font-medium text-mutedForeground">
              OR CONTINUE WITH
            </Text>
            <View className="flex-1 border-b border-muted "></View>
          </View>

          {children}

          <View className="flex items-center justify-center">
            {isSignIn ? (
              <Text className="text-sm text-mutedForeground">
                Don't have an account?{" "}
                <Link href={"/sign-up"}>
                  <Text className="text-primary underline">
                    Create an account
                  </Text>
                </Link>
              </Text>
            ) : (
              <Text className="text-sm text-mutedForeground">
                Already have an account?{" "}
                <Link href={'/sign-in'} >
                  <Text className="text-primary underline">Sign in</Text>
                </Link>
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(FormLayout);
