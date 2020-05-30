import React from 'react';
import Splash from './src/SplashScreen'
import Login from './src/Login/Login';
import Home from './src/Home/Home'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Chart from './src/Home/Chart';
import {IconCustom} from './IconCustom';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import News from './src/Home/News';
import User from './src/Home/User';
import Test from './src/Home/Test';
import Setting from './src/Home/Setting/Setting';
import NavigationService from './NavigationService';
import RadiusSetting from './src/Home/Setting/RadiusSetting';
import ConfigFeed from './src/Home/Setting/ConfigFeed';
import PickConfig from './src/Home/Setting/PickConfig';
import SpeedFeed from './src/Home/Setting/SpeedFeed';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  switch (routeName) {
    case 'HomeStackScreen' : return <SimpleLineIcons name={'home'} color={tintColor}
      size={30}
    />;
    case 'Chart' : return <IconCustom name={'chart'} color={tintColor} size={30}/>;
    case 'News' : return <MaterialCommunityIcons name={'newspaper'} color={tintColor} size={30}/>;
    case 'User' : return <Feather name={'user'} color={tintColor} size={30}/>
   }
};
const SettingStack = createStackNavigator({
  SettingScreen:{screen:Setting,navigationOptions:{headerShown:false}},
    RadiusScreen:{screen:RadiusSetting,navigationOptions:{headerShown:false}},
    ConfigFeedScreen:{screen:ConfigFeed,navigationOptions:{headerShown:false}},
    PickConfigScreen:{screen:PickConfig,navigationOptions:{headerShown:false}},
    SpeedFeedScreen : {screen:SpeedFeed,navigationOptions:{headerShown:false}}
});

const TabNavigator = createBottomTabNavigator(
    {
        HomeStackScreen: {screen: Home,navigationOptions:{title:'Trang chủ'}},
      Chart : {screen:Chart,navigationOptions:{title:'Thống kê'}},
      News:{screen:News,navigationOptions:{title:'Tin tức'}},
      User:{screen:User,navigationOptions:{title:'Cá nhân'}}
    },

    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) =>
            getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#008F33',
        inactiveTintColor: '#707378',
        style :{height:70,borderTopLeftRadius:40,
          borderTopRightRadius:40,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 40,
          elevation: 13,
        },
        labelStyle: {
          fontSize: 10,
        },

      },

    },
);

const stackAuth = createStackNavigator({
  stackLogin:{screen:Login,navigationOptions:{headerShown:false}},
  stackMain :{screen:TabNavigator,navigationOptions:{headerShown:false}},
  stackSetting:{screen:SettingStack,navigationOptions:{headerShown:false}}
});
const stackSwitch = createSwitchNavigator({
  Splash : {screen:Splash},
  Auth : {screen:stackAuth}
});

const AppContainer = createAppContainer(stackSwitch);

function App() {
  return (
      <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
      />
  );
};

export default App;
