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
import {teamMatesProfile} from '../styles/screen';
//Image Import
import ChevronLeftIcon from '../assets/img/chevron-left.png';
import TeamProfile from '../assets/img/teamProfile.png';

const TeamMatesProfile = ({navigation, title}) => {
  return (
    <ScrollView
      style={teamMatesProfile.container}
      contentContainerStyle={{alignItems: 'center'}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <View style={teamMatesProfile.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={teamMatesProfile.leftIcon}>
          <Image source={ChevronLeftIcon} />
        </TouchableOpacity>

        <Text style={teamMatesProfile.headerText}>TeamMates</Text>
      </View>
      <View style={teamMatesProfile.content}>
        <Image style={teamMatesProfile.image} source={TeamProfile} />
        <Text style={teamMatesProfile.title}>Chandler Hellow</Text>
        <Text style={teamMatesProfile.desc}>
          I’m a Chef and I assist in prep work, such as chopping vegetables, but
          more often will be involved in cooking specialty dishes. Chooses
          ingredients and designs a menu based on the seasonal availability of
          food items. Creates unique dishes that inspire guests to come back
          again and again to see what is new in the restaurant.
        </Text>
      </View>
    </ScrollView>
  );
};
export default TeamMatesProfile;
