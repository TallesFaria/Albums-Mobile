import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumsList headerText={'Albums'} />
  </View>
);

AppRegistry.registerComponent('Albumsproject', () => App);
