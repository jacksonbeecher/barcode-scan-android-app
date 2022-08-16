import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './navigation/HomeNavigator';
import UserSelect from './component/UserSelect';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {

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
        setCurrentUser([]);
        setIsLoggedIn(false);
      }
    });
  }), []

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? ( //Check logged in
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Title", headerShown: false }}
              initialParams={{ currentUser: currentUser, }}

            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Select User"
              component={UserSelect}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
