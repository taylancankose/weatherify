import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export default StyleSheet.create({
  weather_container: {
    marginTop: 20,
  },
  country_city: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    color: '#ABB6C2',
  },
  header: {
    fontFamily: 'SourceSansPro-Medium',
    fontSize: 24,
    textAlign: 'center',
    color: colors.darkBlue,
  },
  img: {
    height: 150,
    width: 150,
  },
  current_weather_container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  weather: {
    fontFamily: 'SourceSansPro-Black',
    fontSize: 30,
    color: colors.darkBlue,
  },
  degree: {
    fontSize: 20,
    color: colors.gray,
  },
  weather_condition: {
    color: colors.gray,
    fontFamily: 'SourceSansPro-Regular',
  },
  icon_container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
