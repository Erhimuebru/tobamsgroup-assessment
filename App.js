import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import tw from 'twrnc';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './StackNavigator';
import RootNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import { store } from './Store';

export default function App() {
  return (

     <NavigationContainer>
      <Provider store={store}>
     <SafeAreaProvider>
      {/* <StackNavigator/> */}
      <RootNavigator/>
      </SafeAreaProvider>
      </Provider>
     </NavigationContainer>

  );
}

