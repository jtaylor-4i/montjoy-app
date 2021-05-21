import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Screens from './navigation/Screen';

import { MontjoyDarkTheme, MontjoyDefaultTheme } from './assets/styles/theme';
import { Alert } from 'react-native';

export default function ThemedApp() {
	const isDarkMode = useSelector((state) => state.appSettings.isDarkMode);
	const theme = !isDarkMode ? MontjoyDarkTheme : MontjoyDefaultTheme;
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer theme={theme}>
				<Screens />
			</NavigationContainer>
		</PaperProvider>
	);
}