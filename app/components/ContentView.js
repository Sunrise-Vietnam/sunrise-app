import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles';
import SideMenu from 'react-native-side-menu';

class ContentView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+Control+Z for dev menu
                </Text>
            </View>
        );
    }
}

ContentView.propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
};

ContentView.defaultProps = {
    text: 'Button Text',
    onPress: () => console.log('Button Pressed'),
};

export default ContentView;

class Application extends Component {
    render() {
        const menu = <Menu navigator={navigator}/>;

        return (
            <SideMenu menu={menu}>
                <ContentView/>
            </SideMenu>
        );
    }
}
