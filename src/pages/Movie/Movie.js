import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/core';
import MovieCard from '../../components/MovieItem/MovieCard';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './Movie.styles';
import axios from 'axios';

const baseURL = 'http:10.0.3.2:3000';

function Movie() {
  const [comment, setComment] = useState([]);

  async function fetchData() {
    const response = await axios.get(`${baseURL}/comments?movieId=${id}`);
    setComment(response.data);
  }

  const route = useRoute();
  const {id, name, rate, genre, brief, director, cast} = route.params;

  const renderItem = ({item}) => (
    <View style={styles.containerAlt}>
      <Text style={styles.comments}>{item.comment}</Text>
      <View style={styles.line} />
    </View>
  );

  useEffect(() => {
    fetchData();
  }, []);

  const listGenre = genre.map(genre => (
    <Text style={styles.genre}>{genre}</Text>
  ));
  const listCast = cast.map(cast => (
    <View style={{marginLeft:10, flexDirection: 'row', justifyContent: 'flex-start'}}>
      <Icon name="star-o" size={20} color="#d79922" />
      <Text style={styles.cast}>{cast}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.containerAlt}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.director}>{director}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {listGenre}
        </View>
        <View style={styles.rate}>
          <Icon name="star" size={20} color="gold" />
          <Text style={styles.rate}>{rate}</Text>
        </View>

        <Text style={styles.content}>{brief}</Text>
      </View>

      <Text style={styles.title}>Cast</Text>
      <View style={styles.content}>{listCast}</View>
      <Text style={styles.title}>Comments</Text>
      <View style={styles.comments}>
        <FlatList
          data={comment}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default Movie;
