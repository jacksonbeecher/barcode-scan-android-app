import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import OrderListItem  from '../component/OrderListItem';
import ButtonStyles from '../styles/ButtonStyles';
import { getOrders } from '../component/storage';

//Pack Order Structure - PackOrderScreen(Select Order) -> PickOrderScreen(Details of selected orders) -> PackItemsScreen (Lines of Selected orders, Scan products to pick.) -> PackProducts -> Packaging -> Carrier Details 
const PackOrdersScreen = ({ navigation: { goBack } }) => {
    const [dataSource, setDataSource] = useState([]); //Order data in JSON format.
    const [isLoaded, setIsLoaded] = useState(false)
    const [orderDS, setOrderDs] = useState([]);

    let orders = [
        { id: 1, orderNo: '300905', customer: "Demo", date: "01/10/2014" },
        { id: 2, orderNo: '124356', customer: "Demo", date: "01/10/2014" },
        { id: 3, orderNo: '123457', customer: "Demo", date: "01/10/2014" },
        { id: 4, orderNo: '123458', customer: "Demo", date: "01/10/2014" },
        { id: 5, orderNo: '300909', customer: "Demo", date: "01/10/2014" },
    ];
    

    useEffect(() => {
        if (isLoaded === false) {
            getOrders().then((value) => {
                console.log(value);
                setOrderDs(value);
            });
            //setDataSource(orders);
        }

    }, [isLoaded]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.orderContainer}>
                <Text>Pack Order: </Text>
                    <FlatList
                        data={orderDS}
                        renderItem={(orderData) => {
                            return (
                                <OrderListItem 
                                    orderNo={orderData.item.orderNo}
                                    date={orderData.date}
                                    customer={orderData.customer}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[]}
                        onPress={() => {
                            goBack()
                        }}>
                        <Text style={ButtonStyles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[]}
                        onPress={() => {
                            alert("Selected order.");
                        }}>
                        <Text style={ButtonStyles.buttonText}>Select</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default PackOrdersScreen;


const styles = StyleSheet.create({
    //flex parent
    container: {
        flex:1,

    },
    //flex child
    orderContainer: {
        flex:5,
        borderWidth: 1,
        margin: 5,
    },
    buttonContainer: {
        flex:1,
    },
    //
    listButton: {
        margin: 5,
    },
    selected: {

    },
    unselected: {

    },


})