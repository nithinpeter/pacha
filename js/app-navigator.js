import React, { Component } from 'react';
import { Navigator, View, Text } from 'react-native';
import { Login } from './scenes/login';
import { Account } from './scenes/account';

export class AppNavigator extends Component {

    constructor(props) {
        super(props);
    }
    
    // componentWillMount() {
        
    // }
    
    render() {
        return (<Navigator initialRoute={{ }} renderScene={this.renderScene} />);
    }
    
    renderScene(route, navigator) {
        return (<Login navigator={navigator}/>);
    }

}