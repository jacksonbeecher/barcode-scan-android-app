import { StyleSheet, View, Text, Button } from 'react-native';

export default function LoadOrdersNavigator() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This function will load and prepare orders ready for packing.</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    style={styles.button}
                    title="Load"
                    onPress={() => {
                        alert("Load Orders")
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