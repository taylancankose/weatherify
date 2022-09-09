import React from 'react';
import {SafeAreaView} from 'react-native';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstSlide from './pages/Slider/FirstSlide/FirstSlide';
import SecondSlide from './pages/Slider/SecondSlide/SecondSlide';
import ThirdSlide from './pages/Slider/ThirdSlide/ThirdSlide';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function Router() {
  const Slider = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="First" component={FirstSlide} />
        <Stack.Screen name="Second" component={SecondSlide} />
        <Stack.Screen name="Third" component={ThirdSlide} />
      </Stack.Navigator>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Slider" component={Slider} />
          <Stack.Screen name="Weather" component={WeatherPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Router;
