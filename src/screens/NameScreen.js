import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

import LinearGradient from 'react-native-linear-gradient';

const NameScreen = () => {
  const [name, setName] = useState('');
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#001242', '#000022']}
        style={styles.linearGradient}>
        <Text style={styles.text}>Enter you name</Text>
        <View style={styles.nameWrapper}>
          <TextInput
            placeholder="Enter your name"
            style={styles.namest}
            value={name}
            onChangeText={text => {
              setName(text);
            }}
            keyboardType="default"
            keyboardAppearance="default"
          />
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 22,
            lineHeight: 25,
            color: 'white',
            marginTop: '17%',
          }}>
          Enter your date of birth
        </Text>
      </LinearGradient>
    </View>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 25,
    color: 'white',
    marginTop: '25%',
  },
  namest: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 23,
    marginTop: '8%',
  },
  nameWrapper: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    minWidth: 230,
  },
});
