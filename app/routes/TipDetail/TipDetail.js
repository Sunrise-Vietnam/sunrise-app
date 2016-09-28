import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/index';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import config from '../../config.js';
import Meteor, { connectMeteor } from 'react-native-meteor';
import Loading from '../../components/Loading';

let width = Dimensions.get('window').width;

class TipDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData : null
        }
    }

    componentWillMount() {
        let postID = this.props.postID;
        const self = this;
        Meteor.call('getEduPost', postID,(e, rs)=>{
            self.setState({
                postData : rs
            });
        });
    }

    render() {
        if (!this.state.postData) {
            return <Loading/>
        }
        else {
            return (
                <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                    <Text>test</Text>
                </ParallaxScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: COLORS.clrOrange,
        borderTopWidth: 50,
        alignItems: 'center',
    },
});


export default TipDetail;