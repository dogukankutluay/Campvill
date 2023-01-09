import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import kare from '../assets/img/onboardingPage/Square.png';
import arti from '../assets/img/plus.png';
import gunes from '../assets/img/onboardingPage/Sun.png';
import active from '../assets/img/onboardingPage/Activities.png';
import activitiesStyle from "../styles/screen/activities";
import { CustomButton, Footer } from "../components";

const Activities = ({navigation}) => {
  return (
    <View style={activitiesStyle.container}>
      <View style={activitiesStyle.top}> 
        <TouchableOpacity>
        <Image source={kare}></Image>
        </TouchableOpacity>
        <Text style={activitiesStyle.text}>Activities</Text>
        <TouchableOpacity>
        <Image source={arti}></Image>
        </TouchableOpacity>
      </View>
      <View style={activitiesStyle.days}> 
        <Text style={activitiesStyle.daytext}>Day 01</Text>
        <Image source={gunes}></Image>
        <Text style={activitiesStyle.dayremain}>16 day's remain</Text>
      </View>
      <View style={activitiesStyle.resim}>
        <Image source={active}></Image>
        <Text style={{marginTop:24,}}>You didn’t add any Activity or Task yet.</Text>
        <CustomButton
        // btnClick={() => navigation.navigate('')}
        btnText={'Add Activity'}
        type="light"
        style={{width:114,height:45,borderRadius:10,}}
      />
      </View>
      <Footer>
      </Footer>
    </View>
  );
};
export default Activities;
