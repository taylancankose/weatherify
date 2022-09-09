import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './CityCard.style';

function CityCard() {
  const dd = new Date(Date.now());
  const city = useSelector(state => state.weatherify.city);
  console.log(city);

  return (
    <View style={styles.city_container}>
      <Text style={styles.county}>{city?.county},</Text>
      <Text style={styles.country_city}>
        <Text>{city?.city}, </Text>
        <Text>{city?.country}</Text>
      </Text>
      <Text style={styles.date}>{dd.toString()}</Text>
    </View>
  );
}

export default CityCard;
