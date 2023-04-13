import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
import HomeScreen from './src/screens/HomeScreen';

// theme
import theme from './src/themeProvider/theme';

// icons
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.top,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left', 
          headerTitle: () => (
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{ uri: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              />
              <Text style={styles.title}>DODO PIZZA</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Delivery</Text>
              <MaterialIcons name="arrow-drop-down" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          ),
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen}   />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginLeft: 10,
    flexDirection:'row',
    alignItems:'center',
  },
  logo: {
    width: 25,
    height: 25,
    borderTopRightRadius:100,
    borderBottomRightRadius:100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection:'row'
  },
  buttonText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

export default App;
