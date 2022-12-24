import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';

//Assets
import ChevronLeftIcon from '../assets/img/chevron-left.png';
//Styles
import {authAfterContainerStyle} from '../styles/components';

//Components
import {CustomButton} from '../components';
const AuthAfterContainer = ({
  children,
  headerTitle,
  descText,
  btnClick,
  navigation,
}) => {
  return (
    <View style={authAfterContainerStyle.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <View style={authAfterContainerStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={authAfterContainerStyle.leftIcon}>
          <Image source={ChevronLeftIcon} />
        </TouchableOpacity>

        <Text style={authAfterContainerStyle.headerText}>{headerTitle}</Text>
      </View>
      <View style={authAfterContainerStyle.desc}>
        <Text style={authAfterContainerStyle.descText}>{descText}</Text>
      </View>
      {children}
      <CustomButton btnText={'Send'} btnClick={btnClick} />
    </View>
  );
};
export default AuthAfterContainer;
