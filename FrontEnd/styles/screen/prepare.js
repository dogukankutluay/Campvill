import { StyleSheet } from "react-native";

const prepareStyle = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'red',
        height:'10%',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    headerText:{
        fontSize:20,
        fontWeight:'500',
        lineHeight:30,
        marginLeft:10,
    },
    plusItem:{
        justifyContent:'flex-end',
    },
    leftContent:{
        flexDirection:'row',
    },
  });
export default prepareStyle;