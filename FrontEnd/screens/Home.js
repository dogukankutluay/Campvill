import React from "react";
import {View, Text, ImageBackground,ScrollView,Image, Touchable, TouchableOpacity} from 'react-native';
import homeStyle from "../styles/screen/home";
import test from "../assets/img/onboardingPage/2.png";
import nokta from "../assets/img/onboardingPage/Dot.png";
const Home = () => {
  return (
    <View style={homeStyle.container}>
       <ScrollView style={homeStyle.story}
       horizontal={true}
       showsHorizontalScrollIndicator={false}>
          <ImageBackground style={homeStyle.resim} source={test}>
            <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
          <ImageBackground style={homeStyle.resim} source={test}>
          <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
          <ImageBackground style={homeStyle.resim} source={test}>
          <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
          <ImageBackground style={homeStyle.resim} source={test}>
          <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
          <ImageBackground style={homeStyle.resim} source={test}>
          <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
          <ImageBackground style={homeStyle.resim} source={test}>
          <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
          <ImageBackground style={homeStyle.resim} source={test}>
          <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
          <ImageBackground style={homeStyle.resim} source={test}>
          <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
          <ImageBackground style={homeStyle.resim} source={test}>
          <View><Text style={homeStyle.nickname}>NickName</Text></View>
          </ImageBackground>
       </ScrollView>
       <ScrollView showsVerticalScrollIndicator={false}>
       <View style={homeStyle.shareContainer}>
          <View style={homeStyle.share}>
          <Image style={homeStyle.miniResim} source={test}></Image>
          <Text>Your NickName</Text>
          <TouchableOpacity style={{position:'absolute',right:0}}>
          <Image source={nokta} style={{
            width:30,height:30
            }}></Image>
            </TouchableOpacity>
          </View>
          <Image source={test} style={{width:'100%',height:400}}></Image>
       </View>
       <View style={homeStyle.shareContainer}>
          <View style={homeStyle.share}>
          <Image style={homeStyle.miniResim} source={test}></Image>
          <Text>Your NickName</Text>
          <TouchableOpacity style={{position:'absolute',right:0}}>
          <Image source={nokta} style={{
            width:30,height:30
            }}></Image>
            </TouchableOpacity>
          </View>
          <Image source={test} style={{width:'100%',height:400}}></Image>
       </View>
       <View style={homeStyle.shareContainer}>
          <View style={homeStyle.share}>
          <Image style={homeStyle.miniResim} source={test}></Image>
          <Text>Your NickName</Text>
          <TouchableOpacity style={{position:'absolute',right:0}}>
          <Image source={nokta} style={{
            width:30,height:30
            }}></Image>
            </TouchableOpacity>
          </View>
          <Image source={test} style={{width:'100%',height:400}}></Image>
       </View>
       <View style={homeStyle.shareContainer}>
          <View style={homeStyle.share}>
          <Image style={homeStyle.miniResim} source={test}></Image>
          <Text>Your NickName</Text>
          <TouchableOpacity style={{position:'absolute',right:0}}>
          <Image source={nokta} style={{
            width:30,height:30
            }}></Image>
            </TouchableOpacity>
          </View>
          <Image source={test} style={{width:'100%',height:400}}></Image>
       </View>
       <View style={homeStyle.shareContainer}>
          <View style={homeStyle.share}>
          <Image style={homeStyle.miniResim} source={test}></Image>
          <Text>Your NickName</Text>
          <TouchableOpacity style={{position:'absolute',right:0}}>
          <Image source={nokta} style={{
            width:30,height:30
            }}></Image>
            </TouchableOpacity>
          </View>
          <Image source={test} style={{width:'100%',height:400}}></Image>
       </View>
       </ScrollView>
    </View>
  );
};
export default Home;
