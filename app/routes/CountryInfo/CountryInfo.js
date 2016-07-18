import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Dimensions } from 'react-native';
import { COLORS } from '../../styles';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import config from '../../config.js'

let width = Dimensions.get('window').width;

import Meteor, { connectMeteor } from 'react-native-meteor';

class CountryInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            countryData : null
        }

    }
    componentWillMount(){
        let label = this.props.label;
        const self = this
        Meteor.call('getInfoCountry',label,(e,rs)=>{
            self.setState({
                countryData : rs
            })
            //return rs
        })
        //return countryData
    }
    _toggleExpanded = () => {
        this.setState({collapsed: !this.state.collapsed});
    }

    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={300}
                             style={[styles.header, isActive ? styles.activeHeader : styles.inactiveHeader]}
                             transition="backgroundColor">
                <Text
                    style={[styles.headerText, isActive ? styles.activeText : styles.inactiveText]}>{section.title}</Text>
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
            <Animatable.View duration={300}
                             style={styles.content}
                             transition="backgroundColor">
                <Animatable.Image
                    duration={300}
                    easing="ease-out"
                    animation={isActive ? 'zoomIn' : false}
                    style={styles.contentImg}
                    source={{uri: config.METEOR_SERVER + section.content}}/>
            </Animatable.View>
        );
    }

    render() {
        const countryData = this.state.countryData
        return (
            <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                {countryData && <View>
                    <Image style={styles.banner} source={{uri: config.METEOR_SERVER + countryData.imgHeader }} />
                    <Accordion
                        sections={countryData.countryContent}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        duration={400}
                        />
                </View>}
            </ParallaxScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        alignItems: 'center',
        //overflow: 'hidden'
    },
    banner: {
        resizeMode: 'stretch',
        justifyContent: 'center',
        marginHorizontal: 0,
        width: width+50,
        height: width/3,
    },
    header: {
        backgroundColor: COLORS.clrBlack,
        padding: 10,
        borderTopWidth: 10,
        borderTopColor: 'white'
    },
    headerText: {
        color: COLORS.clrWhite,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    content: {
        flex: 1,
        padding: 20
    },
    contentImg: {
        height: width/2,
        width: window.width,
        marginHorizontal: 15,
        resizeMode: 'contain',
    },
    activeHeader: {
        backgroundColor: COLORS.clrGray,
    },
    inactiveHeader: {
        backgroundColor: COLORS.clrBlack,
    },
    activeText: {
        color: COLORS.clrBlack,
    },
    inactiveText: {
        color: COLORS.clrWhite,
    },
});

export default CountryInfo;
