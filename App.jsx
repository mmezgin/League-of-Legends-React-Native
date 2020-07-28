import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import denemeScreen from './src/screens/denemeScreen';
import MainScreen from './src/screens/MainScreen';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import DetailScreen from './src/components/DetailScreen';


const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen name='deneme' component={denemeScreen} />
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
