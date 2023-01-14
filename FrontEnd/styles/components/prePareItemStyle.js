import {StyleSheet} from 'react-native';

const prePareItemStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 13,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    paddingHorizontal: 5,
    color: 'black',
  },
  leftContent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftText: {
    marginLeft: 16,
    lineHeight: 24,
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
  },
  plusAndSour: {
    backgroundColor: '#84CC16',
    opacity: 0.8,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  inText: {
    color: 'white',
  },
  green:{
    position:'absolute',
   
  },
  path:{
  width:16,
  height:16,
  position:'absolute',
  left:2,
  
  },
});
export default prePareItemStyle;
