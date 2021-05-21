import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Landing = ({navigation}) => {
    return (
        <View style={styles.screen}>
           <View style={styles.header}>
           <Text style={styles.textContent}>
                This page provides the information needed for people to sign up.
            </Text>
            <View style={{paddingTop: 20, alignItems: 'center', paddingBottom: 20}}>
            <Image 
                source={require('../assets/images/montjoy-horizontal-200x49.png')}
                style={styles.image}
            />
            </View>
           </View>
            <View style={styles.contentContainer}>
                <Text style={styles.textContent}>
                    If interested in learning more about Streaming. Click here
                </Text>
                <Button 
                    title="Learn more about streaming"
                    onPress={() => navigation.navigate('Streamer')}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.textContent}>
                    If interested in learning more about our Dreamers. Click here
                </Text>
                <Button 
                    title="Learn more about dreaming"
                    onPress={() => navigation.navigate('Dreamer')}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
    backgroundColor: "#031116",
    },
    textContent: {
        color: '#fff',
        fontSize: 14
    },
    header: {
        paddingTop: 10,
        marginBottom: 25,
    },
    contentContainer: {
        marginTop: 20,
        paddingBottom: 30,
    },
});
export default Landing;
