import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/GetPostStyles';
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
        getOrders().then((value) => {
            //console.log(value);
            setOrders(value);
        });

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
    
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This function will load and prepare orders ready for packing.</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={ButtonStyles.button}
                    onPress={() => {
                        goBack()
                    }}>
                    <Text style={ButtonStyles.text}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ButtonStyles.button}
                    onPress={() => {
                        LoadButtonHandler();
                    }}>
                    <Text style={ButtonStyles.text}>Load</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
