import React, { Component, useState } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import axios from 'axios'

import styles from './Style1.js';
import { object } from 'yup';

const Login = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const NavigationActions = navigation;

    const onsubmit = async () => {
        try {
            const form_data = {
                identifier: userName,
                password: password
            };
            const res = await axios.post(`http://localhost:1337/auth/local`, form_data);
            NavigationActions.navigate('Home');

            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <Image source={require('../../assets/images/login_logo.png')} style={styles.headerImage}/> */}
                <Text style={styles.headerTitleText}>FAST FOOD APP</Text>
            </View>

            {/* <Text style={styles.headerDescriptionText}>Login to enjoy best fast food.</Text> */}

            <Text style={styles.placeHolderTextContainer}>FAST FOOD</Text>

            <View style={styles.bodyContainer}>
                <View style={styles.emailContainer}>
                    {/* <Image source={require('../../assets/images/login_username_icon.png')} style={styles.textInputIcon}/> */}
                    <TextInput
                        placeholder='USERNAME'
                        placeholderTextColor='#908e8c'
                        keyboardType='email-address'
                        underlineColorAndroid='transparent'
                        onChangeText={text => setUserName(text)}
                        value={userName}
                        style={styles.textInput} />
                </View>

                <View style={styles.separateLine} />

                <View style={styles.passwordContainer}>
                    {/* <Image source={require('../../assets/images/login_password_icon.png')} style={styles.textInputIcon}/> */}
                    <TextInput
                        placeholder='PASSWORD'
                        placeholderTextColor='#908e8c'
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={text => setPassword(text)}
                        value={password}
                        style={styles.textInput} />
                </View>

                <TouchableOpacity style={styles.loginButtonContainer} onPress={() => onsubmit()}>
                    <Text style={{ color: 'white', fontSize: 15 }}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ marginTop: 25 }} onPress={() => NavigationActions.navigate('ForgotPasswordScreen')}>
                <Text style={{ color: 'white', fontSize: 15 }}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupContainer} onPress={() => NavigationActions.navigate('SignUpScreen')}>
                <Text style={{ color: '#FFF', fontSize: 15 }}>New User?</Text>
            </TouchableOpacity>
        </View>
    );
}


export default Login;