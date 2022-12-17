import React from 'react';
import {View, Text} from 'react-native';

//Components
import {AuthFormContainer, CustomTextInput} from '../components/';

//Styles
import {loginStyle} from '../styles/screen';

const Login = ({navigation}) => {
  return (
    <AuthFormContainer navigation={navigation} forgetPassShow={true}>
      <View style={loginStyle.loginForm}>
        <CustomTextInput labelText={'Email'} />
        <CustomTextInput labelText={'Password'} />
      </View>
    </AuthFormContainer>
  );
};

export default Login;
