import React from 'react'
import {View, Text, TouchableOpacity,Dimensions} from 'react-native';
import {
    WheelPicker,
    TimePicker,
} from "react-native-wheel-picker-android";
import Feather from 'react-native-vector-icons/Feather';
import StatusBoth from './ComponentSetting/StatusBoth';
import StatusNotRight from './ComponentSetting/StatusNotRight';
const screenWidth = Dimensions.get('window').width;
const wheelPickerData1 = [
    '0','1','2','3','4','5','6','7','8','9'
];
const wheelPickerData2 = [
    '.0','.1','.2','.3','.4','.5','.6','.7','.8','.9'
];const wheelPickerData3 = [
    'kg/ giờ'
];

const SpeedFeed = React.memo(function SpeedFeed({navigation}) {
    return(
        <View style={{flex:1,backgroundColor:'#11CA71'}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name={'arrow-left'} style={{fontSize: 24,
                        color: '#FFF',
                        marginLeft:28.21}} />
                </TouchableOpacity>
                <Text style={{fontSize:20,fontFamily:'Roboto',
                    fontWeight:'bold',color:'#FFF',marginLeft:65}}>Tốc độ cho ăn</Text>
            </View>

            <View style={{
                top: 11,
                backgroundColor: '#FFF',
                height:'100%',
                borderTopRightRadius:35,
                borderTopLeftRadius:35,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,
                elevation: 13,
            }}>
                    <View style={{
                        flexDirection:'row',marginLeft:24,marginRight:24,marginTop:50}}>
                        <WheelPicker
                        data={wheelPickerData1}
                        style={{width:(screenWidth-48)/3,height: 170}}
                        indicatorWidth={0.5}
                        selectedItemTextSize={20}
                        selectedItemTextColor={'black'}
                        itemTextColor={'gray'}
                        itemTextSize={16}
                        />
                        <WheelPicker
                            data={wheelPickerData2}
                            style={{width:(screenWidth-48)/3,height: 170}}
                            indicatorWidth={0.5}
                            selectedItemTextSize={20}
                            selectedItemTextColor={'black'}
                            itemTextColor={'gray'}
                            itemTextSize={16}/>
                        <WheelPicker
                            data={wheelPickerData3}
                            style={{width:(screenWidth-48)/3,height: 170}}
                            indicatorWidth={0.5}
                            selectedItemTextSize={20}
                            selectedItemTextColor={'black'}
                            itemTextColor={'white'}
                            itemTextSize={10}/>
                    </View>
                <View style={{marginHorizontal:24}}>
                    <StatusBoth
                        nameIcon={'alarm'}
                        nameStatus={'Thời gian cho ăn 1 lượt'}
                        detailStatus={'20 giây'}
                    />
                    <View style={{backgroundColor: '#B2BDCD',
                        width: '100%',
                        height: 0.5,marginBottom:12}} />
                    <StatusNotRight nameStatus={'Thời gian nghỉ'} nameIcon={'timeline'}
                    detailStatus={'120 giây'}/>
                </View>
                <View style={{backgroundColor:'#f4f6fb',height: '100%',marginTop:12,alignItems:'center'}}>
                    <Text style={{marginTop:6
                    ,color:'#022754',fontSize:14,fontFamily:'Roboto'
                    }}>Thời gian nghỉ giữa 2 lượt phụ thuộc vào tốc độ</Text>
                    <Text style={{color:'#022754',fontSize:14,
                        fontFamily:'Roboto'}}>cho ăn và thời gian cho ăn 1 lượt</Text>
                </View>
            </View>
        </View>
    )
});

export default SpeedFeed;
