import { mainNavigator } from './navigation';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import UserRegistration from './Components/Authentication/UserRegistration';
import UserLogin from './Components/Authentication/UserLogin';
import Chat from './Components/Chat';


Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('Lw8YMv5FF7mxdxGVuvh49Uq0V9l73lAMZqzNFCaW','gJxqRq9cMDnvudgWDC80EPaJEQHC7Ufo61qEYMU3');
Parse.serverURL = 'https://parseapi.back4app.com/';


/*headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: styles.headerBackgroundColor,
            headerTitleStyle: styles.headerTitleStyle,
                          <StatusBar barStyle="dark-content" backgroundColor="#ff917f" />
              <stack.Screen name="SignUp" component={UserRegistration} options={{title:"Sign Up", headerShown:true, headerStyle:{backgroundColor:"#ff914d"}, headerTitleStyle:{color:"#fff"}, headerTitleAlign:"center" }}/>
              <stack.Screen name="SignIn" component={UserLogin} options={{title:"Sign In", headerShown:true, headerStyle:{backgroundColor:"#ff914d"}, headerTitleStyle:{color:"#fff"}, headerTitleAlign:"center" }}/>

            */
export default class App extends React.Component {
    render(){
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      return (
        mainNavigator()
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
