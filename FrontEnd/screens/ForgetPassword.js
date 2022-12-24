import {Text, View} from 'react-native';
import React, {useState} from 'react';

//Components
import {AuthAfterContainer, CustomTextInput} from '../components';
const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <AuthAfterContainer
      navigation={navigation}
      btnClick={() => navigation.navigate('ConfirmOtp', {email})}
      headerTitle="Forget Password"
      descText="To get your new password you need to put your phone number down below.
    and we will send you an OTP on that number for confirmation.">
      <CustomTextInput
        labelText={'Email'}
        onChangeText={value => setEmail(value)}
      />
    </AuthAfterContainer>
  );
};
export default ForgetPassword;
// const ForgetPassword = () => {
//   return (
//     <View>
//       <Text>ForgetPassword</Text>
//     </View>
//   );
// };
// export default ForgetPassword;
