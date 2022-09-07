import { useEffect, useRef, useState } from "react";
import { View, Modal, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getUnitFromApi, getUnitsFromApi } from '../component/api';
import { storeUnit } from "../component/AsyncStorage";
import ButtonStyles from "../styles/ButtonStyles";

const SaveButtonHandler = async (unitId) => {
    let data = await getUnitFromApi(unitId);
    //Save unit to asyncstorage
    storeUnit(data);

}

const SettingsScreen = ({ navigation: { goBack } }) => {
    const [unitOpen, setUnitOpen] = useState(false); //Unit Pick Settings vars
    const [unitValue, setUnitValue] = useState(null); //Return value from dropdownpicker

    //const [unit, setUnit] = useState([]);
    const [unitDS, setUnitDS] = useState([]); //Store unit data call.SS
    const [isLoading, setLoading] = useState(true); //Use to hide/show loading animation.

    //Load units from Api call.
    const fetchUnitData = async () => {
        try {
            let data = await getUnitsFromApi(); //data is in json format.
            setUnitDS(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUnitData();

    }, []);


    return (
        //<Modal animationType='slide'>
        <View>
            <Text>Unit: {unitValue}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={ButtonStyles.button}
                    onPress={() => { 
                        goBack() 
                    }}>
                    <Text style={ButtonStyles.text}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ButtonStyles.button}
                    onPress={() => {
                        SaveButtonHandler(unitValue);
                        goBack();
                    }}>
                    <Text style={ButtonStyles.text}>Save</Text>
                </TouchableOpacity>
            </View>

            <DropDownPicker
                schema={{
                    label: 'HandHeldCode',
                    value: 'UnitId'
                }}
                open={unitOpen}
                value={unitValue}
                items={unitDS}
                setOpen={setUnitOpen}
                setValue={setUnitValue}
                setItems={setUnitDS}
                listMode="SCROLLVIEW"
                itemKey="UnitId"
                closeAfterSelecting={true}
                closeOnBackPressed={true}
                loading={isLoading}
            />

        </View>
        //</Modal>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        position: "absolute",
        top: 100,

    },
})