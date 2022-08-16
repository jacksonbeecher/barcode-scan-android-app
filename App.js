import * as React from 'react';
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './navigation/HomeNavigator';
import UserSelect, { getUser } from './component/UserSelect';
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
              component={Home}
              options={{ title: "Title", user: currentUser, headerShown: false }}
              
            />
            {/* <Stack.Screen
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
            /> */}
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

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navContainer: {
    flex: 1,
  },
  image: {

  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

});
