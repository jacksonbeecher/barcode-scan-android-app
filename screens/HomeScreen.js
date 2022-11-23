import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';
import { getUser, getUnit } from '../component/storage';
import ButtonStyles from '../styles/ButtonStyles';

const HomeScreen = ({ navigation, route }) => {
    const [currentUser, setCurrentUser] = useState([]);
    const [currentUnit, setCurrentUnit] = useState([]);

    useEffect(() => {
        console.log('HomeScreen created')
        getUser().then((value) => {
            console.log(value);
            setCurrentUser(value);
        });
        getUnit().then((value) => {
            console.log("Get Unit");
            console.log(value);
            if(value){ //Set if value is found.
                setCurrentUnit(value);
            }
        });

    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/sample-icon.png')}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text>User: {currentUser.UserName}</Text>
                <Text>Unit: {currentUnit.HandHeldCode}</Text>
            </View>
            
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
        flex:1,
    },
    //Sub flex boxes.
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    infoContainer:{
        flex: 1,
    },
    buttonContainer: {
        //position: 'relative',
        flex: 6,
    },
    text: {
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',

    },
    flexButton:{
        //margin:20,
        
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
    },

})