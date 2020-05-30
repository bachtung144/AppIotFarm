import React from 'react'
import {View, Text, TouchableOpacity,Dimensions} from 'react-native';
import {
    WheelPicker,
    TimePicker,
} from "react-native-wheel-picker-android";
import Feather from 'react-native-vector-icons/Feather';
import StatusBoth from './ComponentSetting/StatusBoth';
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
                        style={{width:(screenWidth-48)/3,height: 250}}
                        indicatorWidth={0.5}
                        selectedItemTextSize={20}
                        selectedItemTextColor={'black'}
                        itemTextColor={'gray'}
                        itemTextSize={16}
                        />
                        <WheelPicker
                            data={wheelPickerData2}
                            style={{width:(screenWidth-48)/3,height: 250}}
                            indicatorWidth={0.5}
                            selectedItemTextSize={20}
                            selectedItemTextColor={'black'}
                            itemTextColor={'gray'}
                            itemTextSize={16}/>
                        <WheelPicker
                            data={wheelPickerData3}
                            style={{width:(screenWidth-48)/3,height: 250}}
                            indicatorWidth={0.5}
                            selectedItemTextSize={20}
                            selectedItemTextColor={'black'}
                            itemTextColor={'white'}
                            itemTextSize={10}/>
                    </View>
                <StatusBoth
                    nameIcon={'size'}
                    nameStatus={'Cỡ thức ăn'}
                    detailStatus={4}
                />
            </View>
        </View>
    )
});

export default SpeedFeed;
