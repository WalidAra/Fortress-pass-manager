import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg';

const KeyIcon = ({ color = "#000", height, size, width }: Icon) => {
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
      <Circle cx="7.5" cy="15.5" r="5.5"></Circle>
      <Path d="m21 2-9.6 9.6"></Path>
      <Path d="m15.5 7.5 3 3L22 7l-3-3"></Path>
    </Svg>
  );
};

export default KeyIcon