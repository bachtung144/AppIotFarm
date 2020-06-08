import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
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
          alignItems:'center'
      }}
    />
  );
};
const ConfigFeedOne = React.memo(function ConfigFeedOne() {
  return (
    <View style={{flex: 1, backgroundColor: '#11CA71'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name={'closecircleo'}
            style={{fontSize: 24, color: '#FFF', marginLeft: 23, marginTop: 2}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: '#FFF',
            marginLeft: 65,
          }}>
          Quản lý cữ ăn
        </Text>
      </View>
      <View
        style={{
          top: 11,
          backgroundColor: '#FFF',
          height: '100%',
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          elevation: 13,
        }}>
        <View
          style={{
            marginTop: 169,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#022754', fontSize: 14, fontFamily: 'Roboto'}}>
            Chọn thời gian bắt đầu và thời gian kết thúc
          </Text>
          <Text style={{color: '#022754', fontSize: 14, fontFamily: 'Roboto'}}>
            của cữ ăn
          </Text>
        </View>
        <View style={{marginTop: 50, alignItems: 'center',justifyContent:'center'}}>
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
          <View style={{flexDirection: 'row',marginLeft:24,marginRight:24}}>
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
              style={{fontWeight: 'bold', fontFamily: 'Roboto', fontSize: 16}}>
              3m
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{color: '#022754', fontFamily: 'Roboto', fontSize: 14}}>
            Thời gian cho ăn: 2 tiếng 15 phút
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 44,
            marginTop: 50,
            width: '100%',
            backgroundColor: '#F4F6FB',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FF2E00', fontSize: 18, fontFamily: 'Roboto'}}>
            XÓA CỮ ĂN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
export default ConfigFeedOne;
