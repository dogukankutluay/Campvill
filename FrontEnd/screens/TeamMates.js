import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

//Styles Import
import {teamMates} from '../styles/screen';
//Image Import
import ChevronLeftIcon from '../assets/img/chevron-left.png';
import TeamProfile from '../assets/img/teamProfile.png';
import Square from '../assets/img/onboardingPage/Square.png';

//Component Import
import {Footer, TeamMatesItem} from '../components';

const TeamMates = ({navigation}) => {
  const teamMateItem = [
    ,
    {
      image: TeamProfile,
      name: 'Ahmet Kutluay',
    },
    {
      image: TeamProfile,
      name: 'Berkay Gençdoğan',
    },
  ];

  return (
    <ScrollView
      style={teamMates.container}
      contentContainerStyle={{alignItems: 'center'}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <View style={teamMates.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={teamMates.leftIcon}>
          <Image source={Square} />
        </TouchableOpacity>
        <Text style={teamMates.headerText}>TeamMate</Text>
      </View>
      <ScrollView>
        {teamMateItem.map((item, index) => (
          <TeamMatesItem name={item.name} image={item.image} key={index} />
        ))}
      </ScrollView>
      <Footer />
    </ScrollView>
  );
};
export default TeamMates;
