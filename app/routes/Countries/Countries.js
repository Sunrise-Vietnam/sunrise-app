import React, { Component } from 'react';
import { StyleSheet, Text, ListView, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { COLORS } from '../../styles/index.js';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import config from '../../config.js';
import Meteor, { connectMeteor } from 'react-native-meteor';

/*let countriesData = immutable.fromJS([
    {"img":"http://system.sunrisevietnam.com/countries/ha-lan.png","lbl":"Hà Lan"},
    {"img":"http://system.sunrisevietnam.com/countries/new-zealand.png","lbl":"New Zealand"},
    {"img":"http://system.sunrisevietnam.com/countries/han-quoc.png","lbl":"Hàn Quốc"},
    {"img":"http://system.sunrisevietnam.com/countries/nhat-ban.png","lbl":"Nhật Bản"},
    {"img":"http://system.sunrisevietnam.com/countries/malaysia.png","lbl":"Malaysia"},
    {"img":"http://system.sunrisevietnam.com/countries/philippines.png","lbl":"Phillipines"},
    {"img":"http://system.sunrisevietnam.com/countries/thai-lan.png","lbl":"Thái Lan"}
]);*/

let width = Dimensions.get('window').width;

class Countries extends Component {
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            countriesData : null
        };
        this._renderRow = this._renderRow.bind(this)
    }

    componentWillMount(){
        const self = this;
        Meteor.call('getCountriesData', (e,rs) => {
            //console.log(rs);
            self.setState({
                countriesData : rs
            });
        });
        //console.log(countriesData)
    }

    _renderRow(rowData){
        return <View style={styles.row}>
            <TouchableOpacity onPress={()=>{this.props.onCountryInfoPress(rowData)}}>
                <Image style={styles.image} source={{uri: rowData.logo}} />
            </TouchableOpacity>
            <Text style={styles.txtLbl}>{rowData.name}</Text>
        </View>
    }

    render(){
        const countriesData = this.state.countriesData;
        return (
            countriesData && <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                <ListView
                    contentContainerStyle={styles.listViewStyle}
                    dataSource={this.ds.cloneWithRows(countriesData)}
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
        height: (width/2)-20,
        width: (width/2),
        marginBottom: 8
        //borderWidth: 1,
        //borderColor: 'black',
    },
    image: {
        width: (width/2)-60,
        height: (width/2)-40,
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    txtLbl: {
        fontSize: 15,
        color: COLORS.clrBlack,
        fontWeight: '600'
    }
});

export default Countries;