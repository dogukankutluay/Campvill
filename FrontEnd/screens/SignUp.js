import React from 'react';
import {View, Text, ScrollView} from 'react-native';

//Styles
import {signUpStyle} from '../styles/screen';

//Components
import {AuthFormContainer, CustomButton, CustomTextInput} from '../components';
const SignUp = ({navigation}) => {
  return (
    <AuthFormContainer navigation={navigation} forgetPassShow={false}>
      <CustomTextInput labelText={'Name'} />
      <CustomTextInput labelText={'Email'} />
      <CustomTextInput labelText={'Phone'} />
      <CustomTextInput labelText={'Password'} />
    </AuthFormContainer>
  );
};
export default SignUp;
