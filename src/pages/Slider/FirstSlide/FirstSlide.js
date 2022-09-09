import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './FirstSlide.style';
import Geolocation from '@react-native-community/geolocation';
import {setCoords} from '../../../redux/weatherSlice';
import {useDispatch} from 'react-redux';

function FirstSlide() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleNext = () => {
    getCoords();
    navigation.navigate('Slider', {
      screen: 'Second',
    });
  };
  const getCoords = () =>
    Geolocation.getCurrentPosition(
      success => {
        dispatch(setCoords(success));
      },
      e => {
        console.log(e);
      },
      {timeout: 20000},
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.img_container}>
          <Image
            source={require('../../../../assets/imgs/first.png')}
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
            <Icon name="chevron-right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FirstSlide;
