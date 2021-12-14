import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#101010',
    flex: 1,
  },

  name: {
    color: '#ccc1db',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  genre: {
    color: 'white',
    margin: 5,
    paddingHorizontal: 10,
    paddingTop: 3,
    paddingLeft: 15,
    borderColor: '#420f85',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
  },
  director: {textAlign: 'center', color: 'white'},
  cast: {margin: 5, paddingHorizontal: 10, paddingTop: 3, paddingLeft: 15},
  brief: {color: 'white', padding: 5, marginHorizontal: 15},
  rate: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
    marginLeft: 3,
  },
  line: {borderWidth: 1, borderTopColor: 'black'},
  comments: {
    flex: 1,
    textShadowColor: 'black',
  },
});
