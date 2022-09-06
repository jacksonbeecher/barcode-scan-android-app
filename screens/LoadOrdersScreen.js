import { View, Text, Button } from 'react-native';
import styles from '../styles/GetPostStyles';
import { getUser } from '../component/AsyncStorage';
import { useState } from 'react';

callApi = () => {
    alert("Load Orders Api Call.")
}

export default function LoadOrdersScreen({ navigation:{goBack} }) {
    //Get handhelduser id
    const [userId, setUserId] = useState(0)
    //Stop order get if unit data is invalid.

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This function will load and prepare orders ready for packing.</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        style={styles.button}
                        title="Load"
                        onPress={() => {
                            callApi();
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        style={styles.button}
                        title="Cancel"
                        onPress={() => {
                            goBack()
                        }}
                    />
                </View>
            </View>
        </View>
    );
}
