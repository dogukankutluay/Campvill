import {StyleSheet} from 'react-native';

const locationSearchStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'space-around',
  },
  leftBack: {},
  searhInput: {
    width: '60%',
    borderColor: '#84CC16',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  searchBtn: {
    backgroundColor: '#84CC16',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  searchList: {
    marginTop: 32,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
export default locationSearchStyle;
