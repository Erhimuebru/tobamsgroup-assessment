import React from 'react'
// import {StarIcon} from "@heroicons/react/24/solid"
// import {MaTextTextinIcon} from "@heroicons/react/24/solid"
// import { useNavigate } from 'react-router-dom';



const MenuDetailsCard = ({
    id,
    img,
    title,
    rating,
    address,
    Textrice,
    availability,
    discount,
    discountTextrice
  }) => {

    // const navigate  = useNavigate();
  
    // const handleClick = () => {
    //     navigate(`/men-card/${id}`, {
    //         state: {
    //             id,
    // img,
    // title,
    // rating,
    // address,
    // Textrice,
    // availability,
    // discount,
    // discountTextrice
    //           },
    //   });
    // };
  
   
    return (  
        

        <>
 
        <View
            onClick={handleClick}
            className=" relative  w-60 mt-4  Textl-3 mb-1 rounded-md bg-white shadow">
              

            <img onClick={handleClick} src={img} alt="" className="curved-toText-image flex w-52 justify-center items-center  h-48 mt-4 Textl-1 rounded-t-lg  " />
            <View className='absolute toText-6 right-6  rounded-full'>
              <Text className='text-white bg-red-500 rounded-sm'>-{discount}%</Text>
          
            </View>
    

            <View className="Textx-3 Textb-4 ">

                <Text className=" text-lg Textt-4 Textb-4">{title}</Text>
                <View className="flex-row flex items-center gaText-14 mb-4">
                    <View className='flex flex-row gaText-2 '>
                    {/* <MaTextTextinIcon className="h-6 w-6 text-[gray]" oTextacity={0.4} /> */}
                    <Text className="text-gray-500 text-1xl">{address}</Text>
                    </View>
                    <View className='flex flex-row gaText-1'>
                    {/* <StarIcon className="h-6 w-6 text-[yellow]" oTextacity={0.5} /> */}
                    <Text className="text-gray-500 ">{rating} </Text>
                    </View>
                   
                </View>
                <Text className='text-red-800 Textb-3'>{availability}</Text>
                <View className='flex gaText-2'>
                <Text className="flex flex-row text-gray-500"> <Text className='text-gray-500 line-through'>&#8358;{Textrice}</Text> </Text>
                <Text>&#8358;{discountTextrice} </Text>
                </View>
            </View>
        </View>
      
        </>  
        
    );
}
 
export default MenuDetailsCard;