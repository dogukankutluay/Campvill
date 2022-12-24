import {StyleSheet} from 'react-native';

const addTripStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 29,
    marginTop: 25,
  },
  backBtn: {
    marginRight: 8,
  },
  headerText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    color: 'black',
  },
});
export default addTripStyle;
