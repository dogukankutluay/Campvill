import {StyleSheet} from 'react-native';

const locationViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    marginLeft: 20,
    marginBottom: 32,
  },
  textTitle: {
    color: 'white',
    height: 32,
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 32,
  },

  textDecs: {
    color: 'white',
    height: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },

  textDecs2: {
    color: '#D4D4D8',
    width: 335,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  btn: {
    marginBottom: -15,
    marginTop: 24,
  },
  chevronLeftIcon: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: 'absolute',
    top: 68,
    left: 20,
    width: 38,
    height: 37,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default locationViewStyle;
