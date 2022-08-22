import { Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { removeUser } from '../component/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

//Screens
import LoadOrdersScreen from '../screens/LoadOrdersScreen';
import PackOrdersScreen from '../screens/PackOrdersScreen';
import SendOrdersScreen from '../screens/SendOrdersScreen';
import UserSelectModal from '../screens/UserSelectModal';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();
//Home displays menu when logged in. 
export default function RootStack({ navigation, route }) {
    //User selection logic here.
    const [currentUser, setCurrentUser] = useState([]);
    //const [isLoading, setIsLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('currentUser').then((value) => {
            if (value) {
                setIsLoggedIn(true);
                setCurrentUser(value);
            } else {
                setIsLoggedIn(false);
                setCurrentUser([]);
            }
        });
    }), []

    function logOutHandler() {
        removeUser();
        setIsLoggedIn(false);
        setCurrentUser([]);
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLoggedIn ? ( //Check logged in
                    <>
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                title: "Title",
                                headerRight: () => (
                                    <Button
                                        onPress={
                                            () => logOutHandler()
                                        }
                                        title='Logout'
                                    />
                                ),
                            }}
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
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Select User"
                            component={UserSelectModal}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
