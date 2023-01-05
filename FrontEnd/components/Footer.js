import * as React from 'react';
import { BottomNavigation,Text} from 'react-native-paper';
const HomeRoute = () => <Text>Home</Text>;

const FeedRoute = () => <Text>Feed</Text>;

const FormRoute = () => <Text>Form</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home'},
    { key: 'feed', title: 'Feed'},
    { key: 'form', title: 'Form'},
    { key: 'profile', title: 'Profile'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    feed: FeedRoute,
    form: FormRoute,
    profile:ProfileRoute,
  });

  return (
    <BottomNavigation style={{position:'relative',zIndex:-1,}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Footer;