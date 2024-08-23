import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Generate = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("12");

  const generatePassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < parseInt(passwordLength); i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  return (
    <View className="flex-1 bg-background px-6 space-y-4 pt-10">
      <Text className="font-medium text-xl">Generate Password</Text>
      <View className="w-full flex flex-col space-y-2 ">
        <Text>Length of the password</Text>
        <TextInput
          className="border-border border rounded-xl p-2 mt-4"
          placeholder="Password Length"
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={setPasswordLength}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} className="bg-secondary border border-border rounded-xl py-3 flex items-center" onPress={generatePassword}>
        <Text className="text-foreground font-medium" >Generate</Text>
      </TouchableOpacity>
      <Text>{password}</Text>
    </View>
  );
};

export default Generate;
