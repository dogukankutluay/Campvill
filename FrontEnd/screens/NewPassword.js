import React from 'react';

//Components
import {AuthAfterContainer, CustomTextInput} from '../components';
export default function NewPassword({navigation}) {
  return (
    <AuthAfterContainer
      btnClick={() => navigation.navigate('SuccessFull')}
      navigation={navigation}
      headerTitle={'New Password'}
      descText={
        'Enter your new password below and please don’t forget it now. it’s important to you to remember your password.'
      }>
      <CustomTextInput secureTextEntry={true} labelText={'Set Password'} />
    </AuthAfterContainer>
  );
}
