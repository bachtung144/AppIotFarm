import React from 'react';
import {Image, View,TouchableOpacity} from 'react-native';
import full from '../../assets/picture/Home/full.png';
import {IconCustom} from '../../IconCustom';
import {styleDevice} from './StyleHome/StyleDevice';
import StatusDevice from './ComponentHome/StatusDevice';
import NavigationService from '../../NavigationService';

export default function Device() {
  return (
    <View>
      <View style={styleDevice.ctnImage}>
        <Image source={full} />
      </View>
      <View style={styleDevice.ctnSetting}>
        <View>
          <View style={styleDevice.ctnSwitch}>
            <View style={styleDevice.ctnSwitch2} />
          </View>
        </View>
          <TouchableOpacity onPress={() => NavigationService.navigate('stackSetting')}>
              <IconCustom name={'setting'} style={styleDevice.iconSetting} />
          </TouchableOpacity>

      </View>

      {/*status*/}
      <View style={styleDevice.ctnStatus}>
        <StatusDevice
          nameIcon={'status'}
          nameStatus={'Trạng thái'}
          detailStatus={'Đang chạy (30)'}
          modalRight={true}
          onPress={() =>NavigationService.navigate('ConfigFeedScreen')}
        />

        <StatusDevice
          nameIcon={'speed'}
          nameStatus={'Tốc độ cho ăn'}
          detailStatus={'4.4 kg/ giờ'}
          onPress={() =>NavigationService.navigate('ConfigFeedScreen')}
        />

        <StatusDevice
          nameIcon={'feed'}
          nameStatus={'Chế độ cho ăn'}
          detailStatus={'Hẹn giờ'}
          onPress={() =>NavigationService.navigate('ConfigFeedScreen')}
        />

        <StatusDevice
          nameIcon={'alarm'}
          nameStatus={'Dự kiến kết thúc'}
          detailStatus={'12:30'}
        />

        <StatusDevice
          nameIcon={'ate'}
          nameStatus={'Đã cho ăn trong cữ'}
          detailStatus={'21 kg'}
        />

        <StatusDevice
          nameIcon={'calendar'}
          nameStatus={'Đã cho ăn hôm nay'}
          detailStatus={'50 kg'}
        />
      </View>
    </View>
  );
}
