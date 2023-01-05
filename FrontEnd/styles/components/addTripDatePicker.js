import {StyleSheet} from 'react-native';

const addTripDatePickerStlye = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateOpenBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: '#FAFAFA',
    borderColor: '#F4F4F5',
    borderWidth: 1,
    alignItems: 'center',
    width: '45%',
  },
  pickerText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#A1A1AA',
  },
});
export default addTripDatePickerStlye;
