import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import WeatherDetailScreen from "./weatherdetail";
import axios from 'axios';

function CityNameScreen(props) {
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(false);

  const _getWeatherInfo = async () => { // Corrected "asyn" to "async"
    try {
      if (!cityName || cityName.length < 3) { // Fixed condition for city name validation
        alert("Please enter a valid city");
        return;
      }
      setLoading(true);
      const appId = '09ec09daa09200b50a99a0c5486608ea';
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${appId}`; // Used backticks for string interpolation

      const response = await axios.get(url);
      //alert(JSON.stringify(response.data));
      setLoading(false);
      props.navigation.navigate("WeatherDetails", { data: response.data });
    } catch (e) {
      alert(e?.response?.data?.message); // Fixed the error alert
      setLoading(false);
      console.log(e);
    }
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View>
        <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold', paddingLeft: 60 }}>Weather App</Text>
        <View style={{
          width: '90%',
          height: 48,
          borderWidth: 1,
          borderColor: 'white',
          marginVertical: 12,
          flexDirection: 'row',
          paddingLeft: 12,
          alignItems: 'center',
          borderRadius: 10
        }}>
          <TextInput
            value={cityName}
            onChangeText={value => setCityName(value)}
            placeholder='Write your city name here ...'
            placeholderTextColor='white'
            style={{
              flex: 1,
              paddingLeft: 10,
              color: 'white'
            }}
          />
        </View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{cityName}</Text>

        <TouchableOpacity
          onPress={_getWeatherInfo}
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: 55,
            marginTop: 12
          }}
        >
          {loading ? <ActivityIndicator /> : <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Check</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CityNameScreen;