import {Text, View,State} from 'react-native';
import React from 'react';
//Library
import OTPInputView from '@twotalltotems/react-native-otp-input';
//Components
import {AuthAfterContainer} from '../components';

const ConfirmOtp = ({navigation, route}) => {
  return (
    <AuthAfterContainer
      btnClick={() => navigation.navigate('NewPassword')}
      navigation={navigation}
      headerTitle="Confirm OTP"
      descText={
        <Text>
          Please confirm your 4 digit OTP. which is sent on this number{' '}
          {route.params.email} Change number.
        </Text>
      }>
      <View>
        <OTPInputView
          style={{
            width: 200,
            height: 80,
          }}
          pinCount={4}
          codeInputFieldStyle={{
            fontWeight: '400',
            fontSize: 22,
            color: '#000000',
            borderWidth: 0,
            borderBottomWidth: 1,
          }}
          codeInputHighlightStyle={{
            borderColor: "#03DAC6",
          }}
        />
      </View>
    </AuthAfterContainer>
  );
};
export default ConfirmOtp;
// const ForgetPassword = () => {
//   return (
//     <View>
//       <Text>ForgetPassword</Text>
//     </View>
//   );
// };
// export default ForgetPassword;
