import React from 'react';
import {View, Text} from 'react-native';
import styles from './MoviesCard.styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const MovieCard = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row' , flex: 1}}>
        <Text style={styles.name}>{props.name}</Text>
        <View style={styles.rate}>
          <Icon name="star" size={20} color="gold" />
          <Text>{props.rate}</Text>
        </View>
      </View>

      <Text>{props.genre}</Text>

      <Text>{props.brief}</Text>
    </View>
  );
};

export default MovieCard;
