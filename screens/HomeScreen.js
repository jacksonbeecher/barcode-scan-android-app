import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';
import { getUser } from '../component/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonStyles from '../styles/ButtonStyles';

const HomeScreen = ({ navigation, route }) => {
    const [currentUser, setCurrentUser] = useState([]);
    const [currentUnit, setCurrentUnit] = useState([]);

    useEffect(() => {
        console.log('HomeScreen created')
        AsyncStorage.getItem('currentUser').then((value) => {
            //console.log(value.user);
            setCurrentUser(value);
        });
        AsyncStorage.getItem('currentUnit').then((value) => {
            //console.log(value.user);
            setCurrentUnit(value);
        });

    }, []);

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/sample-icon.png')}
                />
            </View>
            <Text >Current User: {currentUser}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        navigation.navigate('Load Order')
                    }}>
                    <Text style={ButtonStyles.text}>Load Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        navigation.navigate('Pack Order')
                    }}>
                    <Text style={ButtonStyles.text}>Pack Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        navigation.navigate('Send Order')
                    }}>
                    <Text style={ButtonStyles.text}>Send Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        //flex:1,
    },
    text: {
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',

    },
    buttonContainer: {
        //position: 'relative',
        
    },
    flexButton:{
        //margin:20,
        
    },
    image: {

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})