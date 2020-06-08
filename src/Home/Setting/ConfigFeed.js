import React,{useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styleRadius} from './StyleSetting/StyleRadius';
import {IconCustom} from '../../../IconCustom';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import StatusBoth from './ComponentSetting/StatusBoth';

const ConfigFeed = React.memo(function ConfigFeed({navigation}) {
    const [type,useType] = useState('Liên tục');
    return(
        <View style={{flex:1,backgroundColor:'#11CA71'}}>
            {/*header*/}
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => navigation.dismiss()}>
                    <MaterialIcons name={'cancel'} style={{color:'#FFF',
                        fontSize:19.64,marginLeft:26.18,marginTop:13,}}
                    />
                </TouchableOpacity>
                <Text style={{fontSize:20,fontFamily:'Roboto',
                fontWeight:'bold',color:'#FFF',marginLeft:62.18,marginTop:10}}>Cấu Hình Cho Ăn</Text>
                <Text style={{fontSize:14,color:'#FFF',fontWeight:'bold',
                fontFamily:'Roboto',marginLeft:41,marginTop:18}}>Bắt Đầu</Text>
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

                <View >
                    <View style={{marginLeft:24.83,marginRight:24,marginTop:64}}>
                        <StatusBoth
                            nameIcon={'size'}
                            nameStatus={'Cỡ thức ăn'}
                            detailStatus={4}
                        />
                        <View style={{backgroundColor: '#B2BDCD',
                            width: '97%',
                            height: 0.5,}} />
                        <StatusBoth
                            nameIcon={'speed'}
                            nameStatus={'Tốc độ cho ăn'}
                            detailStatus={'4.4 kg/ giờ'}
                            onPress={() => navigation.navigate('SpeedFeedScreen')}
                        />
                        <View style={{backgroundColor: '#B2BDCD',
                            width: '97%',
                            height: 0.5}} />
                        <StatusBoth
                            nameIcon={'feed'}
                            nameStatus={'Chế độ cho ăn'}
                            detailStatus={type}
                            onPress={() => navigation.navigate('PickConfigScreen',
                                {callback:(type) => {
                                        useType(type)
                                    },type_check:type})}
                        />
                        {
                            type === 'Theo cữ' ? null:
                                <View style={{backgroundColor: '#B2BDCD',
                            width: '97%',
                            height: 0.5}} />
                        }

                        {
                            type === 'Hẹn giờ' ?
                                    <StatusBoth
                                        nameIcon={'timeline'}
                                        nameStatus={'Thời gian kết thúc'}
                                        detailStatus={'12:00'}
                                        onPress={
                                            () => navigation.navigate('ConfigFeedOneScreen')}
                                    />
                                : null
                        }
                    </View>

                    {
                        type === 'Theo cữ' ?
                            <View>
                                <View style={{height:52,backgroundColor:'#F4F6FB',justifyContent:'center'}}>
                                    <Text style={{marginLeft:24,fontFamily:'Roboto',
                                    fontWeight:'bold',fontSize:16}}>LỊCH CHO ĂN</Text>
                                </View>
                            </View>
                            :null
                    }
                </View>
            </View>
        </View>
    )
});

export default ConfigFeed;
