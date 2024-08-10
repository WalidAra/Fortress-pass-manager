import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const FlowerIcon = ({ color="#000", height, size, width }: Icon) => {
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
      <Path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></Path>
      <Circle cx="12" cy="8" r="2"></Circle>
      <Path d="M12 10v12"></Path>
      <Path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></Path>
      <Path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></Path>
    </Svg>
  );
};

export default FlowerIcon;
