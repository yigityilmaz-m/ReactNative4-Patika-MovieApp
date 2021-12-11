import axios from 'axios';

//device's local ip address
const baseURL = 'http://192.168.0.106:8000';


async function getMovies() {
  try {
    const response = await axios.get(`${baseURL}/movies`);
    console.log('data' + response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getComments() {
  try {
    const response = await axios.get(`${baseURL}/comments`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getGenres() {
  try {
    const response = await axios.get(`${baseURL}/genres`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {getMovies, getComments, getGenres};
