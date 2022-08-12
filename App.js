import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, BackHandler } from 'react-native';
import Navigator from './navigation/Navigation.js';
import { useState } from 'react';
import UserSelect from './component/UserSelect.js';


export default function App() {
  const [user, setUser] = useState([]); //User list. Select hand held user to 'log in' as.
  const [isModalVisible, setIsModalVisible] = useState(true)

  //Begin login modal
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function setUserHandler(userData) {
    console.log(userData);
    if (userData != null) {
      setUser(userData);
      setIsModalVisible(false)
    } else {
      setIsModalVisible(true)
    }
  }

  function closeApplicationHandler() {
    BackHandler.exitApp();
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <UserSelect visible={isModalVisible} onLogin={setUserHandler} onExit={closeApplicationHandler} />
        <Navigator />
      </View>
    </>

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


});
