import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

function SplashScreen(props) {

  const _navigateUser = () => {
    setTimeout(() => {
      props.navigation.replace('CityName');
    }, 4000);
  }

  useEffect(_navigateUser, []); // Pass an empty array as the second argument to useEffect

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>WeatherApp</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('CityName');
        }}>
        <Text style={{ color: 'white', marginVertical: 12, fontSize: 40 }}></Text>
      </TouchableOpacity>
    </View>
  )
}

export default SplashScreen;