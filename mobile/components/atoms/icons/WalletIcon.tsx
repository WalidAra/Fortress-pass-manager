import React from "react";
import Svg, { Path } from "react-native-svg";

const WalletIcon = ({ color = "#000", height, size, width }: Icon) => {
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
      <Path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></Path>
      <Path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></Path>
      <Path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></Path>
    </Svg>
  );
};

export default WalletIcon;
