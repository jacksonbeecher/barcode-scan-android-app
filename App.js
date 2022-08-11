import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Navigator from './navigation/Navigation.js';

//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      

      <Navigator/>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navContainer: {
    flex: 1,
  },


});
