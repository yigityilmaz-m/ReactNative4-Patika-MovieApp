import React from 'react';
import {View, Text} from 'react-native';
import styles from './MoviesCard.styles';

const MovieCard = ({name, rate, genre, brief}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>{genre}</Text>
      <Text>{rate}</Text>
      <Text>{brief.slice(0,200)}...</Text>
    </View>
  );
};

export default MovieCard;
