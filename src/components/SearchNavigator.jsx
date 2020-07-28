
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, KeyboardAvoidingView, TouchableHighlight, TouchableWithoutFeedback, DismissKeyboard, Keyboard } from 'react-native'
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SearchScreen from './SearchScreen';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function navv({ navigation }) {

  return (

    <View style={styles.container}>
      <SearchScreen />

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'

  },
})
export default navv