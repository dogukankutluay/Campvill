import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

//Styles
import {cardStyle} from '../styles/components';

const Card = ({card, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={cardStyle.container}>
      <Image source={card.image} style={cardStyle.image} />
      <View style={cardStyle.textsContainer}>
        <Text style={cardStyle.title}>{card.title}</Text>
        <Text style={cardStyle.desc}>{card.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
