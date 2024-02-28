import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function WeatherDetailScreen(props) {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    //Fetch temperature data when the component mounts
    //alert(JSON.stringify(props.route.params.data.name))
    fetchTemperatureData(props.route.params.data.name);
  }, []);

  const fetchTemperatureData = async (city) => {
    try {
      const apiKey = '09ec09daa09200b50a99a0c5486608ea';
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
     // alert(JSON.stringify(data))
      if (data.main && data.main.temp) {
        setTemperature(data.main.temp);
      } else {
        console.error('Temperature data not available in the response.');
      }
    } catch (error) {
      console.error('Error fetching temperature data: ', error);
    }
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
    }}>
      <Text style={{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 12,
      }}>
        {props.route.params.city}
      </Text>

      <View style={{
        width: '90%',
        height: 200,
        borderRadius: 15,
        borderColor: 'white',
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
        <MaterialCommunityIcons name="weather-cloudy" size={150} color="black" />

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {temperature !== null ? (
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 40 }}>
              {temperature}°C
            </Text>
          ) : (
            <ActivityIndicator size="large" color="black" />
          )}
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>
            Sunny
          </Text>
        </View>
      </View>
    </View>
  );
}

export default WeatherDetailScreen;