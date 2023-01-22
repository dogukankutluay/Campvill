import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import home from '../assets/img/onboardingPage/Home.png';
import feed from '../assets/img/onboardingPage/Heart.png';
import form from '../assets/img/onboardingPage/Form.png';
import profile from '../assets/img/onboardingPage/Profile.png';
const HomeRoute = () => <Text>Home</Text>;

const FeedRoute = () => <Text>Feed</Text>;

const FormRoute = () => <Text>Form</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', focusedIcon: home},
    {key: 'feed', title: 'Feed', focusedIcon: feed},
    {key: 'form', title: 'Form', focusedIcon: form},
    {key: 'profile', title: 'Profile', focusedIcon: profile},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    feed: FeedRoute,
    form: FormRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      barStyle={{backgroundColor: '#84CC16'}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Footer;
