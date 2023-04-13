import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Category = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
        style={styles.image}
      />
      </View>
      <Text style={styles.title}>Pizza</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
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
