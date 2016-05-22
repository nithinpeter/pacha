import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';


export class Account extends Component {
    
    
    render() {
        return (<View style={styles.container}>
            <Text>Account</Text>
        </View>);
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})