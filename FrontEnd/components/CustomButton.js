import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {buttonStyle} from '../styles/components';

const CustomButton = ({btnText, btnClick}) => {
  return (
    <View>
      <TouchableOpacity onPress={btnClick} style={buttonStyle.btn}>
        <Text style={buttonStyle.login}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;
