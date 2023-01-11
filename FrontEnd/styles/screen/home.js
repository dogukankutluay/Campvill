import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  container: {
    flex:1,
    borderWidth:1,
    borderColor:'red',
  },
  story: {
    borderWidth:1,
    borderColor:'blue',
    height:'15%',
  },
  resim:{
    width:60,
    height:60,
    borderRadius:100,
    borderWidth:1,
    borderColor:'red',
    marginLeft:10,
  },
  miniResim:{
    width:40,
    height:40,
    borderRadius:100,
    borderWidth:1,
    borderColor:'red',
    marginLeft:10,
  },
  share:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderColor:'pink',
  },
  shareContainer:{
    marginTop:10,
    borderWidth:1,
    borderColor:'yellow',
  },
  nickname:{
    display:'flex',
    position:'absolute',
    bottom:-75,
    fontSize:11,
  }
});
export default homeStyle;
