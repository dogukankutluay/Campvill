import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

//Asetts
import ChevronLeft from '../assets/img/chevron-left.png';

//Components
import {CustomButton, CustomTextInput} from '../components';
//Styles
import {addTripStyle, addTeamMatesStyle} from '../styles/screen';

export default function AddTeamMates({navigation}) {
  const [personID, setPersonID] = useState('');
  return (
    <View style={addTripStyle.container}>
      <View style={addTripStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={addTripStyle.backBtn}>
          <Image source={ChevronLeft} />
        </TouchableOpacity>
        <Text style={addTripStyle.headerText}>Add Teammate</Text>
      </View>
      <View style={addTeamMatesStyle.contentContainer}>
        <Text style={addTeamMatesStyle.desc}>
          Say your teammate to log-in first on Camping App. then your teammate
          will automatically recieve the ID. Then put the ID here and he will
          recieve the notification of invite. When he accept the request he’ll
          automatically add on to your team.
        </Text>
        <CustomTextInput
          labelText={'ID'}
          onChangeText={value => setPersonID(value)}
        />
        <CustomButton
          btnClick={() => navigation.navigate('AddTrip', {userId: personID})}
          btnText={'Sent Request'}
          style={addTeamMatesStyle.btn}
        />
      </View>
    </View>
  );
}
