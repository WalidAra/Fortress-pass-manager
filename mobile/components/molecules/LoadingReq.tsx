import React from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'
import LoadingIcon from '../atoms/icons/LoadingIcon'

const LoadingReq = ({ color = "#000", height, size, width }: Icon) => {
  const spinValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <LoadingIcon  color={color}  height={height}  size={size}  width={width} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoadingReq