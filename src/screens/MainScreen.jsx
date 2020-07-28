import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../components/SearchScreen';
import DetailScreen from '../components/DetailScreen';

import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Coming Soon</Text>
    </View>
  );
}



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Coming Soon</Text>
    </View>
  );
}
function DetailComponent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DetailScreen />
    </View>
  );
}



function SearchComponent() {
  return (
    <View style={{ flex: 1 }}>
      <SearchScreen />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MainScreen({ navigation }) {
  return (

    <Tab.Navigator initialRouteName='search'>

      <Tab.Screen name="settings" component={SettingsScreen} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <Ionicons name="ios-settings" size={28} color='#D41932' />
        )
      }} />
      <Tab.Screen name="home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <FontAwesome5 name="home" size={24} color='#D41932' />
        )
      }} />

      <Tab.Screen name="search" component={SearchScreen} options={{
        tabBarLabel: 'Search',
        tabBarIcon: () => (
          <FontAwesome5 name='search' size={24} color='#D41932' />
        )
      }} />

    </Tab.Navigator>

  );
}
export default MainScreen