import React from 'react'
import Svg, { Circle, Path, Rect } from 'react-native-svg';

const ImageIcon = ({ color = "#000", height, size, width }: Icon) => {
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
      <Rect width="18" height="18" x="3" y="3" rx="2" ry="2"></Rect>
      <Circle cx="9" cy="9" r="2"></Circle>
      <Path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></Path>
    </Svg>
  );
};

export default ImageIcon