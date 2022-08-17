import { useState } from "react";
import { FlatList, View, Text, StyleSheet, Pressable, Modal, Image } from "react-native";
import {getUser, removeUser, storeUser} from '../component/AsyncStorage'

function UserSelectModal(props) {
    const [selectedUser, setSelectedUserData] = useState([]);
    //Default data 
    const sampleData = [
        { id: 1, user: "User 1" },
        { id: 2, user: "User 2" },
        { id: 3, user: "User 3" },
        { id: 4, user: "User 4" },
        { id: 5, user: "User 5" },
    ];

    //Assign values to selected user object.
    function selectedUserHandler(data) {
        setSelectedUserData(data);
    }
    //Assign user on Login button click.
    function loginHandler() {
        storeUser(selectedUser);
    }

    return (
        <Modal animationType='slide' visible={props.visible}>
            <View style={styles.container}>
                <Text style={styles.title}>Title</Text>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/sample-icon.png')}
                    />
                </View>
                <Text style={styles.title}>Select your user name from the list and tap Log In to continue</Text>
                <Text style={styles.text}>Selected User: {selectedUser.user}</Text>
                <FlatList
                    style={styles.userContainer}
                    data={sampleData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <Pressable
                            android_ripple={{ color: 'dddddd' }}
                            onPress={() => {
                                selectedUserHandler(item);
                            }}>
                            <Text style={styles.text}>{item.user}</Text>
                        </Pressable>
                    }
                />
                <View style={styles.buttonContainer}>
                    <Pressable
                        android_ripple={{ color: 'dddddd' }}
                        style={styles.button}
                        onPress={() => {
                            if (selectedUser != undefined) { //Handle null selection.
                                //props.onLogin(selectedUser)
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
        </Modal>
    )
}

export default UserSelectModal;

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
        flexDirection: 'row',
        textAlign: "center",

    },
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
        //flex: 3,
    },
    selected: {

    },
    unselected: {

    },
    image: {

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})