import React, { Component } from 'react';
import { StyleSheet, Text, ListView, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { COLORS } from '../../styles/index.js';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import immutable from 'immutable';
import ImmutableDataSource from 'react-native-immutable-listview-datasource';

import config from '../../config.js';
import Meteor, { connectMeteor } from 'react-native-meteor';

/*import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';*/

let countriesData = immutable.fromJS([
    {"img":"http://system.sunrisevietnam.com/countries/anh.png","lbl":"Anh"},
    {"img":"http://system.sunrisevietnam.com/countries/my.png","lbl":"Mỹ"},
    {"img":"http://system.sunrisevietnam.com/countries/australia.png","lbl":"Úc"},
    {"img":"http://system.sunrisevietnam.com/countries/canada.png","lbl":"Canada"},
    {"img":"http://system.sunrisevietnam.com/countries/thuy-si.png","lbl":"Thụy Sỹ"},
    {"img":"http://system.sunrisevietnam.com/countries/singapore.png","lbl":"Singapore"},
    {"img":"http://system.sunrisevietnam.com/countries/trung-quoc.png","lbl":"Trung Quốc"},
    /*{"img":"http://system.sunrisevietnam.com/countries/phan-lan.png","lbl":"Phần Lan"},
    {"img":"http://system.sunrisevietnam.com/countries/ha-lan.png","lbl":"Hà Lan"},
    {"img":"http://system.sunrisevietnam.com/countries/new-zealand.png","lbl":"New Zealand"},
    {"img":"http://system.sunrisevietnam.com/countries/han-quoc.png","lbl":"Hàn Quốc"},
    {"img":"http://system.sunrisevietnam.com/countries/nhat-ban.png","lbl":"Nhật Bản"},
    {"img":"http://system.sunrisevietnam.com/countries/malaysia.png","lbl":"Malaysia"},
    {"img":"http://system.sunrisevietnam.com/countries/philippines.png","lbl":"Phillipines"},
    {"img":"http://system.sunrisevietnam.com/countries/thai-lan.png","lbl":"Thái Lan"}*/
]);

let width = Dimensions.get('window').width;

class Countries extends Component {
    constructor(){
        super();
        let ds = new ImmutableDataSource();
        this.state = {
            ds : ds.cloneWithRows(countriesData)
        };
        this._renderRow = this._renderRow.bind(this)
    }
    _renderRow(rowData){
        console.log(rowData.get('img'))
        return <View style={styles.row}>
            <TouchableOpacity onPress={()=>{this.props.onCountryInfoPress(rowData.get('lbl'))}}>
                <Image style={styles.image} source={{uri: rowData.get('img')}} />
            </TouchableOpacity>
            <Text style={styles.txtLbl}>{rowData.get('lbl')}</Text>
        </View>
    }
    render(){
        return (
            <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                <ListView contentContainerStyle={styles.listViewStyle}
                          dataSource={this.state.ds}
                          renderRow={this._renderRow}
                />
            </ParallaxScrollView>
        );
    }
}

Countries.propTypes = {
    onCountryInfoPress: React.PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        backgroundColor: COLORS.clrWhite
    },
    listViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        height: (width/3)+4,
        width: (width/3),
        marginVertical: 12,
        //borderWidth: 1,
        //borderColor: 'black',
    },
    image: {
        width: (width/3)-24,
        height: (width/3)-10,
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    txtLbl: {
        fontSize: 14,
        color: COLORS.clrBlack,
        fontWeight: '600'
    }
});

export default Countries;