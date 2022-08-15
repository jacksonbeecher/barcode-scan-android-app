import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button,Image, Text} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadOrdersNavigator from './navigation/load/LoadOrdersNavigator';
import PackOrdersNavigator from './navigation/pack/PackOrdersNavigator';
import SendOrdersNavigator from './navigation/send/SendOrdersNavigator';



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
          <View 
              style={styles.imageContainer}>
              <Image
                  style={styles.image}
                  source={require('./assets/images/sample-icon.png')}
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
          <Text>User: {}</Text>
      </View>
  );
}

const LoadOrdersScreen = ({ navigation }) => {
  return (
      <LoadOrdersNavigator/>
  );
}

const PackOrdersScreen = ({ navigation }) => {
  return (
      <PackOrdersNavigator/>
  );
}

const SendOrdersScreen = ({ navigation }) => {
  return (
      <SendOrdersNavigator/>
  );
}

const LoginScreen = ({navigation}) => {
  return (
    <View>

    </View>
  )
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
                { /* Conditional formatting based on logged in user */ }
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                />

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
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
  },

});
