import React from "react";
import {View,Text,Image,ScrollView} from 'react-native';
import { prepareStyle } from "../styles/screen";
import Chevron from "../assets/img/chevron-left.png";
import Plus from '../assets/img/plus.png';
const Activities = () => {
  return (
    <View style={prepareStyle.container}>
        <View style={prepareStyle.header}>
        <View style={prepareStyle.leftContent}>
        <Image source={Chevron}/>
        <Text style={prepareStyle.headerText}>Prepare your Bag</Text>
        </View>
        <Image style={prepareStyle.plusItem} source={Plus}/>
        </View>
    </View>
  );
};
export default Activities;
