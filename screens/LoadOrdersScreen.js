import { View, Text, TouchableOpacity } from 'react-native';
import GetPostStyles from '../styles/GetPostStyles';
import { getUnit, getOrders} from '../component/storage';
import { useState, useEffect } from 'react';
import ButtonStyles from '../styles/ButtonStyles';
import {} from '../component/api';

export default function LoadOrdersScreen({ navigation: { goBack } }) {
    const [loading, setLoading] = useState(false)
    const [unit, setUnit] = useState([]);
    const [orders, setOrders] = useState([]);
    const [orderQty, setOrderQty] = useState(0);

    useEffect(() => {
        getOrders().then((value) => {
            if (value){
                setOrders(value)
            }
        });


        //Load Unit to pass id into load query.
        getUnit().then((value) => {
            setUnit(value);
            setOrderQty(value.MaxOrder)
        });

        


    }, []);

    const fetchOrderData = async () => {
        // try {
        //     //Use UnitId and NoOrders to select a couple of orders from DM host.
        //     let data = await getOrdersFromApi(unit, ); //data is in json format.
        //     setUnitDS(data);
        // } catch (error){

        // } finally {

        // }
    }

    const LoadButtonHandler = async () => {
        if (!orders) {
            alert("Cannot get more orders until current ones are complete.");
        } else if (!unit) {
            alert("Unit not selected.")
        } else {
            
        }
        
        //let data = await getUnitFromApi(unitId);
        //Save unit to asyncstorage
        //storeUnit(data);

        //let data = await getOrdersFromApi()
    
    }

    return (
        <View style={[]}>
            <View style={[]}>
                <Text style={GetPostStyles.text}>This function will load and prepare orders ready for packing.</Text>
            </View>
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
