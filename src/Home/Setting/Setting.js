import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import StatusBoth from './ComponentSetting/StatusBoth';
import {styleDevice} from '../StyleHome/StyleDevice';
import {styleSetting} from './StyleSetting/StyleSetting';
import {StatusStuck} from './ComponentSetting/StatusStuck';
import StatusNotRight from './ComponentSetting/StatusNotRight';
import StatusRight from './ComponentSetting/StatusRight';

const Setting = React.memo(function Setting({navigation}) {
  return (
    <ScrollView style={styleSetting.container}>
        <StatusBar backgroundColor="#11CA71" />
      {/*header*/}
      <View style={styleSetting.ctnHeader}>
        <TouchableOpacity onPress={() => navigation.dismiss()}>
          <Feather name={'arrow-left'} style={styleSetting.iconBack} />
        </TouchableOpacity>

        <Text style={styleSetting.txtSet}>Cài đặt</Text>
      </View>
      <View style={styleSetting.ctnStatus}>
        {/*inforDV*/}
        <View style={styleSetting.status}>
          <StatusBoth
            nameIcon={'device'}
            nameStatus={'Tên thiết bị'}
            detailStatus={'Máy cho tôm ăn 1'}
          />
          <View style={styleSetting.line1} />
          <StatusBoth
            nameIcon={'water-wifi'}
            nameStatus={'Bán kính cho ăn'}
            detailStatus={'2 - 2.5m'}
            onPress={() => navigation.navigate('RadiusScreen')}
          />
        </View>
        <View style={styleSetting.cache} />

        {/*switch*/}
        <View>
          <StatusStuck iconName={'warn'} nameStatus={'Thông báo khi bị kẹt'} />
          <View style={styleSetting.line2} />
          <StatusStuck
            iconName={'re-cycle'}
            nameStatus={'Tắt khi bị kẹt 8 lần liên tục'}
          />
        </View>

        {/*InforNet  */}
        <View style={{height: 44, backgroundColor: '#F4F6FB'}}>
          <Text
            style={{
              marginTop: 12,
              marginLeft: 24,
              marginBottom: 13,
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            THÔNG TIN MẠNG
          </Text>
        </View>

        <View
          style={{
            marginLeft: 24,
            marginRight: 15,
            marginTop: 11,
            marginBottom: 12,
          }}>
          <StatusNotRight
            nameIcon={'connect'}
            nameStatus={'Loại kết nối'}
            detailStatus={'3G'}
          />
          <View style={styleDevice.line} />
          <StatusNotRight
            nameIcon={'device-wifi'}
            nameStatus={'Tên mạng'}
            detailStatus={'Viettel'}
          />
          <View style={styleDevice.line} />
          <StatusNotRight
            nameIcon={'check-box'}
            nameStatus={'Chất lượng'}
            detailStatus={'Tốt'}
          />
          <View style={styleDevice.line} />
          <StatusNotRight
            nameIcon={'imei'}
            nameStatus={'Imei'}
            detailStatus={'234 234 233 122'}
          />
        </View>

        <View style={styleSetting.cache} />

        <View style={{marginLeft: 24, marginRight: 15,marginTop:9.5}}>
          <StatusRight nameIcon={'update'} nameStatus={'Cập nhật phần mềm'} />
          <View style={styleDevice.line} />
            <StatusRight nameIcon={'another-text'} nameStatus={'Thông tin khác'} />
        </View>

          <View style={{height: 44, backgroundColor: '#F4F6FB',justifyContent:'center',
              alignItems:'center',marginBottom:15}}>
              <Text style={{fontSize:18,color:'#FF2E00',fontFamily:'Roboto'}}>
                  XÓA THIẾT BỊ
              </Text>
          </View>
      </View>
    </ScrollView>
  );
});

export default Setting;
