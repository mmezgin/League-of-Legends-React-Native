
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component, useState } from 'react'
import {
  Text, StyleSheet, View, Dimensions, Image, KeyboardAvoidingView,
  TouchableHighlight, SafeAreaView, FlatList, ImageBackground, TouchableOpacity,
} from 'react-native'
import { Checkbox, Button, List, TextInput } from 'react-native-paper';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SearchableDropdown from 'react-native-searchable-dropdown';
import champions from '../datasets/dataset3.json'
import DetailScreen from './DetailScreen'
import MainScreen from '../screens/denemeScreen';
import y from '../screens/MainScreen'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);



export default class SearchScreen extends Component {

  state = {
    text: '',
    champs: champions
  };


  renderChampions = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image
          style={styles.img}
          source={{ uri: item.icon }}

        />
        <View style={styles.textContainer}>
          <Text style={styles.textName} >{item.name}</Text>
          <Text style={styles.textTitle} >{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  searchFilter = text => {
    const manufactured = champions.filter(item => {
      const listItem = `${item.name.toLowerCase()} ${item.title.toLowerCase()}`;

      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({
      champs: manufactured,
    });
  };
  renderHeader = () => {
    const { text } = this.state;
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          mode='outlined'
          returnKeyType={'done'}
          label='Search..'
          labelColor='#D41932'
          underlineColor='#D41932'
          selectionColor='#D41932'
          autoCapitalize='none'
          onChangeText={text => {
            this.setState({
              text,
            });
            this.searchFilter(text);
          }}
          value={text}
          theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}
          onPress={() => navigation.navigate('Detail')}

        />
      </View>
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <FlatList
          ListHeaderComponent={this.renderHeader()}
          renderItem={this.renderChampions}
          keyExtractor={(item) => item.key}
          data={this.state.champs}
          onPress={() => navigation.navigate('Signup')}
        />

      </SafeAreaView>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: screenHeight * 0.05,


  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#D41932',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10
  },
  textContainer: {
    justifyContent: 'space-around'
  },
  textName: {
    fontWeight: 'bold'
  },
  textTitle: {

  },
  searchContainer: {
    padding: 10
  },
  search: {
    fontSize: 16,
    padding: 4

  }


})
