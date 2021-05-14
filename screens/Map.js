import React,{ Component } from 'react';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const mapStyle =require('../assets/styles/mapStyle.json');
const imgYouAreHere = require( '../assets/you-are-here-primary.png' )

export default class Map extends Component {
    state={
        location: null
    }

    async getLocation () {
        let location=await Location.getCurrentPositionAsync();
        this.setState( {
            location
        } );
    }

    async componentDidMount () {
        
        const permission=await Location.requestForegroundPermissionsAsync();        
        if ( permission.status==='granted' ) {
            if (!this.state.location) {
                this.getLocation();
            }                
        }        
    }

    componentWillUnmount () {
        this.setState({
            location: null
        })
    }

    renderMap () {
        return this.state.location?
            <MapView
                provider={PROVIDER_GOOGLE}            
                style={ styles.map }
                customMapStyle= {mapStyle}
                initialRegion={ {
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.02,
                } }
            >
                <MapView.Marker
                    coordinate={ this.state.location.coords }
                    title={ "User Location" }
                    description={ "You are here!" }
                    image={ imgYouAreHere }
                    tracksViewChanges={ false }
                />
            </MapView>:null
    }

    render () {
        return (
            <View style={ styles.container }>
                { this.renderMap() }
            </View>
        );
    }
}

const styles=StyleSheet.create( {
    container: {
        flex: 1,
    },
    map: {
        flex: 1
    }
} );
