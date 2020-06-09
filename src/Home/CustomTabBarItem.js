import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
export default class CustomTabBarIcon extends React.PureComponent {

    render() {

        const {index, focused, routeName,routes} = this.props;

        return (
            <View
                onPress={() => this.onSelect(routeName)}
                style={{borderRadius:80}}
            >
                {/*<View style={[styles.container, focused ? styles.active : styles.inactive,*/}
                {/*    index === 0 && !focused ? {backgroundColor:'red'} : null*/}
                {/*]}>*/}
                {/*    <Text style={styles.textStyle}>{routeName}</Text>*/}
                {/*</View>*/}
                <View style={{height: '100%',width: 100,alignItems:'center',
                justifyContent: 'center',
                    borderTopLeftRadius:index === 0 ? 80 : 0,
                    borderBottomLeftRadius:index === 0 ? 80 : 0,
                    borderTopRightRadius:index === (routes.length-1) ? 80 : 0,
                    borderBottomRightRadius:index === (routes.length-1) ? 80 : 0,
                    backgroundColor: focused ? '#47AA12' :'#EDF1F8'
                }}>
                    <Text style={{
                        color: focused ? '#FFF':'#A9A9A9',
                        fontSize: 14}}>
                        {routeName}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        width:100,
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    active: {
        borderTopWidth: 3,
        borderColor: 'white',
        backgroundColor:'#47AA12',
        borderRadius:80

    },
    inactive: {
        borderTopWidth: 3,
        borderColor: 'blue',
        backgroundColor:'#EDF1F8',

    },
    textStyle: {
        color: '#A9A9A9',
        fontSize: 14
    }
});
