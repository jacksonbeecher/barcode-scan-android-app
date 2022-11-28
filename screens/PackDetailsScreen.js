import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Pick = () => {
    return (
        <View style={styles.tab}>
            <ScrollView>
                <Text>Pick Details:</Text>
            </ScrollView>
        </View>
    )
}

const Pack = () => {
    return (
        <View style={styles.tab}>
            <ScrollView>
                <Text>Pack Details:</Text>
            </ScrollView>
        </View>
    )
}


const Tab = createBottomTabNavigator();

const PackDetailsScreen = ({ route, navigation }) => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        setOrder(route.params.item)
    }, []);



    return(
        <>

            <Tab.Navigator>
                <Tab.Screen name="Pick" component={Pick}/>
                <Tab.Screen name="Pack" component={Pack}/>
            </Tab.Navigator>
        </>
    )
}

export default PackDetailsScreen;

const styles = StyleSheet.create({
    //flex parent
    tabConatiner:{

    },
    tab: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },


});