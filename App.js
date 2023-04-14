import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// redux
import { Provider } from 'react-redux';
import store from './src/redux/store';

// screens
import HomeScreen from './src/screens/HomeScreen';

// theme
import theme from './src/themeProvider/theme';

// icons
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }} style={styles.drawerImage} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

function App() {
  return (
    <Provider store={store}>
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
          drawerStyle:{
            backgroundColor:theme.colors.top,
            borderTopRightRadius:300,
            borderBottomRightRadius:150
          },
          drawerActiveBackgroundColor: theme.colors.primary,
          drawerActiveTintColor: theme.colors.buttonTitle,
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
              <Text style={styles.buttonText}>DELIVERY</Text>
              <MaterialIcons name="arrow-drop-down" size={20} color={theme.colors.primary} />
            </TouchableOpacity>
          ),
        }}

        drawerContent={(props) => <CustomDrawerContent {...props} />}

      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 25,
    height: 25,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    marginRight: '5%'
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 12
  },
  drawerHeader: {
    height: 260,
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  drawerImage: {
    width: 300,
    height: 230,
    borderTopRightRadius:300,
  },
});

export default App;
