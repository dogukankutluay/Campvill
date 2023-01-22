import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import {prepareStyle} from '../styles/screen';
import Chevron from '../assets/img/chevron-left.png';
import Plus from '../assets/img/plus.png';

import {PrePareItem, CustomButton} from '../components';
const Prepare = () => {
  const preParies = [
    'Sleeping Bag',
    'Pillow',
    'Sleeping mat or camp bed (If tent camping)',
  ];

  return (
    <View style={prepareStyle.container}>
      <StatusBar backgroundColor={'#fafafa'} barStyle="dark-content" />
      <View style={prepareStyle.header}>
        <View style={prepareStyle.leftContent}>
          <Image source={Chevron} />
          <Text style={prepareStyle.headerText}>Prepare your Bag</Text>
        </View>
        <Image style={prepareStyle.plusItem} source={Plus} />
      </View>
      <View style={prepareStyle.prePareItems}>
        {preParies.map((prePare, index) => (
          <PrePareItem labelText={prePare} key={index} />
        ))}
      </View>

      <View style={{alignItems: 'center'}}>
        <CustomButton btnText={'Ready'} />
      </View>
    </View>
  );
};
export default Prepare;
