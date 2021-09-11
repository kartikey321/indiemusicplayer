import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const OtpScreen = ({navigation, route}) => {
  const {number} = route.params;
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#001242', '#000022']}
        style={styles.linearGradient}>
        <View style={styles.topTextWrapper}>
          <Text style={styles.text}>Verify with OTP</Text>
          <View style={styles.subTextWrapper}>
            <Text style={styles.subText}>Sent via SMS to </Text>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: 'white',
                fontFamily: 'Roboto-Bold',
              }}>
              {number}
            </Text>
          </View>
        </View>
        <View>
          <OTPInputView
            style={{width: '80%', height: 5, marginLeft: 10}}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.resendCodeWrapper}>
            <Text style={{color: 'white'}}>Resend Code</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop: '90%'}}>
          <Text style={styles.termsText}>By proceeding, you agree to the</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#00ADFF',
                fontFamily: 'Raleway-Bold',
                fontSize: 15,
                lineHeight: 18,
              }}>
              Terms and Conditions
            </Text>
            <Text style={styles.termsText}> of Indie Culture</Text>
          </View>
        </View>
        <View style={{marginTop: '5%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Name');
            }}>
            <View style={styles.button}>
              <Text style={styles.textst}>Proceed</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  topTextWrapper: {
    margin: '18.6%',
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 23,
  },
  subTextWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
  },
  subText: {
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
  underlineStyleBase: {
    width: 65,
    height: 65,
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 32,
    lineHeight: 38,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  resendCodeWrapper: {
    marginTop: 80,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  termsText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    lineHeight: 18,
    color: 'white',
    textAlign: 'center',
  },
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
