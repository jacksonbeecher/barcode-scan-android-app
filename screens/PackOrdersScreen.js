import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import OrderListItem  from '../component/OrderListItem';
import ButtonStyles from '../styles/ButtonStyles';
import { getOrders } from '../component/storage';
import { Icon } from '@rneui/themed';
import PackItemsScreen from './PackItemsScreen';

const ListItem = ({ item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style = {[styles.listItem, style]}>
        <Text style={styles.listCell}>{item.OrderNo}</Text>
        {/* <Text style={styles.listCell}>{item.Customer}</Text> */}
        <Text style={styles.listCell}>{item.Reference}</Text>
        <Icon style={[]} type="ionicon" name="chevron-forward-outline"/>
    </TouchableOpacity>
);

//Pack Order Structure - PackOrderScreen(Select Order) -> PickOrderScreen(Details of selected orders) -> PackItemsScreen (Lines of Selected orders, Scan products to pick.) -> PackProducts -> Packaging -> Carrier Details 
const PackOrdersScreen = ({ navigation}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [orderDS, setOrderDs] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (isLoaded === false) {
            GetOrderData();
        }

    }, [isLoaded]);

    const GetOrderData = () => {
        getOrders().then((value) => {
            setOrderDs(value);
        });
    }

    const renderHeader = () => {
        return (
            <View>
                <Text style={styles.header}>Orders</Text>
            </View>
        );
    }

    const renderSeparator = () => {
        return <View style={styles.itemSeparator}></View>;
    };

    const emptyListView = () => {
        return (
          <View>
            <Text>No records found.</Text>
          </View>
        );
    };

    const renderItem = ({item}) => {
        const backgroundColor = item.OrderId === selected.OrderId ? "#6e3b6e" : "#f9c2ff";
        const color = item.OrderId === selected.OrderId ? 'white' : 'black';
        return (
            <ListItem
                item={item}
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('PackItemsScreen', {item});
                }}
                backgroundColor={{ backgroundColor }}
                textColor = {{ color }}
            />
        );
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.orderContainer}>
                    <View style = {styles.listItem}>
                        <Text style={styles.listCell}>OrderNo</Text>
                        <Text style={styles.listCell}>Referen</Text>
                        <Icon style={styles.listCell} type="ionicon" name="ellipsis-vertical-circle-outline"/>
                    </View>
                    <FlatList
                        data={orderDS}
                        renderItem={(renderItem)}
                        keyExtractor={(item) => item.OrderId }
                        extraData = {selected.OrderId}
                        alwaysBounceVertical={false}
                        ListHeaderComponent = {renderHeader}
                        emptyListView = {emptyListView}
                        ItemSeparatorComponent = {renderSeparator}
                        
                    />
                </View>
                {/* <View style={styles.buttonContainer}>
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
                            alert(selected.OrderNo);
                        }}>
                        <Text style={[ButtonStyles.buttonText]}>Select</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </SafeAreaView>
    );
}

export default PackOrdersScreen;


const styles = StyleSheet.create({
    //flex parent
    container: {
        //flex:1,
    },
    //flex child
    orderContainer: {
        //flex:1,
        //borderWidth: 2,
        //borderRadius: 5,
        //margin: 5,
        height: '85%',
    },
    buttonContainer: {
        flex:1,
        flexDirection:'row',
    },
    //
    listHeader:{ //Header

    },
    listItem: { //List item is clickable row item. 
        margin: 5,
        padding: 5,
        flexDirection:'row',
    },
    listCell:{ //List cell are row cell values.
        flex: 1,
        //borderWidth:1,
        alignContent:'center',
        alignItems:'center',
        textAlign: 'center',
        fontSize: 18,
    },
    selected: {

    },
    unselected: {

    },
    header: {
        fontSize: 24,
        paddingVertical: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#DCDCDC',
    },
    itemSeparator: {
        backgroundColor: 'green',
        height: 1,
    },


})