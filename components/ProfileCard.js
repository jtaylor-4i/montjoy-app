import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileCard = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cardContainer}>
				<View style={styles.cardImageContainer}>
					<Image style={styles.cardImage} source={require('../assets/images/mont_soldier.png')} />
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardContainer: {
		alignItems: 'center',
		borderColor: 'black',
		borderWidth: 3,
		borderStyle: 'solid',
		borderRadius: 20,
		backgroundColor: 'dodgerblue',
		width: '95%',
		height: '80%',
	},
	cardImageContainer: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderWidth: 3,
		borderColor: 'black',
		width: 120,
		height: 120,
		borderRadius: 60,
		marginTop: 30,
		paddingTop: 15,
	},
	cardImage: {
		width: 80,
		height: 80,
	},
});
export default Profile;
