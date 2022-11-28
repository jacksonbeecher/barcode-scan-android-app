import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';
import { getUser, getUnit } from '../component/storage';
import ButtonStyles from '../styles/ButtonStyles';
import GetPostStyles from '../styles/GetPostStyles';

const HomeScreen = ({ navigation, route }) => {
    const [currentUser, setCurrentUser] = useState([]);
    const [currentUnit, setCurrentUnit] = useState([]);

    useEffect(() => {
        getData();
        const willFocusSub = navigation.addListener('focus', () => {
            //console.log("Home Focus.")
            getData();
        });

        return willFocusSub;
        // return () => { //Clear on unmount to avoid memory leaks. 
        //     setCurrentUser({});
        //     setCurrentUnit({});
        // }

    }, []);

    const getData = () => {
        //console.log('HomeScreen created')
        getUser().then((value) => {
            console.log(value);
            setCurrentUser(value);
        });
        getUnit().then((value) => {
            //console.log(value);
            if(value){ //Set if value is found.
                setCurrentUnit(value);
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/sample-icon.png')}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={GetPostStyles.text}>User: {currentUser.UserName}</Text>
                <Text style={GetPostStyles.text}>Unit: {currentUnit.HandHeldCode}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        navigation.navigate('Load Order')
                    }}>
                    <Text style={ButtonStyles.buttonText}>Load Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        navigation.navigate('Pack Order')
                    }}>
                    <Text style={ButtonStyles.buttonText}>Pack Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        navigation.navigate('Send Order')
                    }}>
                    <Text style={ButtonStyles.buttonText}>Send Order</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonContainer: {
        flex: 6,
    },
    //
    button:{

    },
    text: {
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',

    },
    image: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
})