import {Dimensions, StyleSheet} from 'react-native';
const authAfterContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 24,
  },
  leftIcon: {
    marginRight: 8,
  },
  headerText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    color: '#000000',
  },
  desc: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  descText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#71717A',
  },
});
export default authAfterContainerStyle;
