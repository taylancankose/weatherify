import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../assets/colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    flex: 1,
    margin: 20,
  },
  img_container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 275,
    width: Dimensions.get('window').width / 1.5,
  },
  text_container: {
    flex: 0.5,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: 'SourceSansPro-Black',
    color: colors.darkBlue,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'SourceSansPro-Medium',
    color: colors.gray,
    textAlign: 'center',
  },
  btn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: colors.darkPurple,
    borderRadius: 50,
    justifyContent: 'center',

    elevation: 5,
  },
});
