import React from 'react';
import {View, Text} from 'react-native';
import styles from './MoviesCard.styles';

const MovieCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text>{props.genre}</Text>
      <Text>{props.rate}</Text>
      <Text>{props.brief.slice(0,200)}...</Text>
    </View>
  );
};

export default MovieCard;
