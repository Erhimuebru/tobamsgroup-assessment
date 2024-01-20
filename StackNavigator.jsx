import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuScreen from './Screen/Menu/MenuScreen';
import CartScreen from './Screen/Cart/CartScreen';
import HomeScreen from './Screen/Home/HomeScreen';
import AccountScreen from './Screen/Account/AccountScreen';
import { ShoppingBagIcon, HomeIcon } from "react-native-heroicons/outline";
import { HomeIcon as SolidHomeIcon } from "react-native-heroicons/solid";
import { ShoppingBagIcon as SolidShoppingBagIcon } from "react-native-heroicons/solid";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MenuDetailsScreen from './Screen/Menu/MenuDetailsScreen';
import BasketScreen from './Screen/Basket/BasketScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getTabBarIcon = (route, focused, color, size) => {
  switch (route.name) {
    case 'Home':
      return focused ? <SolidHomeIcon size={size} color='#db3c2f' /> : <HomeIcon size={size} color={color} />;
    case 'Menu':
      return <MaterialCommunityIcons name="view-dashboard" size={size} color={focused ? '#db3c2f' : color} />;
    case 'Cart':
      return focused ? <SolidShoppingBagIcon size={size} color='#db3c2f' /> : <ShoppingBagIcon size={size} color={color} />;
    case 'Account':
      return <Icon name="user" size={size} color={focused ? '#db3c2f' : color} />;
    default:
      return null;
  }
};

const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          return getTabBarIcon(route, focused, color, size);
        },
        tabBarActiveTintColor: '#db3c2f',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuDetail"
        component={MenuDetailsScreen}
        options={{ presentation: 'modal' }} 
      />
        <Stack.Screen
        name="Carter"
        component={BasketScreen}
        options={{ presentation: 'modal' }} 
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
