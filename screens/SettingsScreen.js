import { useEffect, useRef, useState } from "react";
import { View, Modal, Text, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getUnitsFromApi } from '../component/api';

const SettingsScreen = ({ navigation: { goBack } }) => {
    const [open, setOpen] = useState(false); //Dropdownpicker open status.
    const [unit, setUnit] = useState([]);
    const [unitDS, setUnitDS] = useState([]);
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
            <Text>
                Settings:
            </Text>
            <Text>Unit: {unit}</Text>
            <View>
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


            <DropDownPicker
                schema={{
                    label: 'HandHeldCode',
                    value: 'UnitId'
                }}
                open={open}
                value={unit}
                items={unitDS}
                setOpen={setOpen}
                setValue={setUnit}
                //setItems={setUnitDS}
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