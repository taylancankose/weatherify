import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_container: {
    backgroundColor: colors.purple,
    height: 60,
    width: 60,
    borderRadius: 20,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  info: {
    marginTop: 3,
    fontFamily: 'SourceSansPro-Regular',
  },
});
