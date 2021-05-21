import React,{ Component } from 'react';
import {
    Alert,
    StyleSheet,
    View,
    } from 'react-native';
import { withTheme, Button, Text, TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'

import { UPDATE_USER_FIELD } from '../store/constants/user'

const SignupForm = ( {navigation})=> {
    const state = useSelector(state => state.user);
    
    const dispatch = useDispatch()
    const handleButtonPress = () => {
        const { name, phone, email } = state;
        Alert.alert( `User's data`,`Name: ${ name }, Phone: ${ phone }, Email: ${ email }` );
    }

    const renderTextfield = ( options )  => {
        const state = useSelector(state => state.user);
        return (
            <TextInput                
                mode='flat'
                onChangeText=                
                { e => 
                    dispatch({
                        type: UPDATE_USER_FIELD,
                        payload: [options.name, e]
                    })
                }
                label={ options.placeholder }                
                value={ state[options.name]}
                keyboardType={ options.keyboard||'default' }
            />
        );
    }

    const renderButton = ()  => {
        return (
            <Button
                mode='contained'
                onPress={ handleButtonPress }>
                View
            </Button>
        );
    }

    return (
        <View >
            <Text>
                Please enter your contact information { renderButton() }                    
            </Text>
            
            { renderTextfield( { 
                name: 'name',
                placeholder: 'Your name' } ) }
            { renderTextfield( { 
                name: 'phone',
                placeholder: 'Your phone number',
                keyboard: 'phone-pad' } ) }
            { renderTextfield( { 
                name: 'email',
                placeholder: 'Your email address',
                keyboard: 'email-address' } ) }                
            <Button
                mode='contained'                                        
                onPress={ () => navigation.navigate( "HomeScreen" ) }>
                Continue
            </Button>                
        </View>
    );
}  

export default withTheme(SignupForm);