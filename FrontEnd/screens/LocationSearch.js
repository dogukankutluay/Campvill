import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

//Assets
import ChevronLeft from '../assets/img/chevron-left.png';
import SearchPng from '../assets/img/search.png';

import Card1 from '../assets/img/card-1.png';
import Card2 from '../assets/img/card-2.png';

//Styles
import {locationSearchStyle} from '../styles/screen';

//Components
import {Card} from '../components';

export default function LocationSearch({navigation}) {
  const cards = [
    {
      title: 'Catalina Island',
      desc: 'Los Angeles California',
      image: Card1,
    },
    {
      title: 'Kösedağ',
      desc: 'Sivas ın köse dağı',
      image: Card2,
    },
  ];

  return (
    <View style={locationSearchStyle.container}>
      <View style={locationSearchStyle.searchTop}>
        <TouchableOpacity style={locationSearchStyle.leftBack}>
          <Image source={ChevronLeft} />
        </TouchableOpacity>
        <TextInput style={locationSearchStyle.searhInput} />
        <TouchableOpacity style={locationSearchStyle.searchBtn}>
          <Image source={SearchPng} />
        </TouchableOpacity>
      </View>
      <ScrollView style={locationSearchStyle.searchList}>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              onPress={() => navigation.navigate('LocationView', {card})}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
