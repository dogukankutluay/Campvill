import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

//Asetts
import ChevronLeft from '../assets/img/chevron-left.png';
import Plus from '../assets/img/plus.png';

//Components
import {CustomTextInput, CustomButton} from '../components';

//Styles
import {addTripStyle} from '../styles/screen';

export default function AddTrip({navigation, route}) {
  // STATIC DATA
  const users = [
    {
      id: '12345',
      image: 'https://source.unsplash.com/600x600/?person',
    },
    {
      id: '34534',
      image: 'https://source.unsplash.com/600x600/?person',
    },
    {
      id: '65756',
      image: 'https://source.unsplash.com/600x600/?person',
    },
  ];

  return (
    <View style={addTripStyle.container}>
      <View style={addTripStyle.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={addTripStyle.backBtn}>
          <Image source={ChevronLeft} />
        </TouchableOpacity>
        <Text style={addTripStyle.headerText}>Add New Trip</Text>
      </View>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <CustomTextInput labelText={'Trip Name'} />
      <CustomTextInput
        labelText={'Location'}
        value={route.params?.data?.title || ''}
      />
      <CustomButton
        btnClick={() => navigation.navigate('LocationSearch')}
        btnText={'View Locations'}
        type="light"
        style={{width: 150, marginLeft: 40, paddingHorizontal: 15}}
      />

      <View style={addTripStyle.teamMatesContainer}>
        <Text style={addTripStyle.teamMatesLabel}>Teammates</Text>
        {/* <View style={addTripStyle.teamMatesListContainer}>
          <Image source={Plus} />
        </View> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={addTripStyle.personList}>
          {users.map((user, index) => (
            <Image
              style={addTripStyle.personImage}
              key={index}
              source={{uri: user.image}}
            />
          ))}
        </ScrollView>
        <CustomButton
          btnClick={() => navigation.navigate('AddTeamMates')}
          btnText={'Add New Teammates'}
          type="light"
          style={{paddingHorizontal: 15, width: 180}}
        />
      </View>
    </View>
  );
}
