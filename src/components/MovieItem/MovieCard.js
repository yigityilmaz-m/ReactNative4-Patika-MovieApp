import React from 'react';
import {View, Text} from 'react-native';
import styles from './MoviesCard.styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
const MovieCard = props => {
  const listGenre = props.genre.map(genre => (
    <Text style={styles.genre}>{genre}</Text>
  ));

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>
        <View style={styles.rate}>
          <Icon name="star" size={20} color="gold" />
          <Text>{props.rate}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          {listGenre}
        </View>

        <Text>{props.brief}</Text>
      </View>
    </View>
  );
};

export default MovieCard;
