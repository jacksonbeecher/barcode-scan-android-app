import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TextInput, FlatList } from "react-native";
import { Icon, CheckBox } from '@rneui/themed';
import moment from 'moment';

import OrderInput from '../component/OrderComponent';

const BLUE = "#428AF8";
const LIGHT_GREY = "#D3D3D3"

const Pick = (params) => {
    const [complete, setComplete] = useState(false);

    //Parse order data to here.
    let order = params.order;
    moment.locale('en');
    var dt = order.OrderDate;
    var date = moment(dt).format('DD/MM/YYYY');

    // const completeCheckHandler = () => {
    //     () => setComplete(!complete);
    //     console.log(complete);
    // }    

    return (
        <View style={[]}>
            <ScrollView 
            >
                <Text>Customer: {order.CustomerCode}</Text>
                <Text>{order.Customer}</Text>
                <Text>Order No: {order.OrderNo} Date: {date}</Text>
                <OrderInput order={order} value={"Reference"} label={"Reference"} editable={true} style={[styles.textInput]}/>
                <View style= {{flexDirection:'row'}}>
                <OrderInput order={order} value={"RowNo"} label={"Row"} editable={true} style={[styles.textInput]}/>
                    <CheckBox
                        right
                        checked={complete}
                        checkedColor="#0F0"
                        checkedTitle="Complete:"
                        containerStyle={{ width: "50%", backgroundColor: 'rgba(52, 52, 52, 0)' }}
                        onIconPress={() => setComplete(!complete)}
                        onLongIconPress={() =>
                        console.log("onLongIconPress()")
                        }
                        onLongPress={() => console.log("onLongPress()")}
                        onPress={() => console.log("onPress()")}
                        size={30}
                        textStyle={{}}
                        title="Complete:"
                        titleProps={{}}
                        uncheckedColor="#F00"
                        iconRight
                    />
                </View>
                <OrderInput order={order} value={"Notes"} label={"PackerNotes"} editable={true} style={[styles.textInput]}/>
            </ScrollView>
        </View>
    )
}

const Pack = (params) => {
    let order = params.order
    return (
        <View style={[]}>
            <ScrollView>
                <Text>Customer: {order.CustomerCode}</Text>
                <Text>{order.Customer}</Text>
                <Text>Order No: {order.OrderNo}</Text>
                <View style={[styles.lineList]}>
                    <Text style={[styles.listItem]}>Bin</Text>
                    <Text style={[styles.listItem]}>Product</Text>
                    <Text style={[styles.listItem]}>Order</Text>
                    <Text style={[styles.listItem]}>Pack</Text>
                    <Text style={[styles.listItem]}>Item</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const Tab = createBottomTabNavigator();

const PackDetailsScreen = ({ route, navigation }) => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        setOrder(route.params.item);
    }, []);

    //Parent function for updating order information.
    // onEdit = (data) => {

    // }

    return(
        <>
            <Tab.Navigator
                // tabBarOptions={{
                //     //keyboardHidesTabBar: true,
                //     //tabBarHideOnKeyboard: true
                // }}   
                screenOptions={({route}) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: [
                        {
                        "display": "flex"
                        },
                        null
                    ],
                    tabBarIcon:({ focused }) => {
                        let iconName;
                        if (route.name === 'Pick') {
                            iconName = focused
                              ? 'ios-information-circle'
                              : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }
                        return <Icon style ={[]} type="ionicon" name={iconName}/>
                    },
                    tabBarIcon:({ focused }) => {
                        let iconName;
                        if (route.name === 'Pick') {
                            iconName = focused
                              ? 'ios-information-circle'
                              : 'ios-information-circle-outline';
                        } else if (route.name === 'Pack') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }
                          return <Icon style={[]} type="ionicon" name={iconName}/>
                    },
                    tabBarActiveTintColor:'black',
                    tabBarActiveBackgroundColor:'#DCDCDC',
                    
                })}
            >
                <Tab.Screen 
                    name="Pick" 
                    children={() => <Pick order={route.params.item}/>}
                    // component={Pick} 
                    getId={order.OrderId} 
                    //initialParams={order}
                    options={({route, navigation}) => ({
                        headerShown:false,
                        //params:{order}
                    })}
                />
                    
                <Tab.Screen 
                    name="Pack" 
                    children={() => <Pack order={route.params.item}/>}
                    //component={Pack} 
                    getId={order.OrderId} 
                    //initialParams={order}
                    options={({route, navigation}) => ({
                        headerShown:false,
                        //params:{order}
                    })}
                />
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
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        marginHorizontal: 10,
        padding:5,

    },
    lineList:{
        flexDirection:'row',
    },
    listItem:{
        flex:1,
        textAlign:'center',

    },
});