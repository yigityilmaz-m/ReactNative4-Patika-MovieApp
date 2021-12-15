import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EFE2BA',
    flex: 1,
  },
  header: {
    color: '#404040',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    marginVertical: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#c5cbe3',
  },
  buttonClose: {
    backgroundColor: '#c5cbe3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btn: {
    borderRadius: 20,
    padding: 5,
    marginBottom: 5,
    elevation: 2,
  },
});
