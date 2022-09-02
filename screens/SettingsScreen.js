import { View, Modal, Text, Button } from "react-native";

const SettingsScreen = ({ navigation: { goBack } }) => {

    return (
        <Modal animationType='slide'>
            <View>
                <Text>
                    Settings
                </Text>
                
                <Button
                        title="Cancel"
                        onPress={() => {
                            goBack()
                        }}
                    />
            </View>
        </Modal>
    );
}

export default SettingsScreen;