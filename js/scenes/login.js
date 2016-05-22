import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    AsyncStorage
} from 'react-native';
import { Button } from '../components/button';

import Account from './account';

import Firebase from 'firebase';

let app = new Firebase("https://project-6719112350263539456.firebaseio.com");


export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    login() {
        app.authWithPassword({
          "email": this.state.email,
          "password": this.state.password
        }, (error, user_data) => {

          this.setState({
            loaded: true
          });

          if(error){
            alert('Login Failed. Please try again');
          }else{
            AsyncStorage.setItem('user_data', JSON.stringify(user_data));
            this.props.navigator.push({
              component: Account
            });
          }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ email: text }) }
                    value={this.state.email}
                    placeholder={"Email Address"}
                    />
                <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({ password: text }) }
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"}
                    />
                <Button text={"Login"} onPress={this.login.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        height: 26,
        margin: 10,
        // padding: 10
    }
    
})

