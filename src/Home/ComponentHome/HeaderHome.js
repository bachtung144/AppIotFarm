import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IconCustom} from '../../../IconCustom';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styleHeaderHome} from '../StyleHome/StyleHeaderHome';

export default function HeaderHome() {
  return (
    <View style={{height: 170}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={styleHeaderHome.containerLabel}>
            <Text style={styleHeaderHome.textLabel}>Trại Tôm</Text>
          </View>
          <View style={styleHeaderHome.containerDown}>
            <FontAwesome name={'caret-down'} style={styleHeaderHome.iconDown} />
          </View>
        </View>
        <IconCustom name={'circle-plus'} style={styleHeaderHome.plus} />
      </View>

      <View style={styleHeaderHome.containerHeader}>
        <Text style={styleHeaderHome.textWeather}>Thời tiết tại Cà Mau</Text>

        <View style={{flexDirection: 'row'}}>
          <View>
            <View style={styleHeaderHome.containerWT}>
              <Fontisto name={'cloudy'} style={styleHeaderHome.icWt} />
              <Text style={styleHeaderHome.txtWT}>Nhiều mây</Text>
            </View>
          </View>
          <View>
            <View style={styleHeaderHome.ctnTemp}>
              <IconCustom name={'temperature'} style={styleHeaderHome.icTemp} />
              <Text style={styleHeaderHome.txtTemp}>28 C</Text>
            </View>
          </View>
          <View>
            <View
              style={{flexDirection: 'row', marginTop: 5, paddingRight: 30}}>
              <Ionicons
                name={'ios-water'}
                style={{fontSize: 30, color: '#707378'}}
              />
              <Text style={styleHeaderHome.txtHumi}>80%</Text>
            </View>
          </View>
          <AntDesign name={'right'} style={styleHeaderHome.icExpand} />
        </View>
      </View>
    </View>
  );
}
