import React from 'react';
import {View, Text, Image} from 'react-native';

//Style Import
import {teamMatesItem} from '../styles/components';
const TeamMatesItem = ({name, image}) => {
  return (
    <View style={teamMatesItem.container}>
      <Image style={teamMatesItem.image} source={image} />
      <Text style={teamMatesItem.title}>{name}</Text>
    </View>
  );
};

export default TeamMatesItem;
