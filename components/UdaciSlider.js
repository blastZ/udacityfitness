import React, { Component } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default UdaciSlider = ({ max, step, value, onChange, unit}) => (
    <View style={[styles.row]}>
        <Slider
            maximumValue={max}
            minimumValue={0}
            step={step}
            value={value}
            onValueChange={onChange}
            style={{flex: 1}}
        />
        <View style={[styles.metricCounter]}>
            <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
            <Text style={{fontSize: 18, color: 'gray'}}>{unit}</Text>
        </View>
    </View>
)
