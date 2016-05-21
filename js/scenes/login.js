import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    AsyncStorage
} from 'react-native';


import Account from './account';

// import Firebase from 'firebase';

// let app = new Firebase("YOUR-FIREBASE-APP-URL");


export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    login() {
        // app.authWithPassword({
        //   "email": this.state.email,
        //   "password": this.state.password
        // }, (error, user_data) => {

        //   this.setState({
        //     loaded: true
        //   });

        //   if(error){
        //     alert('Login Failed. Please try again');
        //   }else{
        //     AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        //     this.props.navigator.push({
        //       component: Account
        //     });
        //   }
        // });
    }

    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(text) => this.setState({ email: text }) }
                    value={this.state.email}
                    placeholder={"Email Address"}
                    />
                <TextInput
                    onChangeText={(text) => this.setState({ password: text }) }
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"}
                    />
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     login_container: {
//         padding: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//         flex: 1
//     }
// })

