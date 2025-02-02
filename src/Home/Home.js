import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from 'react-native';

import Device from './Device';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import HeaderHome from './ComponentHome/HeaderHome';
import CustomTabBar from './CustomTabBar';

const Home = React.memo( function Home() {
  const [TopTabDevice, useTopTabDevice] = useState(null);


  useEffect(() => {
    const tabNavigator = createMaterialTopTabNavigator(
      {
        dv1: {screen: Device,navigationOptions:{title:'hello'}},
        dv2: {screen: Device},
        dv3: {screen: Device},
      },
      {
          tabBarComponent: props => <CustomTabBar {...props}/>
      },
    );
    const term = () => createAppContainer(tabNavigator);
    useTopTabDevice(term);
  }, []);

  let TopTab = TopTabDevice;
  if (TopTabDevice === null) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor="#FFF" />
      <HeaderHome />
      <TopTab />
    </ScrollView>
  );
});

export default Home;
