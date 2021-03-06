import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


import styles from './Style2.js';
class Verify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    render() {
        const NavigationActions = this.props.navigation;

        return (
            <View colors={['#1E81CE', '#78B9EB']} style={styles.container}>

                <Text style={styles.placeHolderTextContainer}>FAST</Text>

                <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.goBack()}>
                    {/* <Image source={require('../../assets/images/back_icon.png')} style={{resizeMode: 'contain'}}/> */}
                </TouchableOpacity>

                <Text style={styles.headerDescriptionText}>We will send an One-Time Password (OTP) to your mobile number for verification.</Text>

                <View style={styles.bodyContainer}>
                    <TextInput
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}/>
                
                    <TextInput
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}/>

                    <TextInput
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}/>

                    <TextInput
                        underlineColorAndroid='transparent' 
                        style={styles.textInput}/>
                </View>
                
                <TouchableOpacity style={styles.verifyContainer} onPress={() => NavigationActions.navigate('Home')}>
                    <Text style={{color: '#1961A1', fontSize: 15, height: 45, textAlign: 'center', textAlignVertical: 'center'}}>VERIFY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.resendContainer}>
                    <Text style={{color: 'white', fontSize: 15, textAlign: 'center', textAlignVertical: 'center'}}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Verify;