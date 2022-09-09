import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './ThirdSlide.style';
import {useDispatch, useSelector} from 'react-redux';
import {getWeatherData, getWeatherForecast} from '../../../redux/weatherSlice';

function ThirdSlide() {
  const dispatch = useDispatch();
  const city = useSelector(state => state.weatherify.city);
  const navigation = useNavigation();
  const handleNext = () => {
    dispatch(getWeatherData(city?.city));
    dispatch(getWeatherForecast(city?.city));
    navigation.navigate('Weather');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.img_container}>
          <Image
            source={require('../../../../assets/imgs/third.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>
            Everything About The {'\n'}
            Weather At A Glance!
          </Text>
          <Text style={styles.subtitle}>
            The Aora app will accurately display {'\n'}
            current weather conditions with no time.
          </Text>
          <TouchableOpacity style={styles.btn} onPress={handleNext}>
            <Text style={styles.btn_text}>Let's Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ThirdSlide;
