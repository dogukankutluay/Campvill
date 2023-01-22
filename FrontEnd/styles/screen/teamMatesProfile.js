import {StyleSheet, Dimensions} from 'react-native';

const teamMatesProfile = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
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
  content: {
    alignItems: 'center',
  },
  image: {
    height: 335,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    marginTop: 24,
    fontWeight: '600',
    color: '#000000',
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    margin: 20,
    color: '#3F3F46',
  },
});
export default teamMatesProfile;
