import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
export default class CustomTabBarIcon extends React.PureComponent {

    render() {

        const {index, focused, routeName} = this.props;

        return (
            <View
                onPress={() => this.onSelect(routeName)}
            >
                <View style={[styles.container, focused ? styles.active : styles.inactive]}>
                    <Text style={styles.textStyle}>{routeName}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },
    active: {
        borderTopWidth: 3,
        borderColor: 'white',
        backgroundColor:'blue'
    },
    inactive: {
        borderTopWidth: 3,
        borderColor: 'blue',
        backgroundColor:'red'
    },
    textStyle: {
        color: 'red',
        fontSize: 13
    }
});
