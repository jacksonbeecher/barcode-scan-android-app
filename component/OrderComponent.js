//All order header react components for display and edit of order information
//Parse the name of the data value to be displayed and the order object which contains said order.

import { Text, TextInput, View } from "react-native"

//Pass order data, Label name, whether the order is editable, styling for the input.
const OrderInput = ({order, value, label, editable, style}) => {


    return (
        <View>
            <Text>{label}:</Text>
            <TextInput value={order[value]} editable={editable} style={style}/>
        </View>
    )
}

export default OrderInput;