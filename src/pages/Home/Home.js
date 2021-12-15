import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import styles from './Home.styles';
import MovieCard from '../../components/MovieItem/MovieCard';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';

const baseURL = 'http:10.0.3.2:3000';

function Home() {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  async function fetchData() {
    const response = await axios.get(`${baseURL}/movies`);
    setMovies(response.data);
  }

  const renderItem = ({item}) => (
    
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MoviePage', item)}>
          <MovieCard
            style={styles.containerAlt}
            name={item.name}
            rate={item.rate}
            genre={item.genre}
            brief={item.brief.slice(0, 200) + '...'}
          />
        </TouchableOpacity>
      </View>
    
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>MOVIES</Text>
      <View>
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
