//Import a library to help render a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
    // <Text>Some Text</Text>
    <Header headerText={'Albums'} />
);

//Render it to a device
AppRegistry.registerComponent('Albumsproject', () => App);
