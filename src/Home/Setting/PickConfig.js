import React from 'react'
import {Text, TouchableOpacity, View,FlatList} from 'react-native';
import {styleSetting} from './StyleSetting/StyleSetting';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Data = [{id:1,name:'Liên tục'},{id:2,name:'Hẹn giờ'},{id:3,name:'Theo cữ'}];
function Item({name,onPress,type_check}) {
    return(
        <TouchableOpacity style={{
            height:50,
            marginVertical:10,marginHorizontal:10,
            borderRadius:10,flexDirection:'row',alignItems:'center',
            borderWidth:0.5,
            borderColor:'gray',
            backgroundColor:type_check === name ? '#94D213' : '#FFF'
        }}
                          onPress={onPress}
        >
            <Text style={{color:type_check === name ? '#FFF' : '#000',
                flex:1,fontSize:20,marginLeft:10}}>{name}</Text>
            {/*<AntDesign name={'checkcircleo'} style={{fontSize:17,marginRight:10}}/>*/}
            {
                type_check === name ?
                    <AntDesign name={'checkcircleo'} style={{fontSize:17,marginRight:10,
                        color:'#47AA12'
                    }}/>:null
            }
        </TouchableOpacity>
    )
}
const PickConfig = React.memo(function PickConfig({navigation}) {
    let callback = navigation.getParam('callback','default');
    let type_check = navigation.getParam('type_check','default');
    return(
        <View style={{flex:1,backgroundColor:'#11CA71'}}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginRight:100
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name={'arrow-left'} style={{
                        fontSize: 24,
                        color: '#FFF',
                    }} />
                </TouchableOpacity>

                <Text style={{
                    fontSize: 20,
                    fontFamily: 'Roboto',
                    color: '#FFF',
                    marginLeft:80
                }}>Chọn chế độ</Text>
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
                <FlatList
                    data={Data}
                    renderItem={({item}) =>
                        <Item name={item.name}
                              onPress={() => {navigation.goBack();
                                    callback(item.name);
                              }}
                              type_check={type_check}
                        />}
                    keyExtractor={item => item.id}
                    style={{marginTop:100}}
                />
            </View>
        </View>
    )
});
export default PickConfig;
