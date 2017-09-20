import React from 'react';
import { Text, View } from 'react-native';
import { purple } from '../utils/colors';

export default DateHeader = ({ date }) => (
    <Text style={{color: purple, fontSize: 25}}>
        {date}
    </Text>
)
