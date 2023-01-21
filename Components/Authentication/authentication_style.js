import { StyleSheet } from "react-native"
//background_style button_style input_style title_style
export const black = '#1d272b', orange = "#ff914d", gray="#4d4c4c"
const box_3d = {width:90, height:1000} 
export const auth_styles =  StyleSheet.create({
    maincontainer: {
         flex: 1,
        // marginTop: 20,
        backgroundColor: black,
        flexDirection: "column",
        alignItems: "center",
        
    },
    background: {

    },
    signup: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
              
    },
    button: {
        backgroundColor: "#F16C1A",
        marginTop: 10,
        width: 300,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",  

    },
    text_button: {
        color: "#fff",
        fontWeight: "bold"
    },
    label: {
        color: gray,
        marginBottom: 5,
    },
    input: {
        backgroundColor: gray,
        color: "#fff",
        fontSize: 16,
        marginBottom:10,
        width: 250,
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        fontStyle: "italic",
    },
    logo: {
        width: 100,
        height: 100,
    },
    box_3d: {
        backgroundColor: "#000",
        position: "absolute",
        bottom:0,
       width: "90%",
       /* backgroundColor: orange,
        position: "relative",
        bottom:0,
        //transform: [{scale:1}, {rotateX:"60deg"}, {translateY:0,}],
        
        
        left: "50%",
        marginLeft: -box_3d.width/2,
        */
    },
    simple_text: {
        color: "#fff",
    },

});


