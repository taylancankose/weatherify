import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export default StyleSheet.create({
  container: {
    borderColor: colors.purple,
    borderWidth: 2,
    flex: 1,
    alignItems: 'center',
    height: 150,
    justifyContent: 'center',
    width: 80,
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  img: {
    height: 50,
    width: 50,
  },
  date: {
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
  },
  temp: {
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 18,
  },
});
