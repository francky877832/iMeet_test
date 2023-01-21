import data  from "../Helpers/gameDatas.js"
import React from "react"
import { black, orange, auth_styles } from "./Authentication/authentication_style"
import { Alert, View, Button, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingViewComponent, KeyboardAvoidingView, Pressable, FlatList, } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { chat_styles } from "./chat_style"

import ChatMessage from "./ChatMessage.js"


var img = require("../assets/logo_tmp.png")
class Chat extends React.Component{
     render(){
        return(
                <View style={[chat_styles.maincontainer]}>
                    <View style={[chat_styles.match]}>
                        <View style={[chat_styles.match_title]}>
                            <Text style={{color:"#f16c1a", fontSize: 20,}}>Matches</Text>
                            <Pressable onPress={()=>{Alert.alert("My matches");}}>
                                <Text style={{color:"#f16c1a", fontSize: 20,}}>Hepsini Gör</Text>
                            </Pressable>
                        </View >
                        
                        <View style={[chat_styles.match_img_block]}>
                            <Pressable onPress={() => Alert.alert("Hello")}>
                                <Image style={[chat_styles.match_img]} source={img} />
                            </Pressable>
                            <Pressable onPress={() => Alert.alert("Hello")}>
                                <Image style={[chat_styles.match_img]} source={img} />
                            </Pressable>
                            <Pressable onPress={() => Alert.alert("Hello")}>
                                <Image style={[chat_styles.match_img]} source={img} />
                            </Pressable>
                            <Pressable onPress={() => Alert.alert("Hello")}>
                                <Image style={[chat_styles.match_img]} source={img} />
                            </Pressable>
                            <Pressable onPress={() => Alert.alert("Hello")}>
                            <Image style={[chat_styles.match_img]} source={img} />
                            </Pressable>
                        </View>
                    </View>


                    <View style={{marginTop:20,}}></View>


                    <View style={[chat_styles.chat]}>
                        <View style={[chat_styles.chat_title]}>
                            <Text style={{color:"#f16c1a", fontSize: 30,}}>Sohbet</Text>
                        </View>
                        
                        <View>
                            <FlatList data={data} 
                                keyExtractor={(item) =>  item.id}
                                renderItem={({item}) => <ChatMessage message={item} />}
                                onEndReachedThreshold={0.5}
                                onEndReached={()=>{}}
                            />
                        </View>
                    </View>

                </View>
            )
    }
}

export default Chat;