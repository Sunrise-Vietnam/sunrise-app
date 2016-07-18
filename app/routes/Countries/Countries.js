import React, { Component } from 'react';
import { StyleSheet, Text, ListView, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { COLORS } from '../../styles/index.js';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import immutable from 'immutable'
import ImmutableDataSource from 'react-native-immutable-listview-datasource'

let countriesData = immutable.fromJS([
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-anh.png","lbl":"Anh"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-my.png","lbl":"Mỹ"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-australia.png","lbl":"Úc"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-canada.png","lbl":"Canada"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-thuy-si.png","lbl":"Thụy Sỹ"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-phan-lan.png","lbl":"Phần Lan"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-ha-lan.png","lbl":"Hà Lan"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-newzealnd.png","lbl":"New Zealand"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-singapore.png","lbl":"Singapore"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-han-quoc.png","lbl":"Hàn Quốc"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-nhat-ban.png","lbl":"Nhật Bản"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-malaysia.png","lbl":"Malaysia"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-trung-quoc.png","lbl":"Trung Quốc"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-trung-quoc.png","lbl":"Phillipines"},
    {"img":"http://photo.sunrisevietnam.com///2015/7/22/anh-thai-lan.png","lbl":"Thái Lan"},
]);

let width = Dimensions.get('window').width;

class Countries extends Component {
    constructor(){
        super()
        let ds = new ImmutableDataSource()
        this.state = {ds : ds.cloneWithRows(countriesData)}
        this._renderRow = this._renderRow.bind(this)
    }
    _renderRow(rowData){
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
    onCountryInfoPress: React.PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        backgroundColor: COLORS.clrWhite,
    },
    listViewStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        height: (window.width/3),
        width: (width/2),
        marginBottom: 10,
        //borderWidth: 1,
        //borderColor: 'black',
    },
    image: {
        width: (width/2)-40,
        height: (width/2)-40,
        //justifyContent: 'center',
        resizeMode: 'contain',
    },
    txtLbl: {
        fontSize: 13,
        color: COLORS.clrBlack,
        fontWeight: '600'
    }
});

export default Countries;