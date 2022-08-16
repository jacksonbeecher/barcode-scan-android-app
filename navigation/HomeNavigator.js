import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadOrdersScreen from './load/LoadOrdersNavigator';
import PackOrdersScreen from './pack/PackOrdersNavigator';
import SendOrdersScreen from './send/SendOrdersNavigator';

const HomeScreen = ({ navigation, props }) => {
    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Logout"
                    onPress={() => {
                        alert("Logged out")

                    }}
                />
            </View>
            <View
                style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/sample-icon.png')}
                />
            </View>
            <Button
                style={styles.button}
                title="Load Order"
                onPress={() =>
                    navigation.navigate('Load Order')
                }
            />
            <Button
                style={styles.button}
                title="Pack Order"
                onPress={() =>
                    navigation.navigate('Pack Order')
                }
            />
            <Button
                style={styles.button}
                title="Send Order"
                onPress={() =>
                    navigation.navigate('Send Order')
                }
            />
            <Text>User: </Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();
//Home displays menu when logged in. 
export default function Home({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Title" }}
            />
            <Stack.Screen
                name="Load Order"
                component={LoadOrdersScreen}
            />
            <Stack.Screen
                name="Pack Order"
                component={PackOrdersScreen}
            />
            <Stack.Screen
                name="Send Order"
                component={SendOrdersScreen}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonContainer: {

    },
    button: {

    },
});