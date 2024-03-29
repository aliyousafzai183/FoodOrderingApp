import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';

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

// data
import {fetchData, fetchCategories} from '../model/getData';

const Home = () => {
  const [data, setData] = useState([]);
  const [category, setcategory] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
    fetchCategories().then((data) => {
      setcategory(data);
    });
  }, []);

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
          <FlatList
            data={category}
            renderItem={({ item, index }) => (
              <Category
                title={item.title}
                link={item.link}
              />
            )}
            // keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.subContainer3}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <ItemCard
              title={item.title}
              description={item.description}
              price={item.price}
              id={item.id}
              link={item.link}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  categoryWrapper: {
    backgroundColor: theme.colors.top,
    flexDirection: 'column',
    marginBottom: '2%',
    paddingBottom: 20
  },

  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.secondary,
    padding: '1%',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginBottom: '3%',
    paddingHorizontal: 10
  },

  subContainer2: {
    padding: '2%',
    height: windowHeight * 0.15,
    marginLeft: '3%',
  },

  subContainer3: {
    marginHorizontal: '5%',
    marginBottom: '50%'
  },

  locationText: {
    color: theme.colors.primary,
    fontWeight: 'bold'
  },

})

export default Home;