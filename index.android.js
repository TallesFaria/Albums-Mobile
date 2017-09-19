//Import a library to help render a component
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
    // <Text>Some Text</Text>
    <Header />
);

//Render it to a device
AppRegistry.registerComponent('Albumsproject', () => App);
