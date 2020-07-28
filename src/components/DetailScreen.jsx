
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import { TextInput, Checkbox, Button, List } from 'react-native-paper';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function DetailScreen({ navigation }) {

  return (

    <View>
      <Text>detay</Text>
    </View>

  );

}


export default DetailScreen;