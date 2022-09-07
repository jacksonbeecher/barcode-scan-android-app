import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
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
import SettingsScreen from '../screens/SettingsScreen';


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
            <Stack.Navigator initialRouteName='Select User'>
                {isLoggedIn ? ( //Check logged in
                    <>
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={({ navigation }) => ({
                                headerTitleAlign: 'center',
                                headerLeft: () => (
                                    <Icon type="ionicon"
                                        name="settings-outline"
                                        onPress={() => navigation.navigate('Settings')}
                                    />
                                ),
                                headerRight: () => (
                                    <Icon type="ionicon"
                                        name="log-out-outline"
                                        color='red'
                                        onPress={() => logOutHandler()}
                                    />
                                ),
                            })}
                        />
                        <Stack.Screen
                            name="Load Order"
                            component={LoadOrdersScreen}
                            options={() => ({
                                headerTitleAlign: 'center',
                            })}
                        />
                        <Stack.Screen
                            name="Pack Order"
                            component={PackOrdersScreen}
                            options={() => ({
                                headerTitleAlign: 'center',
                            })}
                        />
                        <Stack.Screen
                            name="Send Order"
                            component={SendOrdersScreen}
                            options={() => ({
                                headerTitleAlign: 'center',
                            })}
                        />
                        <Stack.Screen
                            name="Settings"
                            component={SettingsScreen}
                            options={({ navigation }) => ({
                                headerTitleAlign: 'center',

                            })}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Select User"
                            component={UserSelectModal}
                            options={({ navigation }) => ({
                                headerTitleAlign: 'center',
                                headerLeft: () => (
                                    <Icon type="ionicon"
                                        name="settings-outline"
                                        onPress={() => navigation.navigate('Settings')}
                                    />
                                ),
                            })}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}