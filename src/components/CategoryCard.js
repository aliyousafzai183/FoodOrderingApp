import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../themeProvider/theme';

// store
import { useDispatch } from 'react-redux';

const Category = ({ title, category, id}) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    const action = { type: 'SET_DISPLAY_MODAL_FOR', displayModalFor:id };
    console.log(action);
    dispatch(action);
  };  

  return (
    <TouchableOpacity
      style={category === category ? styles.selectedCard : styles.card}
      onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
          style={styles.image}
        />
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
