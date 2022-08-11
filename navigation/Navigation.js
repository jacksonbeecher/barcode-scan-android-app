import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Welcome" }}
                />
                <Stack.Screen name="Load Order" component={LoadOrdersScreen} />
                <Stack.Screen name="Pack Order" component={PackOrdersScreen} />
                <Stack.Screen name="Send Order" component={SendOrdersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const HomeScreen = ({ navigation }) => {
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
            <View style={styles.imageContainer}>
                <Image
                    //style={styles.tinyLogo}
                    source={require('../assets/images/sample-icon.png')}
                />
            </View>
            <Button
                title="Load Order"
                onPress={() =>
                    navigation.navigate('Load Order', { name: 'Bob' })
                }
            />
            <Button
                title="Pack Order"
                onPress={() =>
                    navigation.navigate('Pack Order', { name: 'Bob' })
                }
            />
            <Button
                title="Send Order"
                onPress={() =>
                    navigation.navigate('Send Order', { name: 'Bob' })
                }
            />
        </View>
    );
}

const LoadOrdersScreen = ({ navigation, route }) => {
    return (
        <Text>Load Order: {route.params.name}</Text>
    );
}

const PackOrdersScreen = ({ navigation, route }) => {
    return (
        <Text>Pack Order: {route.params.name}</Text>
    );
}

const SendOrdersScreen = ({ navigation, route }) => {
    return (
        <Text>Send Order: {route.params.name}</Text>
    );
}

// const LoginScreen = ({ navigation, route }) => {
//   return (
//     <Text>Login: {route.params.name}</Text>

//   );
// }

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
  
    },
    buttonContainer:{
  
    },
    button:{
  
    },
});