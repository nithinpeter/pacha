import React, { component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = function () {
    
    
    
    return {
       render: function () {
            return (
                <TouchableOpacity onPress={this.props.onPress.bind(this)}>
                    <Text>{this.props.text}</Text>
                </TouchableOpacity>
            )
        }
    }
}

export { Button };