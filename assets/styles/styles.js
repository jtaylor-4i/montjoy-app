import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginTop: 150,
		backgroundColor: "#031116",
		flexWrap: "wrap",
	},
});

const buttons = StyleSheet.create({
	primary: {
		flex: 1,
		height: 70,
		backgroundColor: "blue",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 20,
		marginRight: 20,
	},
});

export const Colors = {
    dark: {
        bgColor: '#031116',
        fgColor: '#F4FBFE',
        placeholder: '#CCCCCC',
        primary: '#1FACE1',
		accent: '#0A6F94',
        primary_hover: '#0A6F94',
    },
    light: {
        bgColor: '#F4FBFE',
        fgColor: '#031116',
        placeholder: '#CCCCCC',
        primary: '#1FACE1',
		accent: '#0A6F94',
        primary_hover: '#0A6F94'
    }
    
};

const baseContainerStyles = {
	flex: 1,
	justifyContent: "center",
	alignItems: "center",
};

const baseBoxStyles = {
	justifyContent: "center",
	alignItems: "center",
	borderWidth: 2,
	height: 150,
	width: 150,
};

//////////////////////////////////////////////
// Marked for Deletion
//////////////////////////////////////////////
// const lightStyleSheet = StyleSheet.create({
// 	container: {
// 		...baseContainerStyles,
// 		backgroundColor: Colors.light,
// 	},
// 	box: {
// 		...baseBoxStyles,
// 		borderColor: Colors.dark,
// 	},
// });

// const darkStyleSheet = StyleSheet.create({
// 	container: {
// 		...baseContainerStyles,
// 		backgroundColor: Colors.dark,
// 	},
// 	box: {
// 		...baseBoxStyles,
// 		borderColor: Colors.light,
// 	},
// });

//export default function getStylesSheet(useDarkTheme){ return useDarkTheme ? darkStyleSheet : lightStyleSheet;}
export { styles, buttons };
