import {StyleSheet} from 'react-native';

const prepareStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 30,
    marginLeft: 10,
  },
  plusItem: {
    justifyContent: 'flex-end',
  },
  leftContent: {
    flexDirection: 'row',
  },
  prePareItems: {
    flex: 1,
  },
});
export default prepareStyle;
