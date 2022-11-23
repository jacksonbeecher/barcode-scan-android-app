import { useEffect, useRef, useState } from "react";
import { View, Modal, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getUnitFromApi, getUnitsFromApi } from '../component/api';
import { getUnit, storeUnit } from "../component/storage";
import ButtonStyles from "../styles/ButtonStyles";

const SaveButtonHandler = async (unitId, goBack) => {
    let data = await getUnitFromApi(unitId);
    //Save unit to asyncstorage
    await storeUnit(data);
    goBack(); //Call goBack here because the previous screen is focused before unitData is stored. 
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
            
            //Check settings for currently selected Unit. 
            getUnit().then((value) => {
                //console.log(value);
                if(value){
                    setUnitValue(value.UnitId);
                }
            });

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
        <View style = {styles.container}>
            <View style = {styles.settingsContainer}>
                <View style={styles.setting}>
                    <Text style={styles.settingLabel}>Unit: </Text>
                    <View style = {styles.settingpicker}>
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
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        goBack()
                    }}>
                    <Text style={ButtonStyles.text}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[]}
                    onPress={() => {
                        SaveButtonHandler(unitValue, goBack); //Pass goBack object. Do not call goback after this function as the data is not visually updated when the screen loads. 
                    }}>
                    <Text style={ButtonStyles.text}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
        //</Modal>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    //Sub flex containers
    settingsContainer: {
        flex:6, 
        margin:5,
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
    },
    setting: {
        flexDirection: 'row',
    },
    settingLabel: {
        fontSize: 20,
        flex: 1,
        alignContent:'center',
        justifyContent: 'center',

    },
    settingpicker : {
        flex: 3,
    }, 

})