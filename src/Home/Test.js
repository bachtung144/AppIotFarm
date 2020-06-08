import React from 'react';
import {View,Text} from 'react-native';

export default function Test() {

    function getName(name) {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    console.log(name);
                    resolve();
                }, Math.floor(Math.random() * 100) + 1)
        })
    }

    async function getAll() {
        try {
            await getName("Nguyen");
            await getName("Bach");
            await getName("Tung");
        }
        catch (error) {
            console.log(error);
        }
        finally {
            // anything you want
        }
    }


    getAll();

    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}
