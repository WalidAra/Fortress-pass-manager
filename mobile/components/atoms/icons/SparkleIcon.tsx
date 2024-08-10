import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const SparkleIcon = ({ color = "#000", height, size, width }: Icon) => {
  return (
    <Svg
      stroke={color}
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={size || height || 25}
      width={size || width || 25}
    >
      <Path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></Path>
      <Path d="M5 3v4"></Path>
      <Path d="M19 17v4"></Path>
      <Path d="M3 5h4"></Path>
      <Path d="M17 19h4"></Path>
    </Svg>
  );
};

export default SparkleIcon;
