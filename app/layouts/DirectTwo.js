import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ExNavigator from '@exponent/react-native-navigator';
import { Icon as StudyAbroadIcon } from '../routes/StudyAbroadInfo';
import { Icon as FollowStudentIcon } from '../routes/FollowStudent';
import Routes from '../routes';
import CustomNavBar from '../components/CustomNavBar';

const styles = StyleSheet.create({
    icon: {
        marginVertical: 7,
        height: 26,
        width: 26,
        tintColor: '#929292',
    },
    iconSelected: {
        tintColor: 'rgb(0, 122, 255)',
    },
});

class DirectOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'FollowStudent',
        };
    }

    renderTabItem(title, initialRoute, Icon) {
        const { selectedTab } = this.state;
        const sceneStyle = [];
        if (initialRoute.showNavigationBar !== false) {
            sceneStyle.push({paddingBottom: 40});
        }
        return (
            <TabNavigator.Item
                selected={selectedTab === title}
                title={title}
                renderIcon={() => <Image style={styles.icon} source={Icon} />}
                renderSelectedIcon={() => (
          <Image
            style={[styles.icon, styles.iconSelected]}
            source={Icon}
          />
        )}
                onPress={() => this.setState({ selectedTab: title })}
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
                {this.renderTabItem('StudyAbroadInfo', Routes.getStudyAbroadInfoRoute(), StudyAbroadIcon)}
                {this.renderTabItem('FollowStudent', Routes.getFollowStudentRoute(), FollowStudentIcon)}
            </TabNavigator>
        );
    }
}

export default DirectOne;