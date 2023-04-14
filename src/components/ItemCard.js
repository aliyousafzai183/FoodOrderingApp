import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import theme from '../themeProvider/theme';

// store
import { useDispatch } from 'react-redux';

// component
import ItemModal from './ItemModal';

const ItemCard = ({ title, description, price, id, link }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    const action = { type: 'SET_DISPLAY_MODAL_FOR', displayModalFor: id };
    console.log(action);
    dispatch(action);
    setModalVisible(true);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.imageContainer}>
      <Image source={{ uri: link }} style={styles.image} />

      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ItemModal setModalVisible={setModalVisible} title={title}/>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.top,
    borderRadius: 10,
    paddingRight: 20,
    marginVertical: 10,
  },

  imageContainer: {
    width: '33%',
    marginRight: 20,
  },

  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
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
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15
  },
  buttonText: {
    color: theme.colors.buttonTitle,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItemCard;
