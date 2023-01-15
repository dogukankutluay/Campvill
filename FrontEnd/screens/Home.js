import React from "react";
import {View,ScrollView} from 'react-native';
import homeStyle from "../styles/screen/home";
import {HomeItem,HomeShareItem} from "../components/HomeItem";
const Home = () => {
  return (
    <View style={homeStyle.container}>
       <ScrollView style={homeStyle.story}
       horizontal={true}
       showsHorizontalScrollIndicator={false}>
          <HomeShareItem/>
          <HomeShareItem/>
          <HomeShareItem/>
          <HomeShareItem/>
          <HomeShareItem/>
          <HomeShareItem/>
          <HomeShareItem/>
       </ScrollView>
       <ScrollView showsVerticalScrollIndicator={false}>
       <HomeItem/>
       <HomeItem/>
       <HomeItem/>
       <HomeItem/>
       </ScrollView>
       </View>
  );
};
export default Home;
