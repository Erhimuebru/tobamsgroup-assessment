import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
const BasketScreen = () => {
    return (
        <View style={styles.container}>
            <Text>BasketScreen</Text>
        </View>
    );
}

 
export default BasketScreen;