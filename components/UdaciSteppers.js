import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { purple, white } from '../utils/colors';

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    androidBtn: {
        margin: 5,
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2,
    },
    iosBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default UdaciSteppers = ({ max, value, step, unit, onDecrement, onIncrement}) => (
    <View style={[styles.row, {marginLeft: 10}]}>
        {Platform.OS === 'ios'
            ? <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={[styles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                  onPress={onDecrement}>
                    <Entypo name='minus' size={30} color={purple} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.iosBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 0}]}
                  onPress={onIncrement}>
                    <Entypo name='plus' size={30} color={purple} />
                </TouchableOpacity>
              </View>
            : <View style={[styles.row, {justifyContent: 'flex-start'}]}>
                <TouchableOpacity style={[styles.androidBtn]} onPress={onDecrement}>
                    <FontAwesome
                        name="minus"
                        size={30}
                        color={white}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.androidBtn]} onPress={onIncrement}>
                    <FontAwesome
                        name="plus"
                        size={30}
                        color={white}/>
                </TouchableOpacity>
            </View>
        }
        <View style={[styles.metricCounter]}>
            <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
            <Text style={{fontSize: 18, color: 'gray'}}>{unit}</Text>
        </View>
    </View>
)
