import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {windowHeight, windowWidth} from '../utils/Dimensions';
const ICButton = ({text, navigation, nextScreen}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(nextScreen);
        }}>
        <View style={styles.button}>
          <Text style={styles.textst}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ICButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 19,
    marginTop: 18,
    borderRadius: 4,
    width: 0.87 * windowWidth,
  },
  textst: {
    color: 'black',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },
});
