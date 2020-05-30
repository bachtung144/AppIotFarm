import React,{ useState, useEffect } from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import Logo from '../assets/picture/Splash/LogoFull.png';

function Splash({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Auth')
        }, 2500)
    });
  return (
    <View
      style={{
        backgroundColor: '#47AA12',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StatusBar  backgroundColor={'#47AA12'}/>
      <View
        style={{
          position: 'absolute',
          width: 320,
          height: 370,
          borderRadius: 200,
          // left: -100,
          top: 50,
          backgroundColor: '#91C329',
          opacity: 0.5,
          transform: [{rotate: '-20deg'}, {scaleX: 1.5}],
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Logo} style={{width: 200, height: 200}} />
      </View>
    </View>
  );
}

export default Splash;
