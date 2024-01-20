import React, { useLayoutEffect } from "react";
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { TrashIcon, PlusIcon, MinusIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Span } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItems, removeFromBasket, addToBasket, selectBasketTotal } from '../../components/Features/BasketSlice';
import { Image } from 'react-native-elements';
import {  StatusBar } from 'react-native';
const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal)
  const handleRemoveItem = (id) => {
    dispatch(removeFromBasket({ id }));
  };

  const addItemToBasket = (id) => {
    dispatch(addToBasket({ id }));
  };

  const removeItemFromBasket = (id) => {
    // Check if the item is already in the basket
    const existingItem = items.find((item) => item.id === id);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        // If the item has a quantity greater than 1, decrease the quantity
        dispatch(removeFromBasket({ id }));
      } else {
        // If the item has a quantity of 1, remove the entire item
        dispatch(removeFromBasket({ id }));
      }
    }
  };
  const navigation = useNavigation();
   
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cart',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 10 }}>
          <ChevronLeftIcon size={32} style={tw`text-black rounded-md bg-gray-300 text-gray-500`} />
          
        </TouchableOpacity>
      ),
      headerTitleAlign: 'center', 
      headerStyle: {
        backgroundColor: '#ffffff', // White background
      },
      headerTitleStyle: {
        color: '#000000', // Black text color
        fontSize: 17, // Adjust the font size as needed
      },
      headerTintColor: '#ff0000', // Red icon color
    });
  }, [navigation]);
  
  
  
  return (

    
    <View style={styles.container}>
        <View style={tw`border-t border-b w-full border-gray-200 -mt-2 mb-10`} />
  <StatusBar backgroundColor="white" barStyle="dark-content" />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
                                        <View>
                                    <Image
                                    source={{ uri: item.img }}
                                    style={{
                                    width: 100,  // Adjust the width as needed
                                    height: 100, // Adjust the height as needed
                                    borderRadius: 8, // Optional: Add border radius for rounded corners
                                    }}
                                />
                                </View>



                                <View style={tw`-mt-2 -ml-16 mb-2  `}>
                                <Text style={tw`text-black font-bold mt-2 `}>{item.title}</Text>
                                <Text style={tw`text-red-500 mt-4 mb-4 `}> ${item.price}</Text>
                                <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
              <Text style={styles.removeButton}><TrashIcon  size={20} style={tw`text-black text-gray-500 `}/></Text>
            </TouchableOpacity>
                                </View>

                                <View>
                                <TouchableOpacity
                  disabled={item.quantity === 1}
                onPress={() => removeItemFromBasket(item.id)}
                style={tw`bg-white border border-gray-300 p-2 rounded-md`}>
                <MinusIcon size={15} style={tw`text-black text-gray-500 `} />
              </TouchableOpacity>
              <Text style={tw`text-black mt-2 ml-3 mb-2 text-gray-500 `}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => addItemToBasket(item.id)}
                style={tw`bg-white border border-gray-300 p-2 rounded-md`}>
                <PlusIcon size={15} style={tw`text-black text-gray-500 `} />
              </TouchableOpacity>
                                </View>

           
           
           
          
          </View>
        )}
      />

<View style={tw`flex flex-row justify-between`}>
    <View  style={tw`flex flex-row`}><Text style={tw`font-semibold`}>Total </Text>
  <Text style={tw`font-semibold`}>
    <Text style={tw`text-gray-500 font-semibold`}>({items.length} items)</Text>
  </Text></View>
    <View><Text  style={tw`font-semibold`}  >${basketTotal}</Text></View>


</View>

<View style={tw`flex flex-row gap-2 justify-center text-white bg-red-500 p-2 mt-6 mb-4 p-3 rounded-3xl`} >
        <Text style={tw`text-white font-extrabold text-center mt-1`} 
        >Checkout</Text>
        <Text style={tw`text-white font-extrabold text-center mt-1`} >- ${basketTotal}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50, 
  },
  removeButton: {
    color: 'red',
  },
});

export default CartScreen;
