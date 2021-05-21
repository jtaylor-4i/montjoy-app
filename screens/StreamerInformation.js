import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native'

const StreamerInformation = ({navigation}) => {
    return (
        <View>
            <Text>
                Streamer Information Page
            </Text>
            <View>
                <Button 
                    title="Create a Streamer Account"
                    onPress={() => Alert.alert("Streamer financial information")}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({});
export default StreamerInformation;
