import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// styles
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../themeProvider/theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// component
import CustomizedRow from './CustomizedRow';

// icons
import { Entypo } from '@expo/vector-icons';

const ItemModal = ({ setModalVisible }) => {

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={styles.header}>
                    <Text style={styles.modalTitle}>Classic Pepperoni</Text>
                    <TouchableOpacity
                        onPress={handleCloseModal}
                    >
                        <Entypo name="cross" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.otherContent}>
                    <View style={styles.subContent}>
                        <Text style={styles.modalText}>Choose Size</Text>
                        <Text style={styles.RequiredText}>Required</Text>
                    </View>
                    <CustomizedRow title={"Small - 6``"} price={8} border={1}/>
                    <CustomizedRow title={"Medium - 10``"} price={12} border={1}/>
                    <CustomizedRow title={"Large - 14``"} price={16} border={0}/>
                </View>

                <View style={styles.otherContent}>
                    <View style={styles.subContent}>
                        <Text style={styles.modalText}>Choose Crust</Text>
                        <Text style={styles.RequiredText}>Required</Text>
                    </View>
                    <CustomizedRow title={"Classic Hand Tossed"}  border={1}/>
                    <CustomizedRow title={"Thin Crust"} border={1}/>
                    <CustomizedRow title={"Cheese Brust"} price={1.50} border={0}/>
                </View>

                <View style={styles.otherContent}>
                    <View style={styles.subContent}>
                        <Text style={styles.modalText}>Add ons</Text>
                        <Text style={styles.OptionalText}>Optional</Text>
                    </View>
                    <CustomizedRow title={"Classic Hand Tossed"}  border={1}/>
                    <CustomizedRow title={"Thin Crust"} border={1}/>
                    <CustomizedRow title={"Cheese Brust"} price={1.50} border={0}/>
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>+ ADD TO CART</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.TotalPriceText}>Item Total</Text>
                        <Text style={styles.modalText}>$ 13.50</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },

    modalContent: {
        backgroundColor: theme.colors.background,
        paddingHorizontal: 20,
        paddingVertical:30,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:'8%',
    },
    
    bottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:'10%',
        borderTopWidth:1,
        borderColor: 'grey',
        padding:10,
        alignItems:'center',
    },

    otherContent: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom:'6%'
    },

    subContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    modalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    RequiredText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: theme.colors.top,
        color: theme.colors.primary,
        borderRadius: 20,
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },

    OptionalText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'gray',
        color: theme.colors.text,
        borderRadius: 20,
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },

    button:{
        backgroundColor:theme.colors.primary,
        justifyContent:'center',
        paddingHorizontal:'20%',
        paddingVertical:'3%',
        borderRadius:10
    },

    btnText:{
        color:theme.colors.background,
        fontWeight:'bold'
    },

    TotalPriceText:{
        fontWeight:'bold',
    }

});

export default ItemModal;