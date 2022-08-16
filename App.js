import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './navigation/HomeNavigator';
import UserSelect from './component/UserSelect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { removeUser } from './component/AsyncStorage';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  //User selection logic here.
  const [currentUser, setCurrentUser] = useState([]);
  //const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('currentUser').then((value) => {
      console.log(value)
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
              name="Home Screen"
              component={HomeScreen}
              options={{
                title: "Title",
                headerRight: () => (
                  <Button
                    onPress={() => logOutHandler()}
                    title='Logout'
                  />
                )
              }}

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
