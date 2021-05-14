import React,{ Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    Platform,
    UIManager
} from 'react-native';
import Panel from './components/Panel';


export default class AniPanel extends Component {
    componentWillMount () {
        if ( Platform.OS==='android' ) {
            UIManager.setLayoutAnimationEnabledExperimental( true );
        }
    }

    render () {
        return (
            <SafeAreaView style={ [ styles.main ] }>
                <Text style={ styles.toolbar }>About the Montjoy App</Text>
                <View style={ styles.content }>
                    <Panel
                        title={ 'Stream' }
                        style={ styles.panel }
                    >
                        <Text style={ styles.panelText }>
                            Provide information about how the user can Stream live videos to whomever request there services
                        </Text>
                    </Panel>
                    <Panel
                        title={ 'View' }
                        style={ styles.panel }
                    >
                        <Text style={ styles.panelText }>
                            Provide information about how the user can View live videos to whomever request there services

                        </Text>
                    </Panel>
                    <Panel
                        expanded
                        title={ 'How to Start' }
                        style={ styles.panel }
                    >
                        <Text style={ styles.panelText }>
                            Let's get you set up
                        </Text>
                        <Text style={ styles.panelText }>
                            We will provide all of the information that is needed for the user to get it set up and ready to go.
                        </Text>
                    </Panel>
                </View>
            </SafeAreaView>
        );
    }
}

const styles=StyleSheet.create( {
    main: {
        flex: 1,
    },
    toolbar: {
        backgroundColor: '#3498db',
        color: '#fff',
        fontSize: 22,
        padding: 20,
        textAlign: 'center',
    },
    content: {
        padding: 10,
        backgroundColor: '#ecf0f1',
        flex: 1,
    },
    panel: {
        marginBottom: 10,
    },
    panelText: {
        paddingBottom: 15,
    }
} );
