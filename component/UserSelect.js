import { useState } from "react";
import { FlatList, View, Text, StyleSheet, Pressable, Modal } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function UserSelect(props) {
    const [selectedUser, setSelectedUserData] = useState([]);
    const sampleData = [
        { id: 1, user: "User 1" },
        { id: 2, user: "User 2" },
        { id: 3, user: "User 3" },
        { id: 4, user: "User 4" },
        { id: 5, user: "User 5" },
    ];

    //Assign values to selected user object.
    function SelectedUserHandler(item) {
        //console.log(item);
        setSelectedUserData(item);
        storeUser(item)
    }

    //Store user data in AsyncStorage
    const storeUser = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('currentUser', jsonValue);
        } catch (e) {
            //Storage error.
        }
    }

    const removeUser = async () => {
        try {
          await AsyncStorage.removeItem('currentUser')
        } catch(e) {
          // remove error
        }
      }

    return (
        <Modal animationType='slide' visible={props.visible}>
            <View style={styles.container}>
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
                                //alert(item.user)
                                SelectedUserHandler(item)
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
                                props.onLogin(selectedUser)
                            }
                        }}
                    >
                        <Text style={styles.text}>Log In</Text>
                    </Pressable>
                    <Pressable
                        android_ripple={{ color: 'dddddd' }}
                        style={styles.button}
                        onPress={props.onExit}
                    >
                        <Text style={styles.text}>Exit</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default UserSelect;

const styles = StyleSheet.create({
    container: {
        //flex:1,
    },
    text: {
        fontSize: 16,

    },
    title: {
        fontSize: 20,

    },
    buttonContainer: {
        //flex:1
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        width: '20%',
        textAlign: 'center',
        alignContent: "center",

    },
    userContainer: {
        borderWidth: 1,
        //flex: 3,
    },

    selected: {

    },
    unselected: {

    },

})