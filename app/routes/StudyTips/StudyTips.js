import React, { Component } from 'react';
import { StyleSheet, Dimensions, ListView, TouchableOpacity, Image, View, Text } from 'react-native';
import { COLORS } from '../../styles/index';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import immutable from 'immutable';
import ImmutableDataSource from 'react-native-immutable-listview-datasource';

import Api from '../../RssToJson.js';

let width = Dimensions.get('window').width;

let tipsData = immutable.fromJS([
    {"postID":"p_00001","postImage":"http://system.sunrisevietnam.com/countries/anh.png","postTitle":"Anh"},
    {"postID":"p_00002","postImage":"http://system.sunrisevietnam.com/countries/my.png","postTitle":"Mỹ"},
    {"postID":"p_00003","postImage":"http://system.sunrisevietnam.com/countries/australia.png","postTitle":"Úc"},
    {"postID":"p_00004","postImage":"http://system.sunrisevietnam.com/countries/canada.png","postTitle":"Canada"},
    {"postID":"p_00005","postImage":"http://system.sunrisevietnam.com/countries/thuy-si.png","postTitle":"Thụy Sỹ"},
    {"postID":"p_00006","postImage":"http://system.sunrisevietnam.com/countries/singapore.png","postTitle":"Singapore"},
    {"postID":"p_00007","postImage":"http://system.sunrisevietnam.com/countries/trung-quoc.png","postTitle":"Trung Quốc"},
    /*{"postImage":"http://system.sunrisevietnam.com/countries/phan-lan.png","postTitle":"Phần Lan"},
     {"postImage":"http://system.sunrisevietnam.com/countries/ha-lan.png","postTitle":"Hà Lan"},
     {"postImage":"http://system.sunrisevietnam.com/countries/new-zealand.png","postTitle":"New Zealand"},
     {"postImage":"http://system.sunrisevietnam.com/countries/han-quoc.png","postTitle":"Hàn Quốc"},
     {"postImage":"http://system.sunrisevietnam.com/countries/nhat-ban.png","postTitle":"Nhật Bản"},
     {"postImage":"http://system.sunrisevietnam.com/countries/malaysia.png","postTitle":"Malaysia"},
     {"postImage":"http://system.sunrisevietnam.com/countries/philippines.png","postTitle":"Phillipines"},
     {"postImage":"http://system.sunrisevietnam.com/countries/thai-lan.png","postTitle":"Thái Lan"}*/
]);

class StudyTips extends Component {
    constructor(){
        super();
        let ds = new ImmutableDataSource();
        this.state = {
            ds : ds.cloneWithRows(tipsData)
        };
        this._renderRow = this._renderRow.bind(this)
    }
    componentDidMount(){
        const rssUrl = 'http://sunrise.edu.vn/category/thu-vien-tai-lieu/bai-hoc-moi-ngay/moi-ngay-mot-cau-truyen/feed/'
        Api.fetchRss2(rssUrl).then((rss) => {
            console.dir(rss)
        })
    }
    _renderRow(rowData){
        return  <TouchableOpacity style={styles.row} onPress={()=>{this.props.onTipDetailPress(rowData.get('postID'))}}>
                    <Image style={styles.image} source={{uri: rowData.get('postImage')}} />
                    <View style={styles.titleView}>
                        <Text style={styles.txtPostTitle}>{rowData.get('postTitle')}</Text>
                    </View>
                </TouchableOpacity>
    }
    render() {
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

StudyTips.propTypes = {
    onTipDetailPress: React.PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#FF7200',
        borderTopWidth: 50
    },
    listViewStyle: {},
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'center',*/
        height: (width/4),
        width: width,
        marginVertical: 12
        //borderWidth: 1,
        //borderColor: 'black',
    },
    image: {
        width: (width/4) + 20,
        height: (width/4),
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    titleView: {
        width: (width/4)*3 - 20,
        backgroundColor: COLORS.clrLiGray,
        justifyContent: 'center',
        alignItems: 'center',
        //textAlign: 'center'
    },
    txtPostTitle: {
        fontSize: 14,
        color: COLORS.clrBlack,
        fontWeight: '600'
    }
});

export default StudyTips;