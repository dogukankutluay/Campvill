import {Text, View, StatusBar, Image} from 'react-native';
import React from 'react';

//Assets
import ChevronLeftIcon from '../assets/img/chevron-left.png';
//Styles
import {authAfterContainerStyle} from '../styles/components';

//Components
import {CustomButton} from '../components';
const AuthAfterContainer = ({children}) => {
  return (
    <View style={authAfterContainerStyle.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <View style={authAfterContainerStyle.header}>
        <Image
          source={ChevronLeftIcon}
          style={authAfterContainerStyle.leftIcon}
        />
        <Text style={authAfterContainerStyle.headerText}>Forget Password</Text>
      </View>
      <View style={authAfterContainerStyle.desc}>
        <Text style={authAfterContainerStyle.descText}>
          To get your new password you need to put your phone number down below.
          and we will send you an OTP on that number for confirmation.
        </Text>
      </View>
      {children}
      <CustomButton btnText={'Send'} />
    </View>
  );
};
export default AuthAfterContainer;
