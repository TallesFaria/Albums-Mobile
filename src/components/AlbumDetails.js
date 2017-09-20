import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails = props => {
  const { textStyle } = styles;

  return (
    <Card>
      <CardSection>
        <Text style={textStyle}>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

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

export default AlbumDetails;
