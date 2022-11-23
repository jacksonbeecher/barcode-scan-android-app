import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, Pressable, Modal, Image, ActivityIndicator } from "react-native";
import { getUser, removeUser, storeUser } from '../component/storage';
import { getUsersFromApi } from '../component/api';

function UserSelectModal(props) {
    const [selectedUser, setSelectedUserData] = useState([]);
    const [userDS, setUserDS] = useState([]);
    const [isLoading, setLoading] = useState(true); //Use to hide/show loading animation.

    //Load users from Api call.
    const fetchUserData = async () => {
        try {
            let data = await getUsersFromApi(); //data is in json format.
            setUserDS(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserData();

    }, []);

    //Assign values to selected user object.
    function selectedUserHandler(data) {
        setSelectedUserData(data);
    }
    //Assign user on Login button click.
    function loginHandler() {
        if (selectedUser.length !== 0) {
            storeUser(selectedUser);
        } else {
            alert("A user must be selected.");
        }

    }

    return (
        // <Modal animationType='slide' visible={props.visible}>
        <View style={styles.container}>
            {/* //<Text style={styles.title}>Title</Text> */}
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/sample-icon.png')}
                />
            </View>
            <View style = {styles.userSelectContainer}> 
                <Text style={styles.title}>Select your user name from the list and tap Log In to continue</Text>
                <Text style={styles.text}>Selected User: {selectedUser.UserName}</Text>
                {isLoading && <ActivityIndicator size="large" styles={styles.indicator}>
                </ActivityIndicator>}
                {userDS && <FlatList //Considtionally load when user data exists.
                    style={styles.userContainer}
                    data={userDS}
                    keyExtractor={(item) => item.UserId}
                    renderItem={({ item }) =>
                        <Pressable
                            android_ripple={{ color: 'dddddd' }}
                            onPress={() => {
                                selectedUserHandler(item);
                            }}>
                            <Text style={styles.text}>{item.UserCode} - {item.UserName}</Text>
                        </Pressable>
                    }
                />}
            </View> 
            <View style={styles.buttonContainer}>
                <Pressable
                    android_ripple={{ color: 'dddddd' }}
                    style={styles.button}
                    onPress={() => {
                        if (selectedUser != undefined) { //Handle null selection.
                            loginHandler(); //Save User
                        }
                    }}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
                {/* <Pressable
                        android_ripple={{ color: 'dddddd' }}
                        style={styles.button}
                        onPress={BackHandler.exitApp}
                    >
                        <Text style={styles.buttonText}>Exit</Text>
                    </Pressable> */}
            </View>
        </View>
        // </Modal> 
    )
}

export default UserSelectModal;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    text: {
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',

    },
    //Main three sub flex boxes.
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    userSelectContainer : {
        flex: 6,
    },
    buttonContainer: {
        flexDirection: 'row',
        textAlign: "center",
        flex: 1,
    },
    //
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        width: '20%',
        textAlign: 'center',
        alignContent: "center",
        margin: 5,
        backgroundColor: '#0080ff',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,

    },
    userContainer: {
        borderWidth: 1,
        margin: 5,
        height: '50%',
        //flex: 3,
    },
    selected: {

    },
    unselected: {

    },
    image: {
        flex: 1,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

    }
})