import { StyleSheet } from "react-native";

//Stylesheet for LoadOrdersScreen and SendOrdersScreen
export default StyleSheet.create({
    button:{
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 10,
        width:'100%',
        alignSelf:'center',
        //flexWrap:'wrap',

    },
    buttonText:{
        backgroundColor: "#5188E3",
        color: "white",
        textAlign: "center",
        marginHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: 20,
    },
})