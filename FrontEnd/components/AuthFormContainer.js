import React from 'react';
import {Text, ScrollView, Image} from 'react-native';

//Assets
import blackLogo from '../assets/img/blackLogo.png';

//Styles
import {authFormContainerStyle} from '../styles/components';

//Components
import {CustomButton} from './';
const AuthFormContainer = ({children, forgetPassShow, navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}
      style={authFormContainerStyle.container}>
      <Image source={blackLogo} style={authFormContainerStyle.blackLogo} />
      {children}
      <CustomButton
        btnClick={() => navigation.navigate('Login')}
        btnText={'Log In'}
        forgetPassShow={forgetPassShow}
      />
      <CustomButton
        btnClick={() => navigation.navigate('SignUp')}
        btnText={'Sign Up'}
        type="light"
      />
    </ScrollView>
  );
};

export default AuthFormContainer;
