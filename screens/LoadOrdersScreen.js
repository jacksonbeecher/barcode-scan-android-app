import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/GetPostStyles';
import { getUser } from '../component/AsyncStorage';
import { useState } from 'react';
import ButtonStyles from '../styles/ButtonStyles';

callApi = () => {
    alert("Load Orders Api Call.")
}

export default function LoadOrdersScreen({ navigation: { goBack } }) {
    //Get handhelduser id
    const [userId, setUserId] = useState(0)
    //Stop order get if unit data is invalid.

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
                        callApi();
                    }}>
                    <Text style={ButtonStyles.text}>Load</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
