import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import WhiteBox from '../assets/img/onboardingPage/whiteBox.png';
import GreenBox from '../assets/img/onboardingPage/greenBox.png';
import Path from '../assets/img/onboardingPage/Path.png';
//Styles
import {prePareItemStyle} from '../styles/components';

const prePareItem = () => {
  const [count, setCount] = useState(0);
  
  return (
    <View style={prePareItemStyle.container}>
      <View style={prePareItemStyle.leftContent}>
        <Image style={prePareItemStyle.white} source={WhiteBox}></Image>
        {count>0 &&(        
        <Image style={prePareItemStyle.green} source={GreenBox}></Image>
        )}
        {count>0 && (        
        <Image style={prePareItemStyle.path} source={Path}></Image>
        )}
        <Text style={prePareItemStyle.leftText}>Sleeping mat or camp bed</Text>
      </View>
      <View style={prePareItemStyle.rightContent}>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={prePareItemStyle.plusAndSour}>
          <Text style={prePareItemStyle.inText}>+</Text>
        </TouchableOpacity>
        <Text style={prePareItemStyle.rightText}>{count}</Text>
        <TouchableOpacity
          onPress={() => count > 0 && setCount(count - 1)}
          style={prePareItemStyle.plusAndSour}>
          <Text style={prePareItemStyle.inText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default prePareItem;
