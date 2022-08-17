import { StyleSheet, View, Text, Button} from 'react-native';

export default function SendOrdersScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This function will validate all completed orders on the unit. Those orders will be ready for transfering back to the main system.</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    style={styles.button}
                    title="Send"
                    onPress={() => {
                        alert("Send Orders")
                    }}
                />
                <Button
                    style={styles.button}
                    title="Cancel"
                    onPress={() => {
                        alert("backAction")
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {

    },
    button: {

    },
    text:{
        fontSize:16,

    },
});