import React from 'react';
import {Text, View} from 'react-native';
import {styleDevice} from '../../StyleHome/StyleDevice';
import {IconCustom} from '../../../../IconCustom';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function StatusRight({nameStatus, nameIcon}) {
  return (
    <View >
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <IconCustom
            name={nameIcon}
            style={{color: '#707378', fontSize: 18, marginTop: 3}}
          />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 12.8,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            {nameStatus}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <AntDesign
            name={'right'}
            style={{
              fontSize: 14,
              color: '#A9A9A9',
              marginTop: 6,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
}
