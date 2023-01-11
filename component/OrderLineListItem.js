import { Icon } from '@rneui/themed';
import { Text, View, TouchableOpacity } from "react-native"

const OrderLineListItem = ({ item, onPress, style}) => {
    //console.log(item);
    return (
        <TouchableOpacity onPress={onPress} style = {[]}>
            <Text style={[]}>{}</Text>
            {/* <Text style={[]}>{line.BinNo}</Text>
            <Text style={[]}>{line.AccountNo}</Text>
            <Text style={[]}>{line.QtyOrdered}</Text>
            <Text style={[]}>{line.QtyPacked}</Text> */}
            <Text style={[]}>Item</Text>
            <Icon style={[]} type="ionicon" name="chevron-forward-outline"/>
        </TouchableOpacity>
    )
};

export default OrderLineListItem;