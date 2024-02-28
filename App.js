import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/Screens/splash';
import CityNameScreen from './src/Screens/cityname';
import WeatherDetailScreen from './src/Screens/weatherdetail';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const Stack = createNativeStackNavigator();

  const MainNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="CityName"
          component={CityNameScreen}
          options={{
            gestureEnabled: true, // Enable swipe back gesture
            animationEnabled: true, // Enable screen animations
          }}
        />
        <Stack.Screen
          name="WeatherDetails"
          component={WeatherDetailScreen}
          options={{
            gestureEnabled: true, // Enable swipe back gesture
            animationEnabled: true, // Enable screen animations
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App;