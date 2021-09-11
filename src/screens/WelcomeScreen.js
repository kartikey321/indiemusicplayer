import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/singer.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.mainContentWrapper}>
          <Image source={require('../assets/images/ICLogo.png')} />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur.
          </Text>
        </View>
        <View style={styles.bottomWrapper}>
          <View style={styles.bottomTextWrapper}>
            <Text style={styles.bottomText}>Create a free account to</Text>
            <Text style={styles.bottomText}>discover new artists.</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Phone');
            }}>
            <View style={styles.button}>
              <Text
                style={
                  (styles.bottomText,
                  {color: 'black', fontFamily: 'Raleway-Regular'})
                }>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContentWrapper: {
    marginTop: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'Raleway-Bold',
  },
  bottomWrapper: {
    marginTop: '85%',
  },
  bottomText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Raleway-SemiBold',
  },
  bottomTextWrapper: {
    alignItems: 'center',
    marginHorizontal: '23%',
    marginBottom: 0,
  },
  button: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 19,
    marginTop: 18,
    borderRadius: 4,
  },
});
