
import React from 'react'
import Svg, { Path, Rect } from "react-native-svg";

const CubeIcon = ({ color = "#000", height, size, width }: Icon) => {
  return (
    <Svg
      data-v-56bd7dfc=""
      height={size || height || 25}
      width={size || width || 25}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M7 3.34V5a3 3 0 0 0 3 3"></Path>
      <Path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></Path>
      <Path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></Path>
      <Path d="M12 2a10 10 0 1 0 9.54 13"></Path>
      <Path d="M20 6V4a2 2 0 1 0-4 0v2"></Path>
      <Rect width="8" height="5" x="14" y="6" rx="1"></Rect>
    </Svg>
  );
};

export default CubeIcon