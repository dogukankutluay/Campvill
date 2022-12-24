import {Text, StatusBar, ImageBackground, View} from 'react-native';
import React from 'react';

//Styles
import {locationViewStyle} from '../styles/screen';

export default function LocationView({route}) {
  const data = route.params.card;
  return (
    <ImageBackground source={data.image} style={locationViewStyle.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />
      <View style={{marginTop: StatusBar.currentHeight}}>
        <Text>test</Text>
      </View>
    </ImageBackground>
  );
}
