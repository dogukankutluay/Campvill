import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import {buttonStyle} from '../styles/components';

const CustomButton = ({
  btnText,
  btnClick,
  type = 'primary',
  forgetPassShow,
  forgetPasswordOnClick,
  style = {},
}) => {
  // override
  const stylesButton = {
    primary: {...buttonStyle.btn, ...style},
    light: {...buttonStyle.lightBtnStyle, ...style},
  };
  const styleButtonText = {
    primary: {...buttonStyle.login},
    light: {...buttonStyle.lightBtnTextStyle},
  };

  return (
    <View>
      {forgetPassShow && (
        <TouchableOpacity
          onPress={forgetPasswordOnClick}
          style={buttonStyle.forgetPassword}>
          <Text style={buttonStyle.forgetPasswordText}>Forget Password</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={btnClick} style={stylesButton[type]}>
        <Text style={styleButtonText[type]}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;
