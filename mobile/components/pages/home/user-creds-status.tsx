import { View } from "react-native";
import React from "react";
import SavedPassStatus from "./saved-pass-status";
import SavedCredStatus from "./saved-cred-status";

const UserCredStatusContainer = () => {
  return (
    <View className="w-full flex justify-between items-center flex-row mt-4 space-x-4">
      <SavedPassStatus />
      <SavedCredStatus />
    </View>
  );
};

export default UserCredStatusContainer;
