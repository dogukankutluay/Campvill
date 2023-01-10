import React from "react";
import {View, Text, Image,ScrollView} from 'react-native';
import homeStyle from "../styles/screen/home";
import test from "../assets/img/onboardingPage/2.png";

const Home = () => {
  return (
    <View style={homeStyle.container}>
      <Text>buraya bir şeyler gelebilir</Text>
       <ScrollView style={homeStyle.story}
       horizontal={true}
       showsHorizontalScrollIndicator={false}>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
          <Image style={homeStyle.resim} source={test}></Image>
       </ScrollView>
    </View>
  );
};
export default Home;
