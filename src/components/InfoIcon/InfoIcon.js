import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View} from 'react-native';
import styles from './InfoIcon.style';

function InfoIcon({text, iconName, color}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <Icon style={styles.icon} name={iconName} size={30} color={color} />
      </View>
      <Text style={styles.info}>{text}</Text>
    </View>
  );
}

export default InfoIcon;
