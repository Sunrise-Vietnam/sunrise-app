import React, { Component } from 'react';
import { BackAndroid, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/index';

class StudyAbroadInfo extends Component {
    constructor(props) {
        super(props);
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.props.onSearchForCoursesPress}>
                    <Image style={styles.imgLogo} source={require('./search.png')}/>
                    <Text style={styles.txtBlack}>
                        TÌM KIẾM KHOÁ HỌC
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.props.onEventsPress}>
                    <Image style={styles.imgLogo} source={require('./timetable.png')}/>
                    <Text style={styles.txtBlack}>
                        LỊCH SỰ KIỆN HỘI THẢO
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.props.onCountriesPress}>
                    <Image style={styles.imgLogo} source={require('./school.png')}/>
                    <Text style={styles.txtBlack}>
                        THĂM QUAN TRƯỜNG
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.props.onSharePress}>
                    <Image style={styles.imgLogo} source={require('./male.png')}/>
                    <Text style={styles.txtBlack}>
                        DU HỌC SINH CHIA SẺ
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.props.onStudyEnglishPress}>
                    <Image style={styles.imgLogo} source={require('./book.png')}/>
                    <Text style={styles.txtBlack}>
                        HỌC TIẾNG ANH
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.props.onAboutPress}>
                    <Image style={styles.imgLogo} source={require('./location.png')}/>
                    <Text style={styles.txtBlack}>
                        LIÊN HỆ
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
};

StudyAbroadInfo.propTypes = {
    onSearchForCoursesPress: React.PropTypes.func,
    onEventsPress: React.PropTypes.func,
    onCountriesPress: React.PropTypes.func,
    onSharePress: React.PropTypes.func,
    onStudyEnglishPress: React.PropTypes.func,
    onAboutPress: React.PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 300,
        backgroundColor: COLORS.clrLiGray,
        margin: 5,
        borderRadius:4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 1.0,
    },
    imgLogo: {
        flex: 1,
        justifyContent: 'flex-end',
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    txtBlack: {
        flex: 3,
        color: COLORS.clrBlack,
        fontWeight: '700'
    }
});


export default StudyAbroadInfo;