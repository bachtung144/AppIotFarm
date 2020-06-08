import {SafeAreaView} from 'react-native-safe-area-context';

import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    ScrollView,
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
            <SafeAreaView style={{backgroundColor: 'blue'}}>
                <View style={styles.container}>
                    {routes.map((route, index) =>{
                        return (
                            <View style={styles.tabBarItem}>
                                <CustomTabBarIcon
                                    key={route.key}
                                    routeName={route.routeName}
                                    onPress={() => this.navigationHandler(index)}
                                    focused={navigation.state.index === index}
                                    index={index}
                                />
                            </View>
                        )
                    })}
                </View>
            </SafeAreaView>
        )

    }
}

const styles = StyleSheet.create({

    container: {
        // flexDirection: 'row',
        // alignContent: 'center',
        // height: 56,
        // width: '100%',
        // paddingHorizontal: 16,
        backgroundColor: 'pink',
    },
    tabBarItem: {
        flex: 1,
        alignItems: 'center'
    }
});



