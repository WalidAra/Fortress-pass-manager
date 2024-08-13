import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const MailIcon = ({ color = "#000", height, size, width }: Icon) => {
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
      <Rect width="20" height="16" x="2" y="4" rx="2"></Rect>
      <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></Path>
    </Svg>
  );
};

export default MailIcon;
