import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styleDevice} from '../../StyleHome/StyleDevice';
import {IconCustom} from '../../../../IconCustom';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function StatusBoth({
  nameStatus,
  detailStatus,
  nameIcon,
  onPress,
}) {
  return (
    <View style={{marginTop: 16, marginBottom: 16}}>
      <TouchableOpacity style={styleDevice.flexRow} onPress={onPress}>
        <View style={styleDevice.ctnStatusLeft}>
          <IconCustom
            name={nameIcon}
            style={{color: '#707378', fontSize: 18, marginTop: 3}}
          />
          <Text style={styleDevice.txtStatus}>{nameStatus}</Text>
        </View>
        <View style={styleDevice.flexRow}>
          <Text style={styleDevice.txtStatusRight}>{detailStatus} </Text>
            <AntDesign name={'right'} style={styleDevice.iconRight} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
