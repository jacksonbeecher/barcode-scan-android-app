import { View, Text, TouchableOpacity } from 'react-native';
import GetPostStyles from '../styles/GetPostStyles';
import { getUnit, getOrders} from '../component/storage';
import { useState, useEffect } from 'react';
import ButtonStyles from '../styles/ButtonStyles';
import {} from '../component/api';



export default function LoadOrdersScreen({ navigation: { goBack } }) {
    const [unit, setUnit] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        //Load Unit to pass id into load query.
        getUnit().then((value) => {
            console.log(value);
            setUnit(value);
        });
        // getOrders().then((value) => {
        //     //console.log(value);
        //     setOrders(value);
        // });

    }, []);

    const LoadButtonHandler = async () => {
        // console.log(unit);
        // const maxOrders = unit.length;
        // console.log(maxOrders);

        // if (unit !== undefined) {
        //     const orderCount = orders.length
        //     console.log(orderCount);
        // }
        
        //let data = await getUnitFromApi(unitId);
        //Save unit to asyncstorage
        //storeUnit(data);

        let data = await getOrdersFromApi()
    
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
