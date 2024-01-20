import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
const ModalScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ModalScreen</Text>
        </View>
    );
}

 
export default ModalScreen;