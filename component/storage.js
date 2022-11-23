// Handle local storage and persistance.
import AsyncStorage from '@react-native-async-storage/async-storage';

//USERSSTORAGE
//Get User
export const getUser = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('currentUser');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};

//Remove user data in AsyncStorage ie. Logout
export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem('currentUser');
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
//UNITSTORAGE
//Get unit
export const getUnit = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('currentUnit');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};
//Store unit
export const storeUnit = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('currentUnit', jsonValue);
    } catch (e) {
        console.log(e);
    }
}


//ORDERSTORAGE
export const storeOrders = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('currentOrders', jsonValue);
    } catch (e) {
        console.log(e);
    }
}

export const getOrders = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('currentOrders');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};