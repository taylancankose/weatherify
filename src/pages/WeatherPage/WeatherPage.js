import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import CityCard from '../../components/CityCard/CityCard';
import ForecastCard from '../../components/ForecastCard/ForecastCard';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import styles from './WeatherPage.style';
import {
  getWeatherData,
  getWeatherForecast,
  setCity,
} from '../../redux/weatherSlice';
import generateRandomCoords from '../../utils/generateRandomCoords';
import Config from 'react-native-config';

function WeatherPage() {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const city = useSelector(state => state.weatherify.city);

  const getData = async () => {
    const res = await axios.get(
      `${Config.REVERSE_GEOCODE_API_BASE_URL}lat=${generateRandomCoords(
        -180,
        180,
        6,
      )}&lon=${generateRandomCoords(-90, 90, 6)}&apiKey=${
        Config.REVERSE_GEOCODE_API_KEY
      }`,
    );
    const response = await res.data;
    dispatch(setCity(response.features[0].properties));
  };
  const pullMe = () => {
    setRefresh(true);
    getData();
    setTimeout(() => {
      setRefresh(false);
    }, 4000);
    dispatch(getWeatherData(city.country));
    dispatch(getWeatherForecast(city.country));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }>
        <CityCard />
        <WeatherCard />
        <ForecastCard />
      </ScrollView>
    </View>
  );
}

export default WeatherPage;
