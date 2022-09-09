import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export default StyleSheet.create({
  city_container: {
    margin: 20,
  },
  county: {
    fontFamily: 'SourceSansPro-Bold',
    color: colors.darkPurple,
    fontSize: 25,
    fontWeight: '700',
  },
  country_city: {
    marginTop: 3,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    color: colors.darkBlue,
  },
  date: {
    marginTop: 5,
    fontFamily: 'SourceSansPro-Medium',
    fontSize: 12,
    color: colors.gray,
  },
});
