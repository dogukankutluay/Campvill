import React from 'react';
import {Text, View, TextInput} from 'react-native';

//Styles
import {customTextInputStyle} from '../styles/components';
const CustomTextInput = ({
  labelText,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <View style={customTextInputStyle.container}>
      <Text style={customTextInputStyle.label}>{labelText}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={customTextInputStyle.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;
