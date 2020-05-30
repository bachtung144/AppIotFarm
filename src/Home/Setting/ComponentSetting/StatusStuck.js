import React from 'react';
import {styleSetting} from '../StyleSetting/StyleSetting';
import {Text, View} from 'react-native';
import {IconCustom} from '../../../../IconCustom';

export function StatusStuck({iconName, nameStatus}) {
  return (
    <View style={styleSetting.ctnSwitch}>
      <View style={{marginTop: 13.5, marginBottom: 9.5}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <IconCustom name={iconName} style={styleSetting.iconWarn} />
            <Text style={styleSetting.txtStatus}>{nameStatus}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
