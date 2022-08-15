import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Text } from 'react-native';
import { font_H1, font_P1 } from "../styling/globalStyles";

const Success = ({msg, submsg}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../lottie/success.json')}
        autoPlay
        loop={false}
        style={{ width: '50%' }}
      />
      <Text style={font_H1}>{msg}</Text>
      <Text style={font_P1}>{submsg}</Text>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font_H1,
  font_P1
});
