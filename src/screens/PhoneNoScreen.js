import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import CountryPicker from '../widgets/countryPicker';
import LinearGradient from 'react-native-linear-gradient';
import ICLogo from '../widgets/ICLogo';
import PhoneInput from 'react-native-phone-input';
import ICButton from '../widgets/ICButton';
import Axios from 'axios';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const PhoneNoScreen = ({navigation}) => {
  const [selectedCallingCode, setSelectedCallingCode] = useState('90'); // Give it a default value to show an initial flag and a code
  const [country, setCountry] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [countryClicked, setCountryClicked] = useState(false);
  const [countryData, setCountryData] = useState([]);

  const getCountryDetails = () => {
    var temp = [];
    Axios.get('https://restcountries.eu/rest/v2/').then(res => {
      res.data.forEach(element => {
        var countryItem = {
          name: element.name,
          code: element.alpha3Code,
          calling_code: element.callingCodes[0],
          img: element.flag,
        };
        temp.push(countryItem);
        setCountryData(temp);
        console.log(temp);
      });
    });
  };
  useEffect(() => {
    getCountryDetails();
    var button = new GoogleSigninButton();
  }, []);
  return (
    <View style={{flex: 1}}>
      <CountryPicker clicked={countryClicked} data={countryData} />
      <LinearGradient
        colors={['#001242', '#000022']}
        style={styles.linearGradient}>
        <View style={{marginTop: '17.1%'}}>
          <ICLogo />
        </View>
        <Text style={styles.textBold}>Enter your mobile number</Text>
        <View style={styles.phoneWrapper}>
          <TouchableOpacity
            onPress={() => {
              setCountryClicked(true);
            }}>
            <View>
              <TextInput
                value={country}
                onChangeText={text => {
                  setCountry(text);
                }}
                keyboardType="phone-pad"
                style={styles.countryst}
              />
            </View>
          </TouchableOpacity>

          <TextInput
            value={phoneno}
            onChangeText={text => {
              setphoneno(text);
            }}
            keyboardType="phone-pad"
            style={styles.phonest}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Otp', {number: `${country}${phoneno}`});
            }}>
            <View style={styles.button}>
              <Text style={styles.textst}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
          />
        </View>
        <View></View>
      </LinearGradient>
    </View>
  );
};

export default PhoneNoScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  textBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 23,
    color: 'white',
    marginTop: '12.85%',
  },
  phoneWrapper: {
    marginTop: '6%',
    flexDirection: 'row',
    margin: '8%',
  },
  countryst: {
    color: '#fff',
    backgroundColor: 'transparent',
    flex: 2,
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 26,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  phonest: {
    marginLeft: 12,
    flex: 11,
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 26,
    backgroundColor: 'transparent',
    color: '#fff',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
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
