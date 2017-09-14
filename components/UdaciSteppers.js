import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default UdaciSteppers = ({ max, value, step, unit, onDecrement, onIncrement}) => (
    <View>
        <View>
            <TouchableOpacity onPress={onDecrement}>
                <FontAwesome
                    name="minus"
                    size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onIncrement}>
                <FontAwesome
                    name="plus"
                    size={30}/>
            </TouchableOpacity>
        </View>
        <View>
            <Text>{value}</Text>
            <Text>{unit}</Text>
        </View>
    </View>
)
