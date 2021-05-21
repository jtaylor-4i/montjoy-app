import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

const DreamerInformation = ({navigation}) => {
    return (
        <View>
            <Text>
                Dreamer Information Page
            </Text>
            <View>
                <Button 
                    title="Create a Dreamers account"
                    onPress={() => Alert.alert("Dreamer Financial Information")}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({});
export default DreamerInformation;
