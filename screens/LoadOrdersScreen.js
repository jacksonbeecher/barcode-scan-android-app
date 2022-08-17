import { View, Text, Button } from 'react-native';
import styles from '../styles/GetPostStyles';

callApi = () => {
    alert("Load Orders Api Call.")
}

export default function LoadOrdersScreen({ navigation, route }) {
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
                            alert("backAction")
                        }}
                    />
                </View>
            </View>
        </View>
    );
}
