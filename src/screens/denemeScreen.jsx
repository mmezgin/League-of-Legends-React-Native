import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import { TextInput, Checkbox, Button } from 'react-native-paper';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function MainScreen({ navigation }) {

  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Fenerbahçe</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>Galatasaray</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>Beşiktaş</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>Trabzonspor</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>Başakşehir</Text>
      </View>
      <View style={styles.textContainer}>
        <Button
          mode="contained"
          color='#D41932'
          onPress={() => navigation.navigate('Login')}

        > GO BACK
    </Button>
      </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {


  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenHeight * 0.05,
    backgroundColor: '#91d1ff',
    width: screenWidth,
    height: screenHeight,

  }
})
export default MainScreen;
