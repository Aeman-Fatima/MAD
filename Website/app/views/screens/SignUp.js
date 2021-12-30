import React, { Component, useState, useEffect } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';

import axios from 'axios';

import styles from './Style.js';

const SignUp = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onsubmit = async () => {
        try {
            const form_data = {
                username: userName,
                email: email,
                password: password
            };
            const res = await axios.post(`http://localhost:1337/auth/local/register`, form_data);
            NavigationActions.navigate('Home');

            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    };

    const NavigationActions = navigation;

    return (
        <View colors={['#1E81CE', '#78B9EB']} style={styles.container}>

            <Text style={styles.placeHolderTextContainer}>FAST</Text>

            <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.goBack()}>
                {/* <Image source={require('../../assets/images/back_icon.png')} style={{resizeMode: 'contain'}}/> */}
            </TouchableOpacity>

            <Text style={styles.headerTitleText}>REGISTER</Text>

            <View style={styles.bodyContainer}>
                <TextInput
                    placeholder='USERNAME'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    onChangeText={text => setUserName(text)}
                    value={userName}
                    style={styles.textInput} />


                <TextInput
                    placeholder='EMAIL'
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    underlineColorAndroid='transparent'
                    onChangeText={text => setEmail(text)}
                    value={email}
                    style={styles.textInput} />

                <TextInput
                    placeholder='PASSWORD'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={text => setPassword(text)}
                    value={password}
                    style={styles.textInput} />

            </View>

            <TouchableOpacity style={styles.doneButton} onPress={() => onsubmit()}>
                <Text style={{ color: '#FFF', fontSize: 15 }}>Done</Text>
            </TouchableOpacity>

            <Text style={styles.policyText}>By creating an account you are agreeing to FAST FOOD App User Agreement</Text>
        </View>
    );
};


export default SignUp;