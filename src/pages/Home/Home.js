import React from 'react';
import {View, Text} from 'react-native';
import {getGenres, getMovies} from '../../api';
import data from '../../../MOVIES.json'
const Home = () => {
  const [movies, setMovies] = React.useState([]);

  /* React.useEffect(() => {
    getMovies()
      .then(movies => setMovies(movies))
      .catch(errormsg => console.log(errormsg));
  }, []); */

  return (
    <View>
     {/*  {movies.map(movie => (
        <Text key={movie.id}>{movie.name}</Text>
      ))} */}

      <Text>{data.movies[1].name}</Text>
    </View>
  );
};

export default Home;
