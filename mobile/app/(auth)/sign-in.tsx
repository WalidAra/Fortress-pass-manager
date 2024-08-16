import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import FormLayout from "@/components/pages/auth/FormLayout";
import { useAuth, useAxios } from "@/hooks";
import LoadingReq from "@/components/molecules/LoadingReq";
import { asyncStorage } from "@/lib";
import { HEADER } from "@/config";
import { router } from "expo-router";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setToken } = useAuth();
  const [error, setError] = useState<string>("");

  const onSubmit = async () => {
    setIsLoading(true);

    if (credentials.email && credentials.password) {
      const res = await useAxios<Client & accessToken>({
        domain: "general",
        method: "POST",
        endpoint: "login",
        feature: "auth",
        body: {
          email: credentials.email,
          password: credentials.password,
        },
      });

      setIsLoading(false);

      if (res.status === true) {
        await asyncStorage.setItem(HEADER, res.data.accessToken);
        setToken(res.data.accessToken);
        router.replace("/home");
      } else if (res.status === false) {
        setError(res.message);
      }
    }
  };

  return (
    <FormLayout isSignIn>
      <View className="w-full gap-2">
        <Text className="text-sm font-medium leading-none">Email</Text>
        <TextInput
          textContentType="emailAddress"
          value={credentials.email}
          onChangeText={(text) =>
            setCredentials((prev) => ({ ...prev, email: text }))
          }
          placeholder="m@example.com"
          className="border-border px-4 py-2 rounded-xl border"
        />
      </View>
      <View className="w-full mb-4 gap-2">
        <Text className="text-sm font-medium leading-none">Password</Text>
        <TextInput
          value={credentials.password}
          onChangeText={(text) =>
            setCredentials((prev) => ({ ...prev, password: text }))
          }
          placeholder="Enter your password"
          className="border-border px-4 py-2 rounded-xl border"
          textContentType="password"
          secureTextEntry
        />
      </View>

      {error && <Text className="text-red-500 ">{error}</Text>}

      <TouchableOpacity
        onPress={onSubmit}
        activeOpacity={0.8}
        className="w-full flex flex-row justify-center bg-primary py-3 px-4 rounded-xl"
      >
        <Text className="text-md ml-2 text-white font-medium text-center">
          {isLoading ? <LoadingReq color="#fff" size={22} /> : "Sign In"}
        </Text>
      </TouchableOpacity>
    </FormLayout>
  );
};

export default SignIn;
