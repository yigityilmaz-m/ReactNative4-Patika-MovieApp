import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#C5CBE3',
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },

  containerAlt: {
    backgroundColor: '#C5CBE3',
    margin: 10,
    borderRadius:10,
  },

  name: {
    color: '#505050',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  genre: {
    color: '#4056a1',
    margin: 5,
    paddingHorizontal: 10,
    paddingTop: 3,
    paddingLeft: 15,
    borderColor: '#d79922',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
  },
  
  director: {textAlign: 'center', color: '#303030'},
  cast: {marginLeft: 5, color: '#303030',},
  content: {color: '#303030', padding: 5, marginHorizontal: 5, marginBottom: 10},
  rate: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#303030',
    marginLeft: 3,
  },
  comments: {
    flex: 1,
    color:'#303030',
    margin:5
  },
  title: {
    color: '#4056a1',
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderColor: '#d79922',
    marginHorizontal: 20,
    paddingLeft: 5,
  },
});
