import {SafeAreaView} from 'react-native-safe-area-context';

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import CustomTabBarIcon from './CustomTabBarItem'
export default class CustomTabBar extends React.Component {

    navigationHandler = (routeName) => {
        this.props.navigation.navigate(routeName);
    };

    render() {

        const {navigation} = this.props;
        const routes = navigation.state.routes;
        // console.warn(navigation.state.routes);
        return(
            <SafeAreaView style={{flexDirection:'row',marginRight:24,marginLeft:24,
                height:36}}>
                    {routes.map((route, index) =>{
                        return (
                            // <View style={{flexDirection:'row',flex:1,borderRadius:10,backgroundColor:'pink',
                            // height:'100%'}}>
                                <CustomTabBarIcon
                                    key={route.key}
                                    routeName={route.routeName}
                                    onPress={() => this.navigationHandler(index)}
                                    focused={navigation.state.index === index}
                                    index={index}
                                    routes={routes}
                                />
                            // </View>
                        )
                    })}
            </SafeAreaView>
        )

    }
}




