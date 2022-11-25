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

export const getUnitsFromApi = async () => {
    return fetch(url+'units')
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
        console.error(error);
    });
}

export const getUnitFromApi = async (id) => {
    return fetch(url+'units/'+id)
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
        console.log(error);
    });
}

//Load Orders Screen
export const getOrdersFromApiWithPoolIdAndNoOrders = async(poolId,noOrders) => {
    return fetch(url+'orders/'+poolId+'/'+noOrders)
    .then((response) => response.json())
    .then((responseJson)=> {
        return responseJson;
    })
    .catch((error) => {
        console.log(error);
    })
}