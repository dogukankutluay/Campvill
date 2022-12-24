import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Swiper from 'react-native-swiper';
// Syles
import {onboardingPageStyle} from '../styles/screen';
import {buttonStyle} from '../styles/components';
//Assets Swiper Images

//Login Button
import {CustomButton} from '../components';

//Dots
import ActiveDot from '../assets/img/onboardingPage/ActiveDot.png';
import Dot from '../assets/img/onboardingPage/Dot.png';
//Buttons
import NextButton from '../assets/img/onboardingPage/NextButton.png';
import PrevButton from '../assets/img/onboardingPage/PrevButton.png';

// Inline Component
import Image1 from '../assets/img/onboardingPage/1.png';
import Image2 from '../assets/img/onboardingPage/2.png';
import Image3 from '../assets/img/onboardingPage/3.png';
import Image4 from '../assets/img/onboardingPage/4.png';
const Swipe = props => {
  return (
    <View style={onboardingPageStyle.swipe}>
      <View style={onboardingPageStyle.imageWrapper}>
        <Image style={onboardingPageStyle.image} source={props.image} />
      </View>

      <Text style={onboardingPageStyle.title}>{props?.title}</Text>
      <Text style={onboardingPageStyle.desc}>{props?.desc}</Text>
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [swipeIndex, setSwipeIndex] = useState(0);
  const swipes = [
    {
      image: Image1,
      title: 'Your Tasks',
      desc: 'I always reminds you about your planned activities. which is always my priority and your importance.',
    },
    {
      image: Image2,
      title: 'Capture Your Memories',
      desc: 'We know that catching photos are necessary in your trip. that’s why we have built-in camera and gallery feature.',
    },
    {
      image: Image3,
      title: 'Track Your Fitness',
      desc: 'Fitness is one of the main thing which is really inportant to your body and we track it in every second.',
    },
    {
      image: Image4,
      title: 'There Is Much More',
      desc: 'We have bunch of other cool features. which is super helpful for your next camping trip. so what are you waiting for?',
    },
  ];

  return (
    <View style={onboardingPageStyle.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <Swiper
        onIndexChanged={index => {
          setSwipeIndex(index);
        }}
        dot={<Image source={Dot} style={onboardingPageStyle.swipeDot} />}
        activeDot={
          <Image source={ActiveDot} style={onboardingPageStyle.swipeDot} />
        }
        prevButton={
          <View>
            {swipeIndex != 0 && (
              <Image
                style={onboardingPageStyle.swipeButton}
                source={PrevButton}
              />
            )}
          </View>
        }
        nextButton={
          <View>
            {swipeIndex != swipes.length - 1 && (
              <Image
                style={onboardingPageStyle.swipeButton}
                source={NextButton}
              />
            )}
          </View>
        }
        showsButtons={true}>
        {swipes.map((swipe, index) => {
          return (
            <View style={onboardingPageStyle.swipeContainer} key={index}>
              <Swipe
                image={swipe.image}
                title={swipe.title}
                desc={swipe.desc}
              />
            </View>
          );
        })}
      </Swiper>
      <View  style={buttonStyle.visibleBtn}>
                {swipeIndex == swipes.length - 1 && (
                  <>
                  <CustomButton
                      btnClick={() => {
                        navigation.navigate('Login');
                      }}
                      btnText={'Log In'}
                    />
                    <View style={buttonStyle.container}>
                      <Text style={buttonStyle.registerDesc}>
                        Don’t have an Account?
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}>
                        <Text style={buttonStyle.registerBtn}> Register</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
    </View>
  );
};
export default Onboarding;
