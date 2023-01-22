import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import {
  StartPage,
  Onboarding,
  Login,
  SignUp,
  ForgetPassword,
  ConfirmOtp,
  NewPassword,
  SuccessFull,
  AddTrip,
  LocationSearch,
  LocationView,
  AddTeamMates,
  Activities,
  Home,
  Prepare,
  TeamMatesProfile,
  TeamMates,
} from './screens';
// Stack

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TeamMates"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="SuccessFull" component={SuccessFull} />
        <Stack.Screen name="AddTrip" component={AddTrip} />
        <Stack.Screen name="LocationSearch" component={LocationSearch} />
        <Stack.Screen name="LocationView" component={LocationView} />
        <Stack.Screen name="AddTeamMates" component={AddTeamMates} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Prepare" component={Prepare} />
        <Stack.Screen name="TeamMatesProfile" component={TeamMatesProfile} />
        <Stack.Screen name="TeamMates" component={TeamMates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
