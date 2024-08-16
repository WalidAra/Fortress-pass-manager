import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FormLayout from "@/components/pages/auth/FormLayout";
import { useAuth, useAxios } from "@/hooks";
import { asyncStorage } from "@/lib";
import { HEADER } from "@/config";
import { router } from "expo-router";
import LoadingReq from "@/components/molecules/LoadingReq";

const SignUp = () => {
  const { setToken } = useAuth();
  const [error, setError] = useState<string>("")

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async () => {
    setIsLoading(true);

    if (credentials.email && credentials.password) {
      const res: FetchResponse<Client & accessToken> = await useAxios({
        domain: "general",
        method: "POST",
        endpoint: "register",
        feature: "auth",
        body: {
          email: credentials.email,
          password: credentials.password,
        },
      });
      setIsLoading(false);
      console.log('====================================');
      console.log('res : ' , res);
      console.log('====================================');

      if (res.status == true) {
        await asyncStorage.setItem(HEADER, res.data.accessToken);
        setToken(res.data.accessToken);
        router.replace("/home");
      }else if(res.status === false) {
        setError(res.message);
      }
    }
  };

  return (
    <FormLayout>
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

      {
        error && <View className="w-full" >
          <Text className="text-red-500 text-start">{error}</Text>
        </View>
      }

      <TouchableOpacity
        onPress={onSubmit}
        activeOpacity={0.8}
        className="w-full flex flex-row justify-center bg-primary py-3 px-4 rounded-xl"
      >
        <Text className="text-md ml-2 text-white font-medium text-center">
          {isLoading ? <LoadingReq color="#fff" size={22} /> : "Create account"}
        </Text>
      </TouchableOpacity>
    </FormLayout>
  );
};

export default SignUp;
