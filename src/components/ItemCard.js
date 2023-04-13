import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../themeProvider/theme';

const ItemCard = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
        source={{ uri: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
        style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>Sure, here's an example of how you could create a card:</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$9.99</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    paddingRight: 20,
    marginVertical:10
  },
  imageContainer: {
    width: '33%',
    marginRight: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: theme.colors.description,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal:15,
    paddingVertical:5,
    borderBottomRightRadius:15,
    borderTopLeftRadius:15
  },
  buttonText: {
    color: theme.colors.buttonTitle,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItemCard;
