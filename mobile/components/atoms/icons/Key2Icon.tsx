import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg';

const Key2Icon = ({ color = "#000", height, size, width }: Icon) => {
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
      <Path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></Path>
      <Circle cx="16.5" cy="7.5" r=".5"></Circle>
    </Svg>
  );
};

export default Key2Icon