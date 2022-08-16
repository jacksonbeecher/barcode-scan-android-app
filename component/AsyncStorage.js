// Handle local storage and persistance.
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUser() {
    try {
        const jsonValue = await AsyncStorage.getItem('currentUser');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};

//Remove user data in AsyncStorage ie. Logout
export async function removeUser() {
    try {
        await AsyncStorage.removeItem('currentUser')
    } catch (e) {
        console.log(e);
    }
}

//Store user data in AsyncStorage ie. Login
export const storeUser = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('currentUser', jsonValue);
    } catch (e) {
        console.log(e);
    }
}