import {StyleSheet} from 'react-native';
const teamMatesItem = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 335,
    height: 100,
    marginVertical: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    marginLeft: 16,
    color: '#000000',
  },
});

export default teamMatesItem;
