import { View, Text, StyleSheet } from 'react-native';

const CustomizedRow = ({ title, price, border }) => {
    return (
        <View style={[styles.row, { borderBottomWidth: border }]}>
            <Text style={styles.modalTitle}>{title}</Text>
            {
                price?
                <Text style={styles.modalText}>$ {price}</Text>
                :
                <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        paddingVertical: 9,
        borderBottomColor: 'grey'
    }
})

export default CustomizedRow;