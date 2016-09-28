import React, { Component } from 'react';
import { CameraRoll, Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { COLORS } from '../../styles/index.js';

import PhotoBrowser from 'react-native-photo-browser';

import config from '../../config.js';
import Meteor, { connectMeteor } from 'react-native-meteor';

let width = Dimensions.get('window').width;

class SchoolInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            schoolData: null
        };
        this._onSelectionChanged = this._onSelectionChanged.bind(this);
        this._onActionButton = this._onActionButton.bind(this);
    }

    componentWillMount(){
        const school = this.props.parentKey;
        const self = this;
        Meteor.call('getSchoolInfoData', school, (e, rs) => {
            self.setState({
                schoolData : rs.sImages
            });
        });
    }

    _onSelectionChanged(media, index, selected) {
        alert(`${media.photo} selection status: ${selected}`);
    }

    _onActionButton(media, index) {
        if (Platform.OS === 'ios') {
            ActionSheetIOS.showShareActionSheetWithOptions({
                    url: media.photo,
                    message: media.caption
                },
                () => {},
                () => {});
        } else {
            alert(`handle sharing on android for ${media.photo}, index: ${index}`);
        }
    }

    render(){
        const schoolData = this.state.schoolData;
        return (
            schoolData && <PhotoBrowser
                mediaList={schoolData}
                displayNavArrows={true}
                onSelectionChanged={this._onSelectionChanged}
                onActionButton={this._onActionButton}
                style={styles.container}
            />
        )
    }
}

SchoolInfo.propTypes = {
    onCountryInfoPress: React.PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        backgroundColor: COLORS.clrBlack
    }
});

export default SchoolInfo;