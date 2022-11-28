import { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, Pressable, Modal, Image, ActivityIndicator, TouchableOpacity, TextInput } from "react-native";
import { getUser, removeUser, storeUser } from '../component/storage';
import { getUsersFromApi } from '../component/api';
import ButtonStyles from '../styles/ButtonStyles';

const UserSelectModal = ({props}) => {
    const [selectedUser, setSelectedUserData] = useState([]);
    const [userDS, setUserDS] = useState([]);
    const [isLoading, setLoading] = useState(true); //Use to hide/show loading animation.
    const [password, setPassword] = useState(null);

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
        return () => {
            //setUserDS({}); //Clear on unmount.
        }
    }, []);

    const renderItem = ({ item }) =>
                            <Pressable
                                android_ripple={{ color: 'dddddd' }}
                                onPress={() => {
                                    selectedUserHandler(item);
                                }}>
                                <Text style={styles.text}>{item.UserCode} - {item.UserName}</Text>
                            </Pressable>

    //Assign values to selected user object.
    function selectedUserHandler(data) {
        setSelectedUserData(data);
    }
    
    //Assign user on Login button click.
    function loginHandler() {
        if (selectedUser.length !== 0) {
            if (selectedUser.Password === password) { //Password is correct for user. 
                storeUser(selectedUser);
            }
            else if (selectedUser.Password === null && password === null) { //User does not have a password and password is not entered.
                storeUser(selectedUser);
            }
            else{
                alert("Incorrect password.");
            }
        } else {
            alert("A user must be selected.");
        }
    }

    return (
        // <Modal animationType='slide' visible={props.visible}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/sample-icon.png')}
                />
            </View>
            <View style = {styles.userSelectContainer}> 
                {/* <Text style={styles.title}>Select your user name from the list and tap Log In to continue</Text> */}
                <Text style={styles.text}>Selected User: {selectedUser.UserName}</Text>
                
                {userDS && <FlatList //Considtionally load when user data exists.
                    style={styles.userContainer}
                    data={userDS}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.UserId}
                    initialNumToRender={5}
                    maxToRenderPerBatch={1}
                    windowSize = {10}
                />}
                {userDS && <TextInput 
                    style = {styles.passwordInput}
                    placeholder="Password"
                    autoCorrect={false}
                    onChangeText={setPassword}
                    paddingHorizontal={5}
                    fontSize={20}
                    >
                </TextInput>}
            </View> 

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        if (selectedUser != undefined) { //Handle null selection.
                            loginHandler(); //Save User
                        }
                    }}>
                    <Text style={ButtonStyles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
            {isLoading && 
                <View styles={styles.indicator}>
                    <ActivityIndicator size = 'large' />
                </View>
            }
            
        </View>
        // </Modal> 
    )
}

export default UserSelectModal;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    //Main three sub flex boxes.
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    userSelectContainer : {
        flex: 4,

    },
    buttonContainer: {
        flex: 1,
        
    },
    //
    userContainer: {
        margin: 5,
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:5,
    },
    text: {
        fontSize: 20,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
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
        zIndex:20,
    },
    passwordInput: {
        borderWidth:1,
        borderRadius:5,
        margin:5,
    }
})