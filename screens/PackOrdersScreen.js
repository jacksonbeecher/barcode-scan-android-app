import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, SafeAreaView, Button, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import OrderListItem  from '../component/OrderListItem';

//Pack Order Structure - PackOrderScreen(Select Order) -> PickOrderScreen(Details of selected orders) -> PackItemsScreen (Lines of Selected orders, Scan products to pick.) -> PackProducts -> Packaging -> Carrier Details 
const PackOrdersScreen = ({ navigation: { goBack } }) => {
    const [dataSource, setDataSource] = useState([]); //Order data in JSON format.
    const [isLoaded, setIsLoaded] = useState(false)

    let orders = [
        { id: 1, orderNo: '300905', customer: "Demo", date: "01/10/2014" },
        { id: 2, orderNo: '124356', customer: "Demo", date: "01/10/2014" },
        { id: 3, orderNo: '123457', customer: "Demo", date: "01/10/2014" },
        { id: 4, orderNo: '123458', customer: "Demo", date: "01/10/2014" },
        { id: 5, orderNo: '300909', customer: "Demo", date: "01/10/2014" },
    ];
    

    useEffect(() => {
        if (isLoaded === false) {
            setDataSource(orders);
        }

    }, [isLoaded]);


    return (
        <SafeAreaView>
            <Text>Pack Order: </Text>
            <View style={styles.orderContainer}>
                <FlatList
                    data={dataSource}
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
                <View style={styles.button}>
                    <Button
                        title="Select"
                        onPress={() => {
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Cancel"
                        onPress={() => {
                            goBack()
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default PackOrdersScreen;


const styles = StyleSheet.create({
    container: {

    },
    orderContainer: {
        height: '80%',
        borderWidth: 1,
        margin: 5,

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        margin: 5,
    },
    selected: {

    },
    unselected: {

    },


})