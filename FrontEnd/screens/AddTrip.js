import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

//Asetts
import ChevronLeft from '../assets/img/chevron-left.png';
import Plus from '../assets/img/plus.png';
import Circle from '../assets/img/circle.png';
//Components
import {CustomTextInput, CustomButton, AddTripDatePicker} from '../components';

//Styles
import {addTripStyle} from '../styles/screen';

export default function AddTrip({navigation, route}) {
  const [users, setUsers] = useState([]);
  // STATIC DATA
  const staticUsers = [
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
  useEffect(() => {
    const routeInUserID = route?.params?.userId;
    if (routeInUserID) {
      const findUser = staticUsers.find(user => user.id == routeInUserID);
      if (findUser) {
        setUsers([...users, findUser]);
      }
    }
  }, [route?.params?.userId]);
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 50}}
      style={addTripStyle.container}>
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
      <TouchableOpacity
          style={addTripStyle.circleBtn}>
          <Image source={Circle} />
      </TouchableOpacity>
      <CustomButton
        btnClick={() => navigation.navigate('LocationSearch')}
        btnText={'View Locations'}
        type="light"
        style={{width: 150, marginLeft: 40, paddingHorizontal: 15}}
      />

      <View style={addTripStyle.teamMatesContainer}>
        <Text style={addTripStyle.teamMatesLabel}>Teammates</Text>
        {!users.length && (
          <View style={addTripStyle.teamMatesListContainer}>
            <Image source={Plus} />
          </View>
        )}

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
      <AddTripDatePicker/>
      <View style={{alignItems: 'center'}}>
        <CustomButton btnText={'Continue'} style={{marginTop: 24}} />
      </View>
    </ScrollView>
  );
}
