import React from 'react'
import Svg, { Path } from 'react-native-svg';

const LoadingIcon = ({ color = "#000", height, size, width }: Icon) => {
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
      <Path d="M21 12a9 9 0 1 1-6.219-8.56"></Path>
    </Svg>
  );
};

export default LoadingIcon