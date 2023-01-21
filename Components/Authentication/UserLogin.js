import React from "react"
import { black, orange, auth_styles } from "./authentication_style"
import { Alert, View, Button, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingViewComponent, KeyboardAvoidingView, Pressable, } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Parse from "parse/react-native.js";


var logo = require("../../assets/logo_tmp.png")
class UserRegistration extends React.Component{

    constructor(props){
        super(props)
        this.state = { username:"", password:"" }
    }

    doUserLogIn = async function () {
        // Note that these values come from state variables that we've declared before
        return await Parse.User.logIn(this.state.username, this.state.password)
          .then(async (loggedInUser) => {
            // logIn returns the corresponding ParseUser object
            Alert.alert(
              'Success!',
              `User ${loggedInUser.get('username')} has successfully signed in!`,
            );
            // To verify that this is in fact the current user, currentAsync can be used
            const currentUser = await Parse.User.currentAsync();
            console.log(loggedInUser === currentUser);

            this.props.navigation.navigate("App")

            return true;
          })
          .catch((error) => {
            // Error can be caused by wrong parameters or lack of Internet connection
            Alert.alert('Error!', error.message);
            return false;
          });
      };

      signIn = () => {
            if(this.doUserLogIn()){
            }
            else{ }
      }

     render(){
        return(
                <View style={[auth_styles.maincontainer]}>
                    <View style={{width:"100%", height:5}}><Text></Text></View> 


                    <View style={{backgroundColor:'none', width:"100%", justifyContent:"center", alignItems:"center"}}>
                        <View style={{}}>
                            <Image style={[auth_styles.logo]} source={logo} />
                            <Text style={{color:orange, textAlign:"center",}}>iMeet</Text>
                        </View>

                        <View style={{width:"100%", height:20}}><Text></Text></View> 

                        <View style={[]}>
                            <Text style={[auth_styles.title,{color:orange, textAlign:"center",}]}>KAYIT OL</Text>
                            
                            <Pressable onPress={()=>{this.props.navigation.navigate('SignUp')}}>
                                <Text style={[auth_styles.simple_text]}>Hesabiniz mi yok... <Text style={{color:"blue", textDecorationLine:"underline"}}>Üye Ol</Text></Text>
                            </Pressable>
                        </View>

                            <View style={{width:"100%", height:20}}><Text></Text></View> 
                    <KeyboardAwareScrollView  extraScrollHeight={ this.props.extraScrollHeight } keyboardShouldPersistTaps='handled' enableOnAndroid >
                        <View style={[auth_styles.signup]}>
                            <View>
                                <Text style={[auth_styles.label]}>USER OR EMAIL</Text>
                                    <TextInput onChangeText={(username)=>{this.setState({username:username})}} style={[auth_styles.input]} autoCapitalize="none" autoCorrect={false} placeholder="pseudonyme" />
                                <Text style={[auth_styles.label]}>PASSWORD</Text>
                                <TextInput style={[auth_styles.input]}  onChangeText={(password)=>{this.setState({password:password})}} secureTextEntry autoCapitalize="none" autoCorrect={false} textContentType="newPassword" placeholder="*******"/> 
                            </View>
                            <TouchableOpacity  style={[auth_styles.button]} title="Sign In" onPress={()=>{this.doUserLogIn()}}>

                                    <Text style={[auth_styles.text_button]} >Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                    </View>

                    <View style={[auth_styles.box_3d, {flexDirection:"row", justifyContent:"space-between", width:"100%", paddingHorizontal:10,}]}>
                        <Text style={[auth_styles.simple_text]}>Powered By</Text>
                        <Text style={[auth_styles.simple_text, {color:"gray",}]}>JIRA</Text>
                    </View>
                </View>
           
        )
     }
}

export default UserRegistration
