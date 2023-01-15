import React,{useState} from "react";
import {View, Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import homeStyle from "../styles/screen/home";
import test from "../assets/img/onboardingPage/2.png";
import ThreeDot from "../assets/img/onboardingPage/threeDot.png";
import WhiteHeart from "../assets/img/onboardingPage/whiteHeart.png";
import RedHeart from "../assets/img/onboardingPage/redHeart.png";
import Message from "../assets/img/onboardingPage/message.png";
import Save from "../assets/img/onboardingPage/save.png";
import BlackSave from "../assets/img/onboardingPage/blackSave.png";
import Send from "../assets/img/onboardingPage/send.png";
const HomeItem = () => {
    const [countHeart, setCountHeart] = useState(1);
    const [countSave, setCountSave] = useState(1);
  return (
    <View style={homeStyle.container}>
       <View style={homeStyle.shareContainer}>
          <View style={homeStyle.share}>
          <Image style={homeStyle.miniResim} source={test}></Image>
          <Text style={homeStyle.postName}>Your NickName</Text>
          <TouchableOpacity style={homeStyle.touchRight}>
          <Image source={ThreeDot} style={homeStyle.save}></Image>
            </TouchableOpacity>
          </View>
          <Image source={test} style={homeStyle.postImage}></Image>
       </View>
       <View style={homeStyle.icons}>
        <TouchableOpacity onPress={() => setCountHeart(countHeart * -1)}>
            <Image style={homeStyle.startResim} source={WhiteHeart}></Image>
            {countHeart<0 &&(       
            <Image style={homeStyle.endResim} source={RedHeart}></Image>
            )}
       </TouchableOpacity>
       <TouchableOpacity>
            <Image style={homeStyle.startResim} source={Message}></Image>
       </TouchableOpacity>
       <TouchableOpacity>
            <Image style={homeStyle.startResim} source={Send}></Image>
       </TouchableOpacity>        
       <TouchableOpacity style={homeStyle.touchRight} onPress={() => setCountSave(countSave * -1)}>
            <Image source={Save} style={homeStyle.save}></Image>
            {countSave<0 &&(
            <Image source={BlackSave} style={homeStyle.blackSave}></Image>
            )}
        </TouchableOpacity>
       </View>
       </View>
  );
};
const HomeShareItem = () => {
    return (
      <View style={homeStyle.sharecontainer}>
        <ImageBackground style={homeStyle.resim} source={test}>
            <View>
                <Text style={homeStyle.nickname}>NickName</Text>
            </View>
          </ImageBackground>
         </View>
    );
  };
  export {HomeItem, HomeShareItem};