import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/GetPostStyles';
import ButtonStyles from '../styles/ButtonStyles';

callApi = () => {
    alert("Send Orders Api Call.")
}

export default function SendOrdersScreen({ navigation: {goBack} }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This function will validate all completed orders on the unit. Those orders will be ready for transfering back to the main system.</Text>
            {/* <View style={styles.buttonContainer}>
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
            </View> */}
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
                    <Text style={ButtonStyles.text}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}