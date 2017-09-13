import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class UdaciSteppers extends Component {
    render() {
        return (
            <View>
                <Text>UdaciSteppers</Text>
                <Text>{this.props.value}</Text>
                <Button
                    title="Increment"
                    onPress={this.props.onIncrement}
                />
                <Button
                    title="Decrement"
                    onPress={this.props.onDecrement}
                />
            </View>
        )
    }
}
