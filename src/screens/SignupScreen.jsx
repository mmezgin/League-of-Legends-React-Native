
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

function SignupScreen({ navigation }) {

  const [text_username, setText1] = React.useState('')
  const [text_password, setText2] = React.useState('')
  const [text_password_confirm, setText3] = React.useState('')
  const [text_email, setText4] = React.useState('')
  // const [text_secret_question, setText5] = React.useState('')
  const [expanded, setExpanded] = React.useState(true)
  const handlePress = () => setExpanded(!expanded);


  return (

    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                returnKeyType={'next'}
                label='Username'
                labelColor='#D41932'
                value={text_username}
                underlineColor='#D41932'
                selectionColor='#D41932'
                autoCapitalize='none'
                onChangeText={text_username => setText1(text_username)}
                theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}

              />
            </View>
            <View>
              <TextInput
                returnKeyType={'done'}
                label='Password'
                value={text_password}
                underlineColor='#D41932'
                selectionColor='#D41932'
                autoCapitalize='none'
                onChangeText={text_password => setText2(text_password)}
                theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}

              />
            </View>
            <View>
              <TextInput
                returnKeyType={'done'}
                label='Confirm Password'
                value={text_password_confirm}
                underlineColor='#D41932'
                selectionColor='#D41932'
                autoCapitalize='none'
                onChangeText={text_password_confirm => setText3(text_password_confirm)}
                theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}

              />
            </View>
            <View>
              <TextInput
                returnKeyType={'done'}
                label='Email'
                value={text_email}
                underlineColor='#D41932'
                selectionColor='#D41932'
                autoCapitalize='none'
                onChangeText={text_email => setText4(text_email)}
                theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}

              />
            </View>

          </View>
        </KeyboardAvoidingView>
        <View style={styles.btn_signup}>
          <Button
            mode="contained"
            color='#D41932'
            onPress={() =>
              text_password == text_password_confirm
                && text_username.length > 0
                && text_email.length > 0
                && text_password.length > 0
                && text_password_confirm.length > 0
                ? navigation.navigate('Login')
                : console.warn('You must fill all the inputs and confirm your password!')}
          > SIGNUP
    </Button>
        </View>


      </View>
    </ScrollView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  container2: {
    flex: 1,
    justifyContent: 'center'
  },
  inputContainer: {
    paddingHorizontal: screenWidth * 0.08,
    height: screenHeight * 0.6,
    justifyContent: 'space-around'

  },
  btn_signup: {
    marginTop: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.08
  },

})
export default SignupScreen;