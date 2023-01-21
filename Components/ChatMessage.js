import React from "react"
import { black, orange, auth_styles, gray } from "./Authentication/authentication_style"
import { Alert, View, Button, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingViewComponent, KeyboardAvoidingView, Pressable, FlatList, } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { chat_message_styles } from "./chat_message_style"

var img = require("../assets/logo_tmp.png")
class ChatMessage extends React.Component{
    constructor(props){
        super(props)
        this.message = this.props.message
    }
    formateMessage = (text) => {
        if(text.length > 40)
        {
           return text.substring(0, 40)+"..."
        }
        return text
        
    }

    formateName = (text) => {
        if(text.length > 20)
        {
           return text.substring(0, 20)+"..."
        }
        return text
        
    }

     render(){
        return(
                <TouchableOpacity style={[chat_message_styles.maincontainer]}>
                    <View style={[chat_message_styles.im_container]}>
                        <Pressable onPress={() => Alert.alert("Hello")}>
                            <Image style={[chat_message_styles.img]} source={this.message.poster_path} />
                        </Pressable>
                    </View>

                    <View style={[chat_message_styles.text_container]}>
                        <View style={[chat_message_styles.title]}>
                            <Text numberOfLines={1} style={{color:"#fff",fontWeight:"bold",fontSize:17,}}>{this.formateName(this.message.title)}</Text>
                            <Text numberOfLines={1} style={{color:"#d9d9d9",}}>{this.message.release_date}</Text>
                        </View>

                        <View style={[chat_message_styles.overview]}>
                            <Text numberOfLines={1} style={{color:"#d9d9d9",}}>{this.formateMessage(this.message.overview)}</Text>
                        </View>

                        <View style={[chat_message_styles.line]}></View>
                    </View>
                </TouchableOpacity>
            )
    }
}

export default ChatMessage;