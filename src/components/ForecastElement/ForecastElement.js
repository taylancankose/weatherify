import React from 'react';
import {Text, View, Image} from 'react-native';
import timeConverter from '../../utils/timeConverter';
import styles from './ForecastElement.style';

function ForecastElement({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{timeConverter(item.dt)}</Text>
      <Image
        style={styles.img}
        source={{
          uri: `https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@4x.png`,
        }}
      />
      <Text style={styles.temp}>{(item.main.temp - 273).toFixed(0)}°C</Text>
    </View>
  );
}

export default ForecastElement;
