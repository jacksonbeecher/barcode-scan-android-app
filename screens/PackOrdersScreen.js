import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import OrderListItem  from '../component/OrderListItem';
import ButtonStyles from '../styles/ButtonStyles';
import { getOrders } from '../component/storage';
import { Icon } from '@rneui/themed';
import PackDetailsScreen from './PackDetailsScreen';
import moment from 'moment';

const ListItem = ({ item, onPress, style}) => {
    moment.locale('en');
    var dt = item.OrderDate;
    var date = moment(dt).format('DD/MM/YYYY')
    return (
        <TouchableOpacity onPress={onPress} style = {[styles.listItem, style]}>
            <Text style={styles.listCell}>{item.Customer}</Text>
            <Text style={styles.listCell}>{date}</Text>
            <Text style={styles.listCell}>{item.OrderNo}</Text>
            <Icon style={[]} type="ionicon" name="chevron-forward-outline"/>
        </TouchableOpacity>
    )
};

//Pack Order Structure - PackOrderScreen(Select Order) -> PickOrderScreen(Details of selected orders) -> PackItemsScreen (Lines of Selected orders, Scan products to pick.) -> PackProducts -> Packaging -> Carrier Details 
const PackOrdersScreen = ({ navigation }) => {
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
                    navigation.navigate('Pack Details', {item});
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
                        <Text style={styles.listCell}>Customer</Text>
                        <Text style={styles.listCell}>Date</Text>
                        <Text style={styles.listCell}>Order No</Text>
                        <Icon style={styles.listCell} type="ionicon" name="ellipsis-vertical-circle-outline"/>
                    </View>
                    <FlatList
                        data={orderDS}
                        renderItem={(renderItem)}
                        keyExtractor={(item) => item.OrderId }
                        extraData = {selected.OrderId}
                        alwaysBounceVertical={true}
                        ListHeaderComponent = {renderHeader}
                        emptyListView = {emptyListView}
                        ItemSeparatorComponent = {renderSeparator}
                    />
                </View>
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
        fontSize: 16,
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


});