import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../Features/BasketSlice';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
 
const BasketIcon = () => {

const items= useSelector(selectBasketItems)
const navigation = useNavigation();
const basketTotal = useSelector(selectBasketTotal)

if (items.length===0) return null;
    return (
        <View  style={tw`absolute bottom-10 w-full z-50`}>
          
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')} style={tw`bg-red-500 mx-5 p-2 rounded-lg flex-row justify-center justify-between`} >
            <Text  style={tw`text-white font-extrabold text-lg bg-red-600 rounded-md py-1 px-2 `}  >{items.length}</Text>
            <Text  style={tw`text-white font-extrabold flex-1 text-lg text-center `} >View Cart</Text>
            <Text  style={tw`text-white font-extrabold text-lg bg-red-600 rounded-md py-1 px-2 `} >{basketTotal}</Text>
            </TouchableOpacity>
        </View>
    );
}

 
export default BasketIcon;