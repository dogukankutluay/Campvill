import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

// Assets Image
import WhiteLogo from '../assets/img/whiteLogo.png';

// Syles
import {startPageStyle} from '../styles/screen';
const StartPage = props => {
  // Sayfa görünümü 3 saniye
  // 3 saniye sonra Onboarding sayfasına yönlendir
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Onboarding');
    }, 3000); // 3000ms = 3sn
  }, []);
  return (
    <View style={startPageStyle.container}>
      <StatusBar backgroundColor="#84CC16" />
      <Image style={startPageStyle.whiteLogo} source={WhiteLogo} />
      <Text style={startPageStyle.desc}>
        Makes your camping more easy, next level. and helps you to follow your
        plannings.
      </Text>
    </View>
  );
};
export default StartPage;
