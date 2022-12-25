import {Text, StatusBar, ImageBackground, View} from 'react-native';
import React from 'react';

//Styles
import {locationViewStyle} from '../styles/screen';

//components
import {CustomButton} from '../components';

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
        <View style={locationViewStyle.textContainer}>
          <Text style={locationViewStyle.textTitle}>{data.title}</Text>
          <Text style={locationViewStyle.textDecs}>{data.desc}</Text>
          <Text style={locationViewStyle.textDecs2}>{data.descDetail}</Text>
          <CustomButton btnText={'Select'} />
        </View>
      </View>
    </ImageBackground>
  );
}
