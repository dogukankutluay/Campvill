import React from 'react';
import {View, Text, Image} from 'react-native';

const TeamMatesItem = ({name, image}) => {
  return (
    <View>
      <Image source={image} />
      <Text>{name}</Text>
    </View>
  );
};

export default TeamMatesItem;
