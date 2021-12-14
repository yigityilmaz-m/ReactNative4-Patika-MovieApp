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
    <View>
      <Text>{item.comment}</Text>
      <View style={styles.line} />
    </View>
  );

  useEffect(() => {
    fetchData();
  }, []);

  const listGenre = genre.map(item => (
    <Text style={styles.genre}>{genre}</Text>
  ));

  return (
    <View style={styles.container }>
      <View>
        <Text style={styles.name}>{name}</Text> 
        <Text style={styles.director}>{director}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>{listGenre}</View>
      </View>
      <View style={styles.rate}>
        <Icon name="star" size={20} color="gold" />
        <Text style={styles.rate}>{rate}</Text>
      </View>
      <Text style={styles.brief}>{brief}</Text>
      <Text style={styles.cast}>{cast}</Text>

      <View style={styles.line}></View>

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
