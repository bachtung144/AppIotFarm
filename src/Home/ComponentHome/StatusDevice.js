import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {styleDevice} from '../StyleHome/StyleDevice';
import {IconCustom} from '../../../IconCustom';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function StatusDevice({
  nameStatus,
  detailStatus,
  nameIcon,
  modalRight,onPress
}) {
  return (
    <View>
      <TouchableOpacity style={styleDevice.flexRow}
        onPress={onPress}
      >
        <View style={styleDevice.ctnStatusLeft}>
          <IconCustom name={nameIcon} style={styleDevice.iconStatus} />
          <Text style={styleDevice.txtStatus}>{nameStatus}</Text>
        </View>
        <View style={styleDevice.flexRow}>
          <Text style={styleDevice.txtStatusRight}>{detailStatus} </Text>
          {modalRight !== true ? (
            <AntDesign name={'right'} style={styleDevice.iconRight} />
          ) : null}
        </View>
      </TouchableOpacity>
      <View style={styleDevice.line} />
    </View>
  );
}
