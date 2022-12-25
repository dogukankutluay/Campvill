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
import Card3 from '../assets/img/Card3.png';

//Styles
import {locationSearchStyle} from '../styles/screen';

//Components
import {Card} from '../components';

export default function LocationSearch({navigation}) {
  const cards = [
    {
      title: 'Catalina Island',
      desc: 'Los Angeles California',
      descDetail: 'One of California’s Channel Islands, lies southwest of Los Angeles. It s known for its wildlife, dive sites and Mt. Orizaba, its highest peak. The resort town of Two Harbors lies to the north. Best for Campers',
      image: Card1,
    },
    {
      title: 'Kösedağ',
      desc: 'Sivas ın köse dağı',
      image: Card2,
      descDetail:'Havv Havv Havvv, Kösedağ Muharebesi, 3 Temmuz 1243 tarihinde Anadolu Selçuklu Devleti ile Moğollar arasında gerçekleşen ve Selçuklu Devleti nin yenilip Moğol tabiiyetine girmesiyle sonuçlanan muharebedir. Kösedağ Muharebesi, sonuçları bakımından Türk tarihi içerisinde özel bir yere sahiptir',
    },
    {
      title: 'Furkan Kaplan',
      desc: 'Serseri Şekilde Motor Kullanma ve Boş Yapma Sanatı',
      image: Card3,
      descDetail:'Tam bir uzay Boşlugu cinsinden boş yapıyor.Anlamsız Atarlı UBER Boş Sözler. Serseri Bir Bakış Atma ve Magrur Gözlükler.Tam bir Pussy magnet',
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
