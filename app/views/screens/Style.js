'use strict'

import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window')

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#908e8c"
    },

    backButton: {
        marginLeft: 20,
        marginTop: 20
    },

    headerTitleText: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginTop: 20
    },

    headerDescriptionText: {
        color: 'white',
        fontSize: 15
    },

    placeHolderTextContainer: {
        position: 'absolute',
        fontSize: 100,
        color: 'rgba(255, 255, 255, 0.2)',
        transform: [{rotate: '-90deg'}],
        bottom: '22%',
        right: '-26%'
    },

    bodyContainer: {
        marginTop: 25,
        marginLeft: 20
    },

    phoneNumberContainer: {
        width: width * 0.6,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },

    phoneText: {
        color: 'white',
        marginTop: 15,
    },

    textInput: {
        width: width * 0.6,
        color: 'white',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },

    birthDayCotainer: {
        width: width * 0.6,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },

    doneButton: {
        backgroundColor: '#F9813A',
        width: width * 0.7,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 35,
        marginLeft: 20
    },

    policyText: {
        width: width * 0.8,
        color: 'white',
        fontSize: 13,
        marginTop: 20,
        marginLeft: 20,
        textAlign: 'center'
    }
});

export default styles;