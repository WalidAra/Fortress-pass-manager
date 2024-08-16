import { View, TouchableOpacity, Text, Pressable } from "react-native";
import React from "react";

const categories = {
  PERSONAL: {
    primary:"bg-blue-400",
    secondary:"bg-blue-100"
  },
  FINANCE: {
    primary:"bg-red-400",
    secondary:"bg-red-100"
  },
  PROFESSIONAL: {
    primary:"bg-green-400",
    secondary:"bg-green-100"
  },
}

type Props = {
  children: React.ReactNode;
  title: string;
  setCategory: (category: "PERSONAL" | "FINANCE" | "PROFESSIONAL") => void;
  category: "PERSONAL" | "FINANCE" | "PROFESSIONAL";
};

const TabCategory = ({ children, title, category, setCategory }: Props) => {
  return (
    <Pressable
      onPress={() =>
        setCategory(
          title.toUpperCase() as "PERSONAL" | "FINANCE" | "PROFESSIONAL"
        )
      }
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
      className={`flex items-center space-y-2 justify-center py-6 w-[30%] border border-border rounded-xl ${
        category === title.toUpperCase()
          ? categories[title.toUpperCase() as keyof typeof categories].secondary
          : 'bg-transparent'
      }`}    >
      <View
        className={`p-2 rounded-full ${
          category === title.toUpperCase()
            ? categories[title.toUpperCase() as keyof typeof categories].primary
            : 'bg-slate-200'
        }`}      >
        {children}
      </View>
      <Text className="text-xs font-semibold text-center">{title}</Text>
    </Pressable>  );
};

export default React.memo(TabCategory);
