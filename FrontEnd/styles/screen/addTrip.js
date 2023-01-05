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
  //teammates
  teamMatesContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
  },
  teamMatesLabel: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#71717A',
  },
  teamMatesListContainer: {
    backgroundColor: '#FAFAFA',
    borderColor: '#F4F4F5',
    borderWidth: 1,
    width: 80,
    height: 80,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  personList: {
    flexDirection: 'row',
    marginTop: 8,
  },
  personImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 15,
  },
  circleBtn:{
    position:'absolute',
    top:'33%',
    right:'15%',
  }
});
export default addTripStyle;
