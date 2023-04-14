import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react-native';
import theme from '../themeProvider/theme';
import { log } from 'react-native-reanimated';

const Category = ({ title, link}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      >
      <View style={styles.imageContainer}>
      <Image source={{ uri: link }} style={styles.image} />

      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  selectedCard: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    borderColor: theme.colors.primary,
    borderWidth:2
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Category;
