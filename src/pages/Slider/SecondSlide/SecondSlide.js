import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './SecondSlide.style';
import {useDispatch, useSelector} from 'react-redux';
import {setCity} from '../../../redux/weatherSlice';
import axios from 'axios';
import Config from 'react-native-config';

function SecondSlide() {
  const coords = useSelector(state => state.weatherify.coords);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getData = async (lat, lon) => {
    const res = await axios.get(
      `${Config.REVERSE_GEOCODE_API_BASE_URL}lat=${lat}&lon=${lon}&apiKey=${Config.REVERSE_GEOCODE_API_KEY}`,
    );
    const response = await res.data;
    dispatch(setCity(response.features[0].properties));
  };
  const handleNext = () => {
    getData(coords?.coords?.latitude, coords?.coords?.longitude);
    navigation.navigate('Slider', {
      screen: 'Third',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.img_container}>
          <Image
            source={require('../../../../assets/imgs/second.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>
            Let Us Know {'\n'}
            Where You Are!
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

export default SecondSlide;
