import { StyleSheet } from "react-native"
//background_style button_style input_style title_style
export const black = '#1d272b', orange = "#ff914d", gray="#4d4c4c"
const box_3d = {width:90, height:1000} 
export const chat_styles =  StyleSheet.create({
    maincontainer: {
        paddingTop: 30,
        backgroundColor: "#1d272b",
        paddingHorizontal: 5,
        width: "100%",
        height: "100%",
        
    },
    chat_title: {
        paddingLeft: 10,
    },
    match_title: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    match_img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: gray,
        backgroundColor: "#1d272b",
    },
    match_img_block: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        
    },
})