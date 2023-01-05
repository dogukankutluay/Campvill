import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import kare from '../assets/img/onboardingPage/Square.png';
import arti from '../assets/img/plus.png';
import gunes from '../assets/img/onboardingPage/Sun.png';
import active from '../assets/img/onboardingPage/Activities.png';
import anasayfa from '../assets/img/onboardingPage/Home.png';
import feed from '../assets/img/onboardingPage/Heart.png';
import profile from '../assets/img/onboardingPage/Profile.png';
import form from '../assets/img/onboardingPage/Form.png';
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
      <View style={{display:'flex',flexDirection:'row',flex:1}}>
      <Image source={anasayfa} style={{position:'absolute',bottom:'-50%',zIndex:1,left:'10%',}}></Image>
      <Image source={feed} style={{position:'absolute',bottom:'-48%',zIndex:1,left:'35%',}}></Image>
      <Image source={form} style={{position:'absolute',bottom:'-48%',zIndex:1,right:'35.7%',}}></Image>
      <Image source={profile} style={{position:'absolute',bottom:'-48%',zIndex:1,right:'10%',}}></Image>
      </View>
      <Footer>
      </Footer>
    </View>
  );
};
export default Activities;
