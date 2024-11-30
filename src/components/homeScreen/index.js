// src/screens/HomeScreen.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/headerProfil/index';

class HomeScreen extends Component {
    componentDidMount() {
        console.log('HomeScreen mounted');
    }

    componentWillUnmount() {
        console.log('HomeScreen will unmount');
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Text style={styles.text}>Welcome to Syakirah Home!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 18,
    },
});

export default HomeScreen;