import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

class SRVNApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Sunrise Vietnam Co.,ltd
				</Text>
				<Text style={styles.instructions}>
					Tư vấn du học - Đào tạo ngoại ngữ
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

export default SRVNApp;