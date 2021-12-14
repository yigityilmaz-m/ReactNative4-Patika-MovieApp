import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
//import {getGenres, getMovies} from '../../api';
import data from '../../../MOVIES.json';
import MovieCard from '../../components/MovieItem/MovieCard';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';

const baseURL = 'http:10.0.3.2:3000/movies';

function Home() {
  const [Movies, setMovies] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  async function fetchData() {
    const response = await axios.get(baseURL);
    setMovies(response.data);
  }

  const renderItem = ({item}) => (
    <MovieCard
      name={item.name}
      rate={item.rate}
      genre={item.genre}
      brief={item.brief}
    />
  );

  useEffect(() => {
    fetchData();
  }, []);

  function handleMovieNavigation() {
    navigation.navigate('MoviePage');
  }

  return (
    <SafeAreaView>
      <Button title="Movie Page" onPress={handleMovieNavigation} />
      <View>
        <FlatList
          data={Movies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      
    </SafeAreaView>
  );
}

export default Home;
