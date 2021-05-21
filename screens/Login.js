import React from 'react'
import {View, Text, StyleSheet} from 'react-native';


export const Login = () => {
    return (
        <View style={styles.screen}>
            <Text>
                Settings Page
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Login;