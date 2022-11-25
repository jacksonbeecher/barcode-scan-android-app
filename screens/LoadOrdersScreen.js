import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import GetPostStyles from '../styles/GetPostStyles';
import { getUnit, getOrders, storeOrders} from '../component/storage';
import { useState, useEffect } from 'react';
import ButtonStyles from '../styles/ButtonStyles';
import { getOrdersFromApiWithPoolIdAndNoOrders } from '../component/api';



export default function LoadOrdersScreen({ navigation: { goBack } }) {
    const [loading, setLoading] = useState(false)
    const [unit, setUnit] = useState([]);
    const [orders, setOrders] = useState([]);
    const [orderQty, setOrderQty] = useState(0);

    useEffect(() => {
        setLoading(true);
        fetchDeviceData();
        setLoading(false);

    }, []);

    const fetchDeviceData= async () => {
        getOrders().then((value) => {
            if (value){
                setOrders(value);
            }
        });
        //Load Unit to pass id into load query.
        getUnit().then((value) => {
            setUnit(value);
            setOrderQty(value.MaxOrder)
        });
    }

    const LoadButtonHandler = async () => {
        setLoading(true);
        if (!orders) { 
            alert("Cannot get more orders until current ones are complete."); //Error handling for order already existing
        } else if (!unit) {
            alert("Unit not selected.") //Error handling for unvalid unit selection. 
        } else {
            let data = await getOrdersFromApiWithPoolIdAndNoOrders(unit.PoolId, orderQty)
            console.log(data);
            if(data){
                setOrders(data);
                storeOrders(data);
            } else {
                alert("No orders alloacted to this device.");
            }
            
        }
        setLoading(false);
        
    }


    return (
        <View style={[]}>
            <View style={[]}>
                <Text style={GetPostStyles.text}>This function will load and prepare orders ready for packing.</Text>
            </View>
            {loading && 
                <View style={GetPostStyles.indicator}>
                    <ActivityIndicator size = 'large' />
                </View>
            }
            <View style={[]}>
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
                        LoadButtonHandler();
                    }}>
                    <Text style={ButtonStyles.buttonText}>Load</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
