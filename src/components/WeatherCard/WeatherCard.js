import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../../assets/colors/colors';
import InfoIcon from '../InfoIcon/InfoIcon';
import styles from './WeatherCard.style';

function WeatherCard() {
  const weatherData = useSelector(state => state.weatherify.weatherData);

  return (
    <View style={styles.weather_container}>
      <Text style={styles.header}>Today</Text>
      <View style={styles.current_weather_container}>
        <Image
          style={styles.img}
          source={{
            uri: `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`,
          }}
        />
        <View style={styles.current_weather_text_container}>
          <Text style={styles.weather}>
            {(weatherData?.main?.temp - 273).toFixed(0)}
            <Text style={styles.degree}>°C</Text>
          </Text>
          <Text style={styles.weather_condition}>
            {weatherData?.weather[0]?.main}
          </Text>
        </View>
      </View>
      <View style={styles.icon_container}>
        <InfoIcon
          color={colors.darkPurple}
          text={`${weatherData?.wind?.speed} km/h`}
          iconName="weather-windy"
        />
        <InfoIcon
          color={colors.darkPurple}
          text={`${weatherData?.main?.pressure} hPa`}
          iconName="car-brake-low-pressure"
        />
        <InfoIcon
          color={colors.darkPurple}
          text={`${weatherData?.main?.humidity} %`}
          iconName="weather-rainy"
        />
      </View>
    </View>
  );
}

export default WeatherCard;
