import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAvoidingView } from 'react-native';
import tw from 'twrnc';

const SearchComponent = () => {




  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#999" style={tw` ml-16`} />
        <TextInput
     
          placeholder="Search"
     
        />
      </View>
    
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: -50
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 12,
    gap: 10
  },
  input: {
    flex: 1,
    height: 25,
    marginRight: 5,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchComponent;
