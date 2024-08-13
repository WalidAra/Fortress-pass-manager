import React from "react";
import Svg, { Path } from "react-native-svg";

const GemIcon = ({ color = "#000", height, size, width }: Icon) => {
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
      <Path d="M6 3h12l4 6-10 13L2 9Z"></Path>
      <Path d="M11 3 8 9l4 13 4-13-3-6"></Path>
      <Path d="M2 9h20"></Path>
    </Svg>
  );
};

export default GemIcon;
