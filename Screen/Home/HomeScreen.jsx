import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { MockData } from './MockData';
import tw from 'twrnc';
import { Button } from 'react-native-elements';
import SearchComponent from "../../components/SearchComponent";
import HomeDetailsCard from "./HomeDetailsCard";

const HomeScreen = () => {
  const [showAll, setShowAll] = useState(false);
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMockData(MockData);
    }, 1000);
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
                 <View style={tw`border-t border-b border-gray-200 mb-4`} /> 




                        <View style={tw`absolute mt-4 z-50 w-full`}>
                        <SearchComponent />
                        </View> 
        

                    <ScrollView style={styles.container}>
                        <View style={styles.cardContainer}>
                        {mockData
                            .slice(0, showAll ? MockData.length : 8)
                            .map((category) => (
                            <HomeDetailsCard
                                key={category.id}
                                id={category.id}
                                img={category.img}
                                title={category.name}
                                rating={category.rating}
                                address={category.location}
                                price={category.price}
                                availability={category.availability}
                                discount={category.discount}
                                discountPrice={category.discountPrice}
                                description={category.description}
                            />
                            ))}
                        </View>
                    </ScrollView>

      {mockData.length > 8 && (
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={toggleShowAll} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    marginTop:100

  },
  search: {
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    position: 'absolute',
    right: 12,
    bottom: 40,
  },
  button: {
    backgroundColor: '#db3c2f',
    flexDirection: 'row',
    paddingRight: 4,
    paddingLeft: 4,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 5,
    color: 'white',
  },
});

export default HomeScreen;
