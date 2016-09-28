import React, { Component } from 'react';
import { StyleSheet, Text, ListView, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { COLORS } from '../../styles/index.js';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import config from '../../config.js';
import Meteor, { connectMeteor } from 'react-native-meteor';

let width = Dimensions.get('window').width;

class Schools extends Component {
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            schoolsData: null
        };
    }

    componentWillMount(){
        const countryInfo = this.props.parentKey;
        const self = this;
        Meteor.call('getSchoolsData', countryInfo, (e,rs) => {
            self.setState({
                schoolsData : rs
            });
        });
        //console.log(countriesData)
    }

    render(){
        const schoolsData = this.state.schoolsData;
        return (
            schoolsData && <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                <ListView
                    contentContainerStyle={styles.listViewStyle}
                    dataSource={this.ds.cloneWithRows(schoolsData)}
                    renderRow={rowData => (
                        <TouchableOpacity style={styles.row} onPress={()=>{this.props.onSchoolInfoPress(rowData._id)}}>
                            <Image style={styles.imgContain} source={{uri: rowData.sLogo}}>
                                <View style={styles.rowContent}>
                                    <Text style={styles.txtLbl}>{rowData.sName}</Text>
                                </View>
                            </Image>
                        </TouchableOpacity>
                    )}
                />
            </ParallaxScrollView>
        );
    }
}

Schools.propTypes = {
    onSchoolInfoPress: React.PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        backgroundColor: COLORS.clrWhite
    },
    listViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        borderWidth: 1,
        borderColor: COLORS.clrWhite
    },
    imgContain: {
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null,
        resizeMode: 'cover',
        backgroundColor: 'transparent'
    },
    rowContent: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: (width/2)-2,
        height: (width/3)
    },
    txtLbl: {
        fontSize: 18,
        color: COLORS.clrWhite,
        fontWeight: '600',
        justifyContent: 'center'
    }
});

export default Schools;