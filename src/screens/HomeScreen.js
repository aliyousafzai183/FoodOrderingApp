import React from 'react';
import { Text, View, FlatList } from 'react-native';

// styles
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../themeProvider/theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// icons
import { Entypo } from '@expo/vector-icons';

// components
import Category from '../components/CategoryCard';

const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.categoryWrapper}>

                <View style={styles.subContainer1}>
                    <Text>
                        29 Hola Street, California, USA
                    </Text>
                    <Entypo name="location-pin" size={24} color="black" />
                </View>

                <View style={styles.subContainer2}>
                    <Category />
                    <Category />
                </View>

            </View>
            <View style={styles.subContainer3}>

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
    },

    subContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.secondary,
        padding: '1%',
        borderRadius: 10,
        marginHorizontal: '4%',
        marginBottom:'3%'
    },

    subContainer2: {
        padding: '2%',
        height: windowHeight * 0.15,
        marginLeft: '4%',
        flexDirection:'row'
    },

    subContainer3:{
        marginHorizontal: '4%',
    },

})

export default Home;