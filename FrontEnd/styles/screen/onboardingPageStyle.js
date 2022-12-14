import {StyleSheet} from 'react-native';
const onboardingPageStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  swipeContainer: {
    flex: 1,
    marginTop:50,
    alignItems: 'center',
    padding: 20,
  },
  swipe: {},
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {},
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 32,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 8,

  },
  desc: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#3F3F46',
  },
  swipeButton: {
    marginTop: 320,
    marginHorizontal: 15,
  },
  swipeDot: {
    marginHorizontal: 5,
    marginBottom: 85
  },
});
export default onboardingPageStyle;
