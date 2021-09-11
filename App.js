import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import PhoneNoScreen from './src/screens/PhoneNoScreen';
import OtpScreen from './src/screens/OtpScreen';
import NameScreen from './src/screens/NameScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Phone"
          component={PhoneNoScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
