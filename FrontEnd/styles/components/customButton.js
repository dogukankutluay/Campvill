import {StyleSheet} from 'react-native';
const buttonStyle = StyleSheet.create({
  btn: {
    width: 335,
    height: 44,
    backgroundColor: '#84CC16',
    borderRadius: 15,
    marginTop: 50,
  },
  lightBtnStyle: {
    width: 335,
    height: 44,
    borderRadius: 15,
    borderColor: '#84CC16',
    borderWidth: 1,
    marginTop: 20,
  },
  lightBtnTextStyle: {
    height: 21,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#84CC16',
    marginTop: 12,
  },
  login: {
    marginLeft: 148.05,
    width: 41,
    height: 21,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 58,
  },
  registerDesc: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  registerBtn: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  forgetPassword: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: -26,
  },
  forgetPasswordText: {
    color: '#A1A1AA',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default buttonStyle;
