import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ForecastElement from '../ForecastElement/ForecastElement';
import styles from './ForecastCard.style';

function ForecastCard() {
  const forecast = useSelector(state => state.weatherify.forecast);
  const renderForecast = ({item}) => <ForecastElement item={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forecast</Text>
      <FlatList
        data={forecast?.list}
        renderItem={renderForecast}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default ForecastCard;
