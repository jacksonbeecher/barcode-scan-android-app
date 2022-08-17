import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
    return (
        <View>
            <View
                >
                <Image
                    source={require('../assets/images/sample-icon.png')}
                />
            </View>
            <Text >Current User: </Text>
            <View >
                <Button
                    title="Load Order"
                    onPress={() =>
                        navigation.navigate('Load Order')
                    }
                />
            </View>
            <View >
                <Button
                    title="Pack Order"
                    onPress={() =>
                        navigation.navigate('Pack Order')
                    }
                />
            </View>
            <View >
                <Button
                    title="Send Order"
                    onPress={() =>
                        navigation.navigate('Send Order')
                    }
                />
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        //flex:1,
    },
    text: {
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        textAlign: "center",

    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        width: '20%',
        textAlign: 'center',
        alignContent: "center",
        margin: 5,
        backgroundColor: '#0080ff',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,

    },
    userContainer: {
        borderWidth: 1,
        margin: 5,
        //flex: 3,
    },
    selected: {

    },
    unselected: {

    },
    image: {

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})