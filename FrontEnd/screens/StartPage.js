import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';

// Assets Image
import WhiteLogo from '../assets/img/whiteLogo.png';

// Syles
import {startPageStyle} from '../styles/screen';
const StartPage = () => {
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
