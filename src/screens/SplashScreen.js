import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import ICLogo from '../widgets/ICLogo';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setupSplashScreen();
  }, []);

  const setupSplashScreen = async () => {
    const data = await performTimeConsumingTask();

    if (data !== null) {
      navigation.replace('WelcomeScreen');
    }
  };
  const performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };
  return (
    <View style={styles.viewStyles}>
      <ICLogo />
      <Text
        style={{
          fontFamily: 'Raleway-Regular',
          fontSize: 30,
          lineHeight: 35,
          marginTop: '4%',
          color: 'white',
          letterSpacing: 0.7,
        }}>
        Indie Culture
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000022',
  },
});
