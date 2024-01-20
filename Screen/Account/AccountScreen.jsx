import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text>AccountScreen</Text>
        </View>
    );
}

 
export default AccountScreen;