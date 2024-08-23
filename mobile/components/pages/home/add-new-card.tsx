import { View, Text } from "react-native";
import React from "react";
import IconFlag from "@/components/molecules/IconFlag";
import ShieldIcon from "@/components/atoms/icons/ShieldIcon";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const AddNewCard = () => {

  return (
    <View className="w-full mt-4 border border-border p-4 rounded-xl">
      <IconFlag>
        <ShieldIcon />
      </IconFlag>

      <View className="flex flex-col mt-2">
        <Text className="font-medium text-lg">New password</Text>
        <Text className="text-mutedForeground">
          Save your new password with ease
        </Text>
      </View>

      <Link href={"/create"} asChild>
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-full rounded-xl bg-secondary border border-border flex items-center justify-center mt-4 py-2 px-4"
        >
          <Text className="text-foreground font-medium">Add new +</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default AddNewCard;
