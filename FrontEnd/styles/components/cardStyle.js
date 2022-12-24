import {StyleSheet} from 'react-native';
const cardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    borderRadius: 20,
    marginRight: 12,
    width: 100,
    height: 70,
  },
  textsContainer: {},
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    color: 'black',
  },
  desc: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: 'black',
  },
});
export default cardStyle;
