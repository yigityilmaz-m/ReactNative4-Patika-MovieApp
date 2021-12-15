import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
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
      <TouchableOpacity onPress={() => navigation.navigate('MoviePage', item)}>
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <Text style={styles.header}>MOVIES</Text>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Genres</Text>
                <Button style ={{margin:5}} color={'#c5cbe3'} title='action'/>
                <Button color={'#c5cbe3'}  title='horror'/>
                <Button color={'#c5cbe3'} title='thriller'/>
                <Button color={'#c5cbe3'} title='drama'/>
                <Button color={'#c5cbe3'} title='comedy'/>
                <Button color={'#c5cbe3'}  title='romance'/>
                <Button color={'#c5cbe3'}  title='fantasy'/>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Filter by Genre</Text>
          </Pressable>
        </View>
      </View>

      <View style={{flex:7}}>
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
