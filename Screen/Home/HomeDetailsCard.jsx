import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet,  Button, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { HeartIcon  } from "react-native-heroicons/outline";
import { Image } from 'react-native-elements';
import { ShoppingBagIcon } from "react-native-heroicons/outline";
const HomeDetailsCard = ({
  id,
  img,
  title,
  rating,
  address,
  price,
  availability,
  discount,
  discountPrice,
  description
}) => {
    const navigation = useNavigation();
  

    const handleCardClick = () => {
      navigation.navigate('MenuDetail', {
        details: {
          id,
          img,
          title,
          rating,
          address,
          price,
          availability,
          discount,
          discountPrice,
          description
        },
      });
    };


    useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Menu',
      
          headerTitleAlign: 'center', 
          headerStyle: {
            backgroundColor: '#ffffff', 
          },
          headerTitleStyle: {
            color: '#000000',
            fontSize: 17, 
          },
          headerTintColor: '#ff0000',
        });
      }, [navigation]);
  return (
    <>
    
    <TouchableOpacity style={styles.cardContainer} onPress={handleCardClick}>

          <View>

              <Image source={{ uri: img }} style={styles.image} />
              <View style={tw`absolute left-34 top-2`}>
                  <HeartIcon color='gray' />
              </View>
              <View style={styles.detailsContainer}>
                  <View style={tw`flex flex-row justify-between`}>
                      <Text style={tw`text-black`}>{title}</Text>
                      <Text style={tw`text-red-500`}>{`₦${price}`}</Text>
                  </View>

                  <View style={tw`flex flex-row gap-2 text-white bg-red-500 p-2 mt-6 mb-4 rounded-3xl`}>
                      <ShoppingBagIcon style={tw`text-white ml-4 text-center`} />
                      <Text style={tw`text-white text-center mt-1`}
                      >Add to cart</Text>
                  </View>
              </View>
          </View>
      </TouchableOpacity></>

  
   
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '48%', 
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 8,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  address: {
    color: 'gray',
  },
  rating: {
    color: 'gray',
  },
  availability: {
    color: 'red',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  discountPrice: {
    color: 'black',
    fontWeight: 'bold',
  },
  discount: {
    backgroundColor: 'red',
    color: 'white',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 5,
  },
  customButton: {
    fontSize: 12, 
    color: 'red',
    backgroundColor: 'red',
    borderRadius: 20, 
  },
});

export default HomeDetailsCard;
