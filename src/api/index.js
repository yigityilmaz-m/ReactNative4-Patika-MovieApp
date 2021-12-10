import axios from 'axios';

const baseURL = 'http://localhost:3000';

/* axios({
  method: 'get',
  url: `${baseURL}/movies`,
}).then((response) => {
  console.log(response.data);
});  */

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
