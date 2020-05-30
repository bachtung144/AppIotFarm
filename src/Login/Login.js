import React from 'react';
import {Image, Text, View, TextInput, Linking, StatusBar,TouchableOpacity,SafeAreaView} from 'react-native';
import ArtBoard from '../../assets/picture/Login/Artboard.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {IconCustom} from '../../IconCustom';

const Login = React.memo(function Login({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#11CA71'}}>
      <StatusBar backgroundColor="#11CA71" />
      <View
        style={{
          top: 50,
          backgroundColor: '#FFF',
          width: '100%',
          height: 700,
          borderRadius: 35,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          elevation: 13,

        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View >
              <Image source={ArtBoard} style={{marginRight: 47,marginTop:20}} />
          </View>

          <View style={{marginTop:20}}>
              <TextInput
                  style={{
                      backgroundColor: '#F6F8FC',
                      width: 327,
                      borderRadius: 24,
                      paddingLeft: 23.76,
                      height: 44,
                  }}
                  placeholder={'Email'}
              />
              <TextInput
                  style={{
                      backgroundColor: '#F6F8FC',
                      width: 327,
                      borderRadius: 24,
                      marginTop: 23,
                      paddingLeft: 23.76,
                      height: 44,
                  }}
                  placeholder={'Password'}
              />
          </View>

          <View style={{alignItems: 'center',
              justifyContent: 'center', marginTop: 45}}>
              <TouchableOpacity
                  style={{
                      backgroundColor: '#47AA12',
                      width: 327,
                      height: 44,
                      borderRadius: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}
                    onPress = {() => navigation.navigate('stackMain')}
              >
                  <Text style={{fontFamily: 'Roboto', color: '#FFF', fontSize: 18}}>
                      SIGN UP
                  </Text>
              </TouchableOpacity>

              <View
                  style={{
                      flexDirection: 'row',
                      marginTop: 19,
                      height: 21,
                      width: 209,
                  }}>
                  <Text
                      style={{fontFamily: 'Roboto', color: '#A9A9A9', fontSize: 12}}>
                      Chưa Có Tài Khoản?
                  </Text>
                  <Text
                      style={{fontFamily: 'Roboto', color: 'red', fontSize: 12}}
                      onPress={() => Linking.openURL('http://google.com')}>
                      ĐĂNG KÝ NGAY
                  </Text>
              </View>
          </View>

          <View style={{alignItems: 'center',
              justifyContent: 'center',marginTop:50}}>
              <View
                  style={{
                      width: 327,
                      height: 44,
                      borderWidth: 1,
                      borderRadius: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: '#47AA12',
                  }}>
                  <Text
                      style={{fontFamily: 'Roboto', fontSize: 16, color: '#47AA12'}}>
                      Login With FaceBook
                  </Text>
              </View>
              <View
                  style={{
                      width: 327,
                      height: 44,
                      borderWidth: 1,
                      borderRadius: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 22,
                      borderColor: '#47AA12',
                  }}>
                  <Text
                      style={{fontFamily: 'Roboto', fontSize: 16, color: '#47AA12'}}>
                      Quét mã sản phẩm ngay
                  </Text>
              </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
})

export default Login;
