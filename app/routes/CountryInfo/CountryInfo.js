import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Dimensions, TouchableOpacity, ListView } from 'react-native';
import { COLORS } from '../../styles';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import config from '../../config.js';
import Meteor, { connectMeteor } from 'react-native-meteor';

let width = Dimensions.get('window').width;

class CountryInfo extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            countryData : null
        };
    }

    componentWillMount(){
        const country = this.props.parentKey;
        const self = this;
        Meteor.call('getCountryData', country.key, (e, rs) => {
            self.setState({
                countryData : rs
            });
        });
    }

    render() {
        const countryData = this.state.countryData;
        const country = this.props.parentKey;
        return (
            countryData && <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                <View>
                    <Image style={styles.banner} source={{uri: country.banner}} />
                    <ListView
                        dataSource={this.ds.cloneWithRows(countryData)}
                        renderRow={rowData => (
                            <TouchableOpacity style={styles.row} onPress={() => {this.props.onSchoolsPress(rowData.key)}}>
                                <Text style={styles.txtName}>{rowData.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ParallaxScrollView>
        );
    }
}

CountryInfo.propTypes = {
    onSchoolsPress: React.PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        alignItems: 'center'
        //overflow: 'hidden'
    },
    banner: {
        resizeMode: 'stretch',
        justifyContent: 'center',
        marginHorizontal: 0,
        width: width+50,
        height: width/3
    },
    row: {
        backgroundColor: COLORS.clrBlack,
        padding: 10,
        borderTopWidth: 10,
        borderTopColor: 'white'
    },
    txtName: {
        color: COLORS.clrWhite,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    }
});

export default CountryInfo;