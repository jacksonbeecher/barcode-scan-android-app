import { useEffect, useRef, useState } from "react";
import { View, Modal, Text, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getUnitsFromApi } from '../component/api';

const SettingsScreen = ({ navigation: { goBack } }) => {
    const [open, setOpen] = useState(false); //Dropdownpicker open status.
    const [unit, setUnit] = useState([]);
    const [unitDS, setUnitDS] = useState([]);
    const [isLoading, setLoading] = useState(false); //Use to hide/show loading animation.

    //Load units from Api call.
    async function fetchUnitData() {
        console.log('fetch user data')
        let data = await getUsersFromApi(); //data is in json format.
        setUnitDS(data);
        setLoading(false);
    }

    useEffect(() => {

        fetchUnitData();

    }, []);


    return (
        <Modal animationType='slide'>
            <View>
                <Text>
                    Settings:
                </Text>
                <Text>Unit: {unit}</Text>
                <DropDownPicker
                    // open={open}
                    // value={unit}
                    // items={unitDS}
                    // setOpen={setOpen}
                    //setValue={setUnit}
                    //setItems={setUnitDS}
                    listMode="SCROLLVIEW"
                    //itemKey="UnitId"
                    closeAfterSelecting={true}
                />
                <Button
                    title="Cancel"
                    onPress={() => {
                        goBack()
                    }}
                />
                <Button
                    title="Save"
                    onPress={() => {
                        goBack()
                    }}
                />
            </View>
        </Modal>
    );
}

export default SettingsScreen;