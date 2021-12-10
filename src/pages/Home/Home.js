import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {getGenres, getMovies} from '../../api';
import data from '../../../MOVIES.json';
import MovieCard from '../../components/MovieItem/MovieCard';

const Home = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    getMovies()
      .then(movies => setMovies(movies))
      .catch(errormsg => console.log(errormsg));
  }, []);

  const renderItem = ({item}) => (
    <MovieCard 
      name={item.name}
      rate={item.rate}
      genre={item.genre}
      brief={item.brief}
    />
  );

  return (
    <View>
      <FlatList
        data={data.movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {/* <MovieCard
        name={data.movies[1].name}
        genre={data.movies[1].genre}
        rate={data.movies[1].rate}
        brief={data.movies[1].brief}></MovieCard> */}
    </View>
  );
};

export default Home;
