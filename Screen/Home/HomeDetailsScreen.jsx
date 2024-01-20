
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView  } from 'react-native';
import { Image } from 'react-native-elements';
import tw from 'twrnc';
import { ChevronLeftIcon,PlusIcon,MinusIcon, ChevronDownIcon} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems, removeFromBasket} from "../../components/Features/BasketSlice";
import BasketIcon from "../../components/BasketIcon/BasketIcon";


const HomeDetailsScreen = ({ route, id, name,title,price}) => {
  const { details } = route.params;
  console.log('Image URL:', details.img);
  const [showFullDescription, setShowFullDescription] = useState(false);
const dispatch = useDispatch()
const items = useSelector(selectBasketItems)
  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };
  const navigation = useNavigation();

 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);



  const addItemToBasket = () => {
    const { id, name, title, price,img } = details;
    dispatch(addToBasket({ id, name, title, price, img }));
  };
  



  const removeItemFromBasket = () => {
    const { id } = details;
    const existingItem = items.find((item) => item.id === id);
  
    if (existingItem) {
      if (existingItem.quantity > 1) {
        dispatch(removeFromBasket({ id }));
      } else {
        dispatch(removeFromBasket({ id }));
      }
    }
  };
  
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTextVisibleNutrition, setIsTextVisibleNutrition] = useState(false);
  const [isTextVisiblePrepare, setIsTextVisiblePrepare] = useState(false);
  const [isTextVisibleDietary, setIsTextVisibleDietary] = useState(false);
  const [isTextVisibleStorage, setIsTextVisibleStorage] = useState(false);
  const [isTextVisibleExtra, setIsTextVisibleExtra] = useState(false);


  const handleToggleIngredirnt = () => {
    setIsTextVisible((prev) => !prev);
  };

  const handleToggleNutrition = () => {
    setIsTextVisibleNutrition((prev) => !prev);
  };

  const handleTogglePrepare = () => {
    setIsTextVisiblePrepare((prev) => !prev);
  };

  const handleToggleDietary = () => {
    setIsTextVisibleDietary((prev) => !prev);
  };

  const handleToggleStorage = () => {
    setIsTextVisibleStorage((prev) => !prev);
  };

  const handleToggleExtra = () => {
    setIsTextVisibleExtra((prev) => !prev);
  };


      
console.log(items)
   
  return (
    <>
    <BasketIcon/>
    <ScrollView style={styles.container}>
        <TouchableOpacity
        onPress={navigation.goBack}
         style={tw`absolute left-2 -top-8 mt-8 bg-gray-100 p-2 rounded-md`}>
            <ChevronLeftIcon size={20} style={tw`text-black text-gray-500 `}  />
        </TouchableOpacity>
        
       <View style={tw`w-72 rounded-lg ml-10 mt-20 flex justify-center items-center h-72`}>
        <Image source={{ uri: details.img }} style={tw`w-56 h-72`} />
      </View>
  
      <View style={tw`flex flex-row justify-between mb-2 mt-4`}>
<Text style={tw`font-semibold capitalize`} >{details.title}</Text>
<Text style={tw`text-red-500 font-semibold`}>${details.price}
</Text>

</View>
      

<Text numberOfLines={showFullDescription ? undefined : 4} style={tw``}>
        {details.description}
      </Text>

      {details.description.length > 3 && (
        <TouchableOpacity onPress={toggleDescription}>
          <Text style={tw`text-red-500`}>
            {showFullDescription ? 'Show Less' : '...Read More'}
          </Text>
        </TouchableOpacity>
      )}


<View style={tw`border-t border-b mt-8 border-gray-200`} />
<TouchableOpacity onPress={handleToggleIngredirnt}>

<View style={tw``}>
     
        <View style={tw`flex flex-row mt-2 justify-between items-center`}>
          <Text size={20} style={tw`text-black text-gray-500 capitalize`}>
            ingredients
          </Text>
          <ChevronDownIcon size={20} style={tw`pt-2 text-gray-500`} />
        </View>
     
      {isTextVisible && (
        <Text style={tw`mt-4 text-gray-500`} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, at?</Text>
      )}
    </View>
    </TouchableOpacity>



    <TouchableOpacity onPress={handleToggleNutrition}>
<View style={tw`border-t border-b mt-5 border-gray-200`} />
<View style={tw``}>
     
        <View style={tw`flex flex-row mt-2 justify-between items-center`}>
        <Text size={20} style={tw`text-black text-gray-500 capitalize `} >nutritational information</Text>
  <ChevronDownIcon size={20} style={tw`text-black text-gray-500 `} />
        </View>
     
      {isTextVisibleNutrition && (
        <Text style={tw`mt-4 text-gray-500`} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, at?</Text>
      )}
    </View>
    </TouchableOpacity>



    <TouchableOpacity onPress={handleTogglePrepare }>
<View style={tw`border-t border-b mt-4 border-gray-200`} />
<View style={tw``}>
     
        <View style={tw`flex flex-row mt-2 justify-between items-center`}>
        <Text size={20} style={tw`text-black text-gray-500 capitalize `} >How to prepare</Text>
  <ChevronDownIcon size={20} style={tw`text-black text-gray-500 `} />
        </View>
     
      {isTextVisiblePrepare && (
        <Text style={tw`mt-4 text-gray-500`} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, at?</Text>
      )}
    </View>
    </TouchableOpacity>



    <TouchableOpacity onPress={handleToggleDietary}>
<View style={tw`border-t border-b mt-4 border-gray-200`} />
<View style={tw``}>
     
        <View style={tw`flex flex-row mt-2 justify-between items-center`}>
        <Text size={20} style={tw`text-black text-gray-500 capitalize `} >dietary information</Text>
          <ChevronDownIcon size={20} style={tw`pt-2 text-gray-500`} />
        </View>
     
      {isTextVisibleDietary && (
        <Text style={tw`mt-4 text-gray-500`} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, at?</Text>
      )}
    </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={handleToggleStorage}>
<View style={tw`border-t border-b mt-4 border-gray-200`} />
<View style={tw``}>
     
        <View style={tw`flex flex-row mt-2 justify-between items-center`}>
        <Text size={20} style={tw`text-black text-gray-500 capitalize `} >storage information</Text>
          <ChevronDownIcon size={20} style={tw`pt-2 text-gray-500`} />
        </View>
     
      {isTextVisibleStorage && (
        <Text style={tw`mt-4 text-gray-500`} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, at?</Text>
      )}
    </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={handleToggleExtra}>
<View style={tw`border-t border-b mt-4 mb-4 border-gray-200`} />
<View style={tw``}>
     
        <View style={tw`flex  flex-row justify-between items-center`}>
        <Text size={20} style={tw`text-black text-gray-500 capitalize `} >extra</Text>
          <ChevronDownIcon size={20} style={tw`pt-2 text-gray-500`} />
        </View>
     
      {isTextVisibleExtra && (
        <Text style={tw`mt-4 text-gray-500`} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, at?</Text>
      )}
    </View>
    </TouchableOpacity>

    <View style={tw`border-t border-b mt-2 border-gray-200 mb-2`} />

<View style={tw`flex flex-row justify-between mb-6 mt-6`}>
        <TouchableOpacity
          onPress={removeItemFromBasket}
          style={tw`bg-white border border-gray-300 p-2 rounded-md`}
        >
          <MinusIcon size={20} style={tw`text-black text-gray-500`} />
        </TouchableOpacity>

        <Text style={tw`text-black mt-2 text-gray-500`}>
          {items.find((item) => item.id === details.id)?.quantity || 0}
        </Text>

        <TouchableOpacity
          onPress={addItemToBasket}
          style={tw`bg-white border border-gray-300 p-2 rounded-md`}
        >
          <PlusIcon size={20} style={tw`text-black text-gray-500`} />
        </TouchableOpacity>
      </View>


 <View style={tw`text-white bg-red-500 p-3 mb-4 rounded-3xl`} >
        <Text style={tw`text-white text-center mt-1`} 
        >Add to cart</Text>
      </View>

      <View style={tw`text-white bg-white border border-red-500 p-3 mb-42 rounded-3xl`} >
        <Text style={tw`text-red-500 text-center mt-1`} 
        >Subscribe to a plan</Text>
      </View>

    </ScrollView>
    </>
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
    marginBottom: 8,
  },
});

export default HomeDetailsScreen;
