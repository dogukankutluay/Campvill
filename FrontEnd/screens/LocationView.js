import {
  Text,
  StatusBar,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//Plugin
import LinearGradient from 'react-native-linear-gradient';

//Styles
import {locationViewStyle} from '../styles/screen';

//components
import {CustomButton} from '../components';

//ASsets
import ChevronLeft from '../assets/img/chevron-left-white.png';

export default function LocationView({route, navigation}) {
  const data = route.params.card;
  return (
    <ImageBackground source={data.image} style={locationViewStyle.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={locationViewStyle.chevronLeftIcon}>
        <Image source={ChevronLeft} />
      </TouchableOpacity>
      <LinearGradient colors={['transparent', '#000000']}>
        <View style={{marginTop: StatusBar.currentHeight}}>
          <View style={locationViewStyle.textContainer}>
            <Text style={locationViewStyle.textTitle}>{data.title}</Text>
            <Text style={locationViewStyle.textDecs}>{data.desc}</Text>
            <Text style={locationViewStyle.textDecs2}>{data.descDetail}</Text>
            <CustomButton
              btnText={'Select Location'}
              style={locationViewStyle.btn}
              btnClick={() => navigation.navigate('AddTrip', {data})}
            />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
