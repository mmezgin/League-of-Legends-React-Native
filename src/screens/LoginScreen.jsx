
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, KeyboardAvoidingView, TouchableHighlight, TouchableWithoutFeedback, DismissKeyboard, Keyboard } from 'react-native'
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MainScreen from './MainScreen'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function LoginScreen({ navigation }) {

  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');

  const [checked, setChecked] = React.useState(false);
  const x = 'logo.png'
  return (

    <View style={styles.container}>
      <TouchableWithoutFeedback >
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.inputs}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../images/' + x)}
                resizeMode='contain'
              />
            </View>
            <View style={styles.input1}>
              <TextInput
                returnKeyType={'next'}
                label='Email'
                labelColor='#D41932'
                value={text}
                underlineColor='#D41932'
                selectionColor='#D41932'
                autoCapitalize='none'
                theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}

                onChangeText={text => setText(text)}
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                returnKeyType={'done'}
                label='Password'
                value={text2}
                underlineColor='#D41932'
                selectionColor='#D41932'
                autoCapitalize='none'
                secureTextEntry={true}
                theme={{ colors: { primary: '#D41932', underlineColor: '#D41932' } }}

                onChangeText={text2 => setText2(text2)}
              />
              <View style={styles.labelForgotPassword}>
                <Text style={styles.text_forgot} >Forgot Password?</Text>
              </View>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                color='#D41932'
                uncheckedColor='black'
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);

                }}
              />
              <Text style={styles.text_checkbox}> I'll {checked ? 'remember you :)' : 'forget you :('} </Text>
            </View>
          </View>


        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View style={styles.btn_login}>
        <Button
          mode="contained"
          color='#D41932'
          onPress={() => navigation.navigate('Main')}

        > LOGIN
    </Button>
      </View>
      <View style={styles.or}>
        <Text>-OR-</Text>
      </View>
      <View style={styles.loginViaContainer}>
        <View>
          <TouchableHighlight style={styles.loginVia}>
            <Text style={{ fontWeight: 'bold' }}> <Entypo name='facebook' size={36} color='blue'></Entypo>   </Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight style={styles.loginVia}>
            <Text style={{ fontWeight: 'bold' }}> <Entypo name='google--with-circle' size={36} color='#D41932'></Entypo>   </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.signup}>

        <Text onPress={() => navigation.navigate('Signup')} style={{ fontWeight: 'bold' }}>I'm new,<Text style={{ fontWeight: 'bold', color: '#D41932' }} > signup!</Text></Text>
      </View>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'

  },
  logoContainer: {
    alignItems: 'center',
  },

  logo: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.4,

  },
  inputs: {
    marginTop: -screenHeight * 0.07,
    paddingHorizontal: screenWidth * 0.08,
    paddingTop: screenHeight * 0.02,

  },
  input2: {
    marginTop: screenHeight * 0.04,

  },
  labelForgotPassword: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 0,

  },
  text_forgot: {
    fontWeight: 'bold',
    marginTop: screenHeight * 0.01,

  },
  text_checkbox: {
    fontWeight: 'bold',
    marginTop: screenHeight * 0.01,

  },
  checkboxContainer: {
    flexDirection: 'row',

  },
  checkbox: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },

  btn_login: {
    marginTop: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.08
  },
  or: {
    alignItems: 'center',
    marginTop: screenHeight * 0.02,
    marginBottom: screenHeight * 0.02
  },
  loginViaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  signup: {
    alignItems: 'center',
    marginTop: screenHeight * 0.06
  }
})
export default LoginScreen;