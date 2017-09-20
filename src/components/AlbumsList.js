import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumsList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetails key={album.title} album={album} />);
  }

  render() {
    const { viewStyle } = styles;

    return (
      <View style={viewStyle}>
        {this.renderAlbums()}
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 60,
    paddingTop: 15,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export default AlbumsList;
