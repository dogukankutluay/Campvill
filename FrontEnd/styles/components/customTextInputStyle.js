import {StyleSheet, Dimensions} from 'react-native';
const customTextInputStyle = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 40,
  },
  input: {
    backgroundColor: '#FAFAFA',
    borderColor: '#F4F4F5',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 8,
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#71717A',
  },
});
export default customTextInputStyle;
