import React from 'react';
import {Text, View, TextInput} from 'react-native';

//Styles
import {customTextInputStyle} from '../styles/components';
const CustomTextInput = ({
  labelText,
  onChangeText,
  secureTextEntry = false,
  value,
}) => {
  return (
    <View style={customTextInputStyle.container}>
      <Text style={customTextInputStyle.label}>{labelText}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={customTextInputStyle.input}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
};

export default CustomTextInput;
