import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';

export default UdaciSlider = ({ max, step, value, onChange, unit}) => (
    <View>
        <Slider
            maximumValue={max}
            minimumValue={0}
            step={step}
            value={value}
            onValueChange={onChange}
        />
        <View>
            <Text>{value}</Text>
            <Text>{unit}</Text>
        </View>
    </View>
)
