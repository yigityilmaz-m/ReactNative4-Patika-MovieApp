import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/core';
import MovieCard from '../../components/MovieItem/MovieCard';

function Movie() {
  const route = useRoute();
  const {name, rate, genre, brief} = route.params;

  return (
    <View>
      <MovieCard
        name={name}
        rate={rate}
        genre={genre}
        brief={brief}
      />
      <Text>hello second page</Text>
    </View>
  );
}

export default Movie;
