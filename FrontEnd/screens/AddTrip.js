import {StatusBar, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

//Asetts
import ChevronLeft from '../assets/img/chevron-left.png';

//Components
import {CustomTextInput, CustomButton} from '../components';

//Styles
import {addTripStyle} from '../styles/screen';

export default function AddTrip({navigation}) {
  return (
    <View style={addTripStyle.container}>
      <View style={addTripStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={addTripStyle.backBtn}>
          <Image source={ChevronLeft} />
        </TouchableOpacity>
        <Text style={addTripStyle.headerText}>Add New Trip</Text>
      </View>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <CustomTextInput labelText={'Trip Name'} />
      <CustomTextInput labelText={'Location'} />
      <CustomButton
        btnClick={() => navigation.navigate('LocationSearch')}
        btnText={'View Locations'}
        type="light"
        style={{width: 150, marginLeft: 40, paddingHorizontal: 15}}
      />
    </View>
  );
}
