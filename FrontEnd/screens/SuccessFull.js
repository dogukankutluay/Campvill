import {Text, View,Image} from 'react-native';
import React from 'react';
import { CustomButton } from '../components';
import Success from '../assets/img/onboardingPage/4.png';
const SuccessFull = ({navigation}) => {
  return (
    <View style={{
      width:350,
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignSelf:'center',
      }}>
      <Image source={Success} style={{
        width: 294,
        height: 228,
        alignSelf:'center',
      }}/>
      <Text
      style={{
        alignSelf:'center',
        fontSize:24,
        lineHeight:24,
        textAlign:'center',
        marginTop:24,
        fontWeight:'600',
        color:'black',
      }}
      >Hurrey</Text>
            <Text
      style={{
        alignSelf:'center',
        textAlign:'center',
        fontSize:18,
        lineHeight:24,
        marginTop:8,
      }}
      >Your Password changed successfully. please go back and log-in.</Text>
      <CustomButton style={{alignSelf:'center',marginTop:24,}}
      btnClick={() => {
        navigation.navigate('Login');
      }}
      btnText={'Go Back'}/>
    </View>
  );
};
export default SuccessFull;
