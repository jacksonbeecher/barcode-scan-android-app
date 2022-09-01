import React from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_API_URL, API_TOKEN } from "@env"

const url = REACT_APP_API_URL;


export const getUsersFromApi = async () => {
    return fetch(url+'users')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}

export async function getUnitsFromApi() {
    try {
        let name = 'units'
        console.log('http://192.168.0.191:8090/api/' + name);
        const response = await fetch(url + name)
        const json = await response.json();
        console.log(json);
        return json;
    } catch (err) {
        console.log(err);
    }
}