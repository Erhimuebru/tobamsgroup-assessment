import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,Image , TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { HeartIcon  } from "react-native-heroicons/outline";
// import {StarIcon} from "@heroicons/react/24/solid"
// import {MapPinIcon} from "@heroicons/react/24/solid"
// import { HeartIcon, ChevronRightIcon, ChevronLeftIcon} from "@heroicons/react/24/outline"
import MenuDetailsCard from './MenuDetailsCard';
import { MockData } from './MockData';
const MenuCard = ({
    id,
    img,
    title,
    price,
    description,
    name
}) => {
//     return (
//         <TouchableOpacity  style={tw `relative  w-50 mt-4  pl-3 mb-1 rounded-md bg-white shadow`}>
//             <View style={tw`flex-row left-38 top-4`}>
//                 <HeartIcon color='black'/>
//             </View>
//            <Image
//            source={{uri:img}}
//            style={tw`h-36 w-36 p-4 rounded-full`}
//            />

//         <View  style={tw`absolute t`}>

//          <HeartIcon  style={tw`w-8 h-8 text-white`} />
//         </View>
//            <View style={tw`p-4`}>
//             <Text style={tw`text-xl font-bold`}>{title}</Text>

//             <Text style={tw`text-sm`}>{price}</Text>
//             <Text style={tw`text-sm`}>{description}</Text>
//             <Text style={tw`text-sm`}>{name}</Text>
//            </View>
         
//         </TouchableOpacity >
//     );
// }

 



// const HotelCard = ({ id, title, description }) => {
    const [showAll, setShowAll] = useState(false);
    const [mockData, setMockData] = useState([]);
  
    useEffect(() => {
      setTimeout(() => {
        setMockData(mockData);
      }, 1000);
    }, []);
  
    const toggleShowAll = () => {
      setShowAll((prevShowAll) => !prevShowAll);
    };
  
    return (
      <View className="swallow-card-container">
        <View className="swallow-card-header">
          <Text className="text-black text-4xl ml-6 lg:ml-20 mb-4">{title}</Text>
        </View>
        <Text className="heading swallow-card-description ml-6 lg:ml-20 mb-4">
          {description}
        </Text>
  
        <View>
          <View className="relative flex flex-row rounded-sm">
            <View className="rounded-sm container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-20">
              {mockData
                .slice(0, showAll ? MockData.length : 8)
                .map((category) => (
                  <MenuDetailsCard
                    key={category.id}
                    id={category.id}
                    img={category.img}
                    title={category.name}
                    rating={category.rating}
                    address={category.location}
                    price={category.price}
                    availability={category.availability}
                  />
                ))}
            </View>
          </View>
  
  
          {mockData.length > 8 && (
      
      <View className='absolute right-12 mt-16 mb-40'>
              <button className="btn bg-red-900 flex flex-row pr-4 pl-4 pt-2 pb-2 gap-2 text-white rounded-md" onClick={toggleShowAll}>
                {showAll ? "View Less" : "View All"}
                {/* <ChevronRightIcon className="w-4 h-5 text-white font-extrabold pt-1" /> */}
              </button>
            </View>
          )}
        </View>
      </View>
    );
  };
  
  export default MenuCard;