import { View, Text, Button } from 'react-native';
import styles from '../styles/GetPostStyles';

callApi = () => {
    alert("Send Orders Api Call.")
}

export default function SendOrdersScreen({ navigation: {goBack} }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This function will validate all completed orders on the unit. Those orders will be ready for transfering back to the main system.</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        style={styles.button}
                        title="Send"
                        onPress={() => {
                            callApi()
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