import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default TextButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text>{children}</Text>
    </TouchableOpacity>
)
