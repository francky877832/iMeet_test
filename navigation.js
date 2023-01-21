import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import UserRegistration from './Components/Authentication/UserRegistration';
import UserLogin from './Components/Authentication/UserLogin';
import Chat from './Components/Chat';

const stack = createNativeStackNavigator()
const tab = createBottomTabNavigator()

export function AppNavigator(){

    return(
        <tab.Navigator initialRouteName='Chat'>
              <tab.Screen name="Discover" component={Chat} options={{ headerShown:false, }}/>
              <tab.Screen name="NearBy" component={Chat} options={{ headerShown:false, }}/>
              <tab.Screen name="Chat" component={Chat} options={{ headerShown:false, }}/>
              <tab.Screen name="Likes" component={Chat} options={{ headerShown:false, }}/>
              <tab.Screen name="Profil" component={Chat} options={{ headerShown:false, }}/>
          </tab.Navigator>
    );
}

export function mainNavigator(){
    
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName='SignIn'>
                <stack.Screen name="SignUp" component={UserRegistration} options={{title:"Sign Up", headerShown:true, headerStyle:{backgroundColor:"#ff914d"}, headerTitleStyle:{color:"#fff"}, headerTitleAlign:"center" }}/>
                <stack.Screen name="SignIn" component={UserLogin} options={{title:"Sign In", headerShown:true, headerStyle:{backgroundColor:"#ff914d"}, headerTitleStyle:{color:"#fff"}, headerTitleAlign:"center" }}/>

              <stack.Screen name="App" component={AppNavigator} options={{ headerShown:false }}/>
          </stack.Navigator>
        </NavigationContainer>

    )
}