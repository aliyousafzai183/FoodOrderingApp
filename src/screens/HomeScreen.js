import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

// styles
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../themeProvider/theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// icons
import { Entypo } from '@expo/vector-icons';

// components
import Category from '../components/CategoryCard';
import ItemCard from '../components/ItemCard';

const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.categoryWrapper}>

                <TouchableOpacity style={styles.subContainer1}>
                    <Text style={styles.locationText}>
                        29 Hola Street, California, USA
                    </Text>
                    <Entypo name="location-pin" size={24} color="black" />
                </TouchableOpacity>

                <View style={styles.subContainer2}>
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </View>

            </View>
            <View style={styles.subContainer3}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    
    categoryWrapper:{
        backgroundColor:theme.colors.top,
        flexDirection:'column',
        marginBottom:'2%'
    },

    subContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.secondary,
        padding: '1%',
        borderRadius: 10,
        marginHorizontal: '5%',
        marginBottom:'3%',
        paddingHorizontal:10
    },

    subContainer2: {
        padding: '2%',
        height: windowHeight * 0.15,
        marginLeft: '3%',
        flexDirection:'row',
    },

    subContainer3:{
        marginHorizontal: '5%',
    },

    locationText:{
        color: theme.colors.primary,
        fontWeight:'bold'
    }

})

export default Home;