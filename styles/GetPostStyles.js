import { StyleSheet } from "react-native";

//Stylesheet for LoadOrdersScreen and SendOrdersScreen
export default StyleSheet.create({
    //parent container
    container:{
        flex:1,
        marginTop:8,
    },
    //Child containers
    descContainer:{
        flex:1,

    },
    // buttonContainer: {
    //     flex:6,
    //     flexDirection:'row',
    //     //margin:5,
    // },
    text:{
        fontSize: 20,
        textAlign:'center'
    },
    indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
})