import React from 'react'
import { View, Text } from 'react-native'
import { getMovies } from '../../api'

const Home = () => {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    getMovies().then(movies => setMovies(movies))
  }, [])

  return (
    <View>
      {movies.map(movie => (
        <Text key={movie.id}>{movie.name}</Text>
      ))}
    </View>
  )
}

export default Home
