import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Home } from '../routes/Home';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../routes';

const styles = StyleSheet.create({
	icon: {
		height: 30,
		width: 30,
		tintColor: '#929292',
	},
	iconSelected: {
		tintColor: 'rgb(0, 122, 255)',
	},
});

class DefaultLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'Home',
		};
	}

	renderTabItem(title, initialRoute) {
		const { selectedTab } = this.state;
		const sceneStyle = [];
		if (initialRoute.showNavigationBar !== false) {
			sceneStyle.push({ paddingTop: 64 });
		}

		return (
			<TabNavigator.Item
				selected={selectedTab === title}
				title={title}
			>
				<ExNavigator
					initialRoute={initialRoute}
					style={{ flex: 1 }}
					sceneStyle={sceneStyle}
					showNavigationBar={initialRoute.showNavigationBar}
				/>
			</TabNavigator.Item>
		);
	}

	render() {
		return (
			<TabNavigator>
				{this.renderTabItem('Home', Routes.getHomeRoute(), HomeIcon)}
			</TabNavigator>
		);
	}
}

export default DefaultLayout;
