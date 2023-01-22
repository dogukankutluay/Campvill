import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import WhiteBox from '../assets/img/onboardingPage/whiteBox.png';
import GreenBox from '../assets/img/onboardingPage/greenBox.png';
import Path from '../assets/img/onboardingPage/Path.png';
//Styles
import {prePareItemStyle} from '../styles/components';

const prePareItem = ({labelText}) => {
  const [active, setActive] = useState(false);
  const Active = () => {
    return (
      <>
        <Image style={prePareItemStyle.green} source={GreenBox} />
        <Image style={prePareItemStyle.path} source={Path} />
      </>
    );
  };
  return (
    <View style={prePareItemStyle.container}>
      <View style={prePareItemStyle.leftContent}>
        <TouchableOpacity
          onPress={() => {
            setActive(!active);
          }}>
          <Image style={prePareItemStyle.white} source={WhiteBox} />
          {active && <Active />}
        </TouchableOpacity>
        <Text style={prePareItemStyle.leftText}>{labelText}</Text>
      </View>
    </View>
  );
};
export default prePareItem;
