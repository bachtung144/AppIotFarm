import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Feather from 'react-native-vector-icons/Feather';
import {styleRadius} from './StyleSetting/StyleRadius';

const CusMakerLeft = () => {
  return (
    <View
      style={{
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#F0F0F0',
        marginTop: 7,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 5,
      }}
    />
  );
};
const CusMakerRight = () => {
  return (
    <View
      style={{
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#F0F0F0',
        marginTop: 7,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 5,
      }}
    />
  );
};
export default function RadiusSetting({navigation}) {
  return (
    <View style={styleRadius.ctn}>
      <View style={styleRadius.ctnHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name={'arrow-left'} style={styleRadius.iconBack} />
        </TouchableOpacity>
        <Text style={styleRadius.title}>Bán kính cho ăn</Text>
      </View>

      <View style={styleRadius.ctnBody}>
        <View style={{marginTop: 184}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontFamily: 'Roboto', fontSize: 14}}>
              Bán kính cho ăn là khoảng văng của thức ăn
            </Text>
            <Text style={{fontFamily: 'Roboto', fontSize: 14}}>
              gần nhất và xa nhất khi cho tôm ăn
            </Text>
          </View>
          <View style={{marginTop: 55}}>
            <MultiSlider
              trackStyle={{height: 10, borderRadius: 20}}
              selectedStyle={{backgroundColor: '#94D213'}}
              unselectedStyle={{backgroundColor: '#F4F6FB'}}
              isMarkersSeparated={true}
              customMarkerLeft={() => <CusMakerLeft />}
              customMarkerRight={() => <CusMakerRight />}
              values={[30, 40]}
              min={10}
              max={100}
            />
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: 'bold',
                  fontFamily: 'Roboto',
                  fontSize: 16,
                }}>
                2.5m
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Roboto',
                  fontSize: 16,
                }}>
                3m
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#47AA12',
              height: 44.27,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 80,
              marginTop: 120,
            }}
            onPress={() => navigation.goBack()}>
            <Text style={{fontFamily: 'Roboto', fontSize: 18, color: '#FFF'}}>
              LƯU
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
