import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, FlatList } from "react-native";
import { Icon, CheckBox } from '@rneui/themed';
import moment from 'moment';

import OrderInput from '../component/OrderComponent';
import OrderLineListItem from '../component/OrderLineListItem';

const BLUE = "#428AF8";
const LIGHT_GREY = "#D3D3D3"

//Render Pick Tab
const Pick = (params) => {
    const [complete, setComplete] = useState(false);
    //Parse order data to here.
    let order = params.order;
    //Change date to a readable format.
    moment.locale('en');
    var dt = order.OrderDate;
    var date = moment(dt).format('DD/MM/YYYY');

    return (
        <View style={[]}>
            <ScrollView 
            >
                <Text>Customer: {order.CustomerCode}</Text>
                <Text>{order.Customer}</Text>
                <Text>Order No: {order.OrderNo} Date: {date}</Text>
                <OrderInput order={order} value={"Reference"} label={"Reference"} editable={false} style={[styles.textInput]}/>
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

//Render Pack Tab
const Pack = (params) => {
    let order = params.order
    let lines = order.OrderLines


    const renderItem = ({item}) => {
        console.log(item);
        // item.forEach(element => {
        //     console.log(element);
        // });
        // const backgroundColor = item.OrderId === selected.OrderId ? "#6e3b6e" : "#f9c2ff";
        // const color = item.OrderId === selected.OrderId ? 'white' : 'black';
        //console.log(item);
        return (
            <OrderLineListItem
                item={item}
                onPress={() => {
                    //console.log({item});
                    /* 1. Navigate to order line route with params */
                    // navigation.navigate('', {item});
                }}
                // backgroundColor={{ backgroundColor }}
                // textColor = {{ color }}
            />
        );
    }
    return (
        <View style={[]}>
            <Text>Customer: {order.CustomerCode}</Text>
            <Text>{order.Customer}</Text>
            <Text>Order No: {order.OrderNo}</Text>
            <View>
                <View style={[styles.lineList]}>
                    <Text style={[styles.listItem]}>Bin</Text>
                    <Text style={[styles.listItem]}>Product</Text>
                    <Text style={[styles.listItem]}>Order</Text>
                    <Text style={[styles.listItem]}>Pack</Text>
                    <Text style={[styles.listItem]}>Item</Text>
                </View>
                <FlatList
                    data={lines}
                    renderItem={(renderItem)}
                    keyExtractor={(item) => item.OrderLineId}
                />
            </View>
        </View>
    )
}

const Tab = createBottomTabNavigator();

const PackDetailsScreen = ({ route, navigation }) => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        console.log(route.params.item);
        setOrder(route.params.item);
    }, []);

    return (
        <>
            <Tab.Navigator  
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