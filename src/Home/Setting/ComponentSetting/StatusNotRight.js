import React from 'react'
import {Text, View} from 'react-native';
import {styleDevice} from '../../StyleHome/StyleDevice';
import {IconCustom} from '../../../../IconCustom';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function StatusNotRight({nameIcon,nameStatus,detailStatus}) {
    return(
        <View>
            <View style={styleDevice.flexRow}>
                <View style={styleDevice.ctnStatusLeft}>
                    <IconCustom name={nameIcon}
                                style={{color: '#707378', fontSize: 18, marginTop: 3}} />
                    <Text style={styleDevice.txtStatus}>{nameStatus}</Text>
                </View>
                <View style={styleDevice.flexRow}>
                    <Text style={styleDevice.txtStatusRight}>{detailStatus} </Text>
                </View>
            </View>

        </View>
    )
}
