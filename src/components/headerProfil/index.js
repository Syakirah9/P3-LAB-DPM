import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#6200ee',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default Header;