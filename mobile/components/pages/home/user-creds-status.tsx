import { View, Text } from 'react-native'
import React from 'react'
import IconFlag from '@/components/molecules/IconFlag';
import KeyIcon from '@/components/atoms/icons/KeyIcon';
import RightArrow from '@/components/atoms/icons/RightArrow';
import FlowerIcon from '@/components/atoms/icons/FlowerIcon';

const UserCredStatus = () => {
  return (
    <View className="w-full flex flex-row mt-4 space-x-4">
      <View className="flex-1 p-4 border border-border rounded-xl">
        <IconFlag>
          <KeyIcon />
        </IconFlag>

        <View className="w-full mt-4">
          <Text className="text-mutedForeground ">Saved passwords</Text>
          <View className="flex items-center space-y-1 justify-between flex-row">
            <Text className="text-foreground font-semibold">32 pass</Text>

            <View className="rounded-full p-1 border border-border">
              <RightArrow size={20} />
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 p-4 border border-border rounded-xl">
        <IconFlag>
          <FlowerIcon />
        </IconFlag>
        <View className="w-full mt-4">
          <Text className="text-mutedForeground ">Saved creds</Text>
          <View className="flex items-center space-y-1 justify-between flex-row">
            <Text className="text-foreground font-semibold">32 pass</Text>

            <View className="rounded-full p-1 border border-border">
              <RightArrow size={20} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default UserCredStatus