
import React, { useContext } from 'react';
import { StyleSheet, View, Image, Alert, ActionSheetIOS } from 'react-native';
import { withTheme, Button, Switch, Text } from 'react-native-paper';
import FadeInView from '../components/FadeInView';

import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_DARK_MODE } from '../store/constants/appSettings';

const Welcome = ({ navigation }) => {
	const appSettings = useSelector((state) => state.appSettings);
	const dispatch = useDispatch();
	return (
		<View style={styles.container}>
			<FadeInView>
				<Image source={require('../assets/images/montjoy-vertical-200x178.png')} />
				<Button mode="contained" onPress={() => navigation.navigate('SignupScreen')}>
					Sign up!
				</Button>
				<View style={styles.row}>
					<Text>Toggle Dark Mode</Text>
					<Switch
						value={!appSettings.isDarkMode}
						onValueChange={(e) => dispatch({ type: TOGGLE_DARK_MODE })}
					/>
				</View>
			</FadeInView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		//backgroundColor: '#031116',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
export default withTheme(Welcome);
