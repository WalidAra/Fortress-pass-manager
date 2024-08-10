import React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = ({ color = "#000", height, size, width }: Icon) => {
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
      <Path d="m9 18 6-6-6-6"></Path>
    </Svg>
  );
};

export default RightArrow;
