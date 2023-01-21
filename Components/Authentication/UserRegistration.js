import React from "react"
import { black, orange, auth_styles } from "./authentication_style"
import { Alert, View, Button, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingViewComponent, KeyboardAvoidingView, Pressable, } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ValidationComponent from 'react-native-form-validator';

import Parse from "parse/react-native.js";

var logo = require("../../assets/logo_tmp.png")
class UserRegistration extends ValidationComponent{

    constructor(props) {
        super(props);
        this.state = {name : "", email: "", password:""};
        this.name=""
        this.email=""
        this.password=""
    }

    doUserRegistration = async function () {
        const username = this.state.name
        const email = this.state.email
        const password = this.state.password
        // Since the signUp method returns a Promise, we need to call it using await
        return await Parse.User.signUp(username, password, {email:email})
          .then((createdUser) => {
            Alert.alert(
              'Success!',
              `User ${createdUser.getUsername()} was successfully created!`,
            );
            return true;
          })
          .catch((error) => {
            // signUp can fail if any parameter is blank or failed an uniqueness check on the server
            Alert.alert('Error!', error.message);
            return false;
          });
    }

    _onSubmit = () => {
        this.validate({
            name: {minlength:3, maxlength:20, required: true},
            email: {email: true, required: true},
            password: {password: true, required: true},
        });

            if(this.isFormValid()==true){
                if(this.doUserRegistration())
                {
                    this.props.navigation.navigate("App")
                }
            }
            else{
                Alert.alert(this.getErrorMessages())
            }
    }

     render(){
        return(
                <View style={[auth_styles.maincontainer]}>

                <View style={{width:"100%", height:5, color:"red",}}><Text></Text></View>

                        <View style={{backgroundColor:'none', width:"100%", justifyContent:"center", alignItems:"center"}}>
                        <View style={{}}>
                            <Image style={[auth_styles.logo]} source={logo} />
                            <Text style={{color:orange, textAlign:"center",}}>iMeet</Text>
                        </View>

                        <View style={{width:"100%", height:20}}><Text></Text></View> 

                        <View style={[]}>
                            
                            <Text style={[auth_styles.title,{color:orange, textAlign:"center",}]}>ÜYE OL</Text>
                            
                            <Pressable onPress={()=>{this.props.navigation.navigate('SignIn')}}>
                                <Text style={[auth_styles.simple_text]}>Hesabiniz mi var... <Text style={{color:"blue", textDecorationLine:"underline"}}>Kayit Ol</Text></Text>
                            </Pressable>
                        </View>

                            <View style={{width:"100%", height:20}}><Text></Text></View> 
                    <KeyboardAwareScrollView  extraScrollHeight={ this.props.extraScrollHeight } keyboardShouldPersistTaps='handled' enableOnAndroid >
                        <View style={[auth_styles.signup]}>
                            <View>
                                <Text style={[auth_styles.label]}>USER</Text>
                                    <TextInput style={[auth_styles.input]} onChangeText={(user)=>{this.setState({name:user})}} autoCapitalize="none" autoCorrect={false} placeholder="pseudonyme" />
                                <Text style={[auth_styles.label]}>EMAIL</Text>
                                    <TextInput style={[auth_styles.input]} onChangeText={(email)=>{this.setState({email:email})}} autoCapitalize="none" autoCorrect={false} placeholder="email"/>
                                <Text style={[auth_styles.label]}>PASSWORD</Text>
                                    <TextInput style={[auth_styles.input]} secureTextEntry onChangeText={(password)=>{this.setState({password:password})}} autoCapitalize="none" autoCorrect={false} textContentType="newPassword" placeholder="*******"/> 
                            </View>
                            <TouchableOpacity  style={[auth_styles.button]} title="Sign Up" onPress={()=>{this._onSubmit()}}>

                                    <Text style={[auth_styles.text_button]} >Sign Up</Text>
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
