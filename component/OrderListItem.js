import { StyleSheet, View, Text, Pressable } from 'react-native';

const OrderListItem = (props) => {
    return (
        <View>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                // onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.itemText}>{props.orderNo} {props.date} {props.customer}</Text>
            </Pressable>
        </View>
    );
}

export default OrderListItem;

const styles = StyleSheet.create({
    listItem: {
        margin: 8,
        borderColor : 'white',
        borderBottomColor: 'grey',
        borderWidth:2,
    },
    pressedItem: {
        opacity: 0.5,
    },
    itemText: {
        color: 'black',
        padding: 8,
    },
});
