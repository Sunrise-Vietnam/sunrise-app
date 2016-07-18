import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/index';
import Routes from '../routes/index';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <View style={styles.contain}>
                <View style={{flexDirection: 'row', paddingHorizontal: 10,}}>
                    <Image style={styles.imgLogo} source={require('../routes/Home/Logo.png')} />
                    <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center',}}>
                        <Text style={styles.txtTitle}>DU HỌC</Text>
                        <Text style={styles.txtTitle}>SUNRISE VIETNAM</Text>
                    </View>
                </View>
                <View style={styles.section}><Text style={[styles.txtSection, styles.txtWhite]}>TÌM HIỂU THÔNG TIN DU HỌC</Text>
                <TouchableOpacity style={styles.rowContent} onPress={this.props.onSearchForCoursesPress}>
                    <Image style={styles.imgContent} source={require('./male.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Tìm kiếm khoá học</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContent} onPress={this.props.onEventsPress}>
                    <Image style={styles.imgContent} source={require('./timetable.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Lịch sự kiện</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContent} onPress={this.props.onCountriesPress}>
                    <Image style={styles.imgContent} source={require('./school.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Thăm quan trường</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContent} onPress={this.props.onSharePress}>
                    <Image style={styles.imgContent} source={require('./male.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Du học sinh chia sẻ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContent}>
                    <Image style={styles.imgContent} source={require('./book.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Học tiếng Anh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContent} onPress={this.props.onAboutPress}>
                    <Image style={styles.imgContent} source={require('./location.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Liên hệ</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.section}>
                <Text style={[styles.txtSection, styles.txtWhite]}>THEO DÕI HỌC SINH DU HỌC</Text>
                <TouchableOpacity style={styles.rowContent}>
                    <Image style={styles.imgContent} source={require('./user.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Theo dõi tiến trình hồ sơ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContent} onPress={this.props.onStudyProgressPress}>
                    <Image style={styles.imgContent} source={require('./check.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Theo dõi học tập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContent} onPress={this.props.onForCustomersPress}>
                    <Image style={styles.imgContent} source={require('./gift.png')}/>
                    <Text style={[styles.txtContent, styles.txtWhite]}>Tri ân khách hàng</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }};

Menu.propTypes = {
    onStudyAbroadInfoPress: React.PropTypes.func,
    onSearchForCoursesPress: React.PropTypes.func,
    onEventsPress: React.PropTypes.func,
    onCountriesPress: React.PropTypes.func,
    onSharePress: React.PropTypes.func,
    onAboutPress: React.PropTypes.func,
    onFollowStudentPress: React.PropTypes.func,
    onLogInPress: React.PropTypes.func,
    onStudyProgressPress: React.PropTypes.func,
    onForCustomersPress: React.PropTypes.func,

};

const onStudyAbroadInfoPress = (navigator) => {
    return navigator.push(Routes.getStudyAbroadInfoRoute());
};

const onSearchForCoursesPress = (navigator) => {
    return navigator.push(Routes.getSearchForCoursesRoute());
};

const onEventsPress = (navigator) => {
    return navigator.push(Routes.getEventsRoute());
};

const onCountriesPress = (navigator) => {
    return navigator.push(Routes.getCountriesRoute());
};

const onSharePress = (navigator) => {
    return navigator.push(Routes.getShareRoute());
};

const onAboutPress = (navigator) => {
    return navigator.push(Routes.getAboutRoute());
};

const onFollowStudentPress = (navigator) => {
    return navigator.push(Routes.getFollowStudentRoute());
};

const onLogInPress = (navigator) => {
    return navigator.push(Routes.getLogInRoute());
};

const onStudyProgressPress = (navigator) => {
    return navigator.push(Routes.getStudyProgressRoute());
};

const onForCustomersPress = (navigator) => {
    return navigator.push(Routes.getForCustomersRoute());
};

const MenuContainer = (props) => {
    return (
        <Menu
            onSearchForCoursesPress={() => onSearchForCoursesPress(props.navigator)}
            onEventsPress={() => onEventsPress(props.navigator)}
            onCountriesPress={() => onCountriesPress(props.navigator)}
            onSharePress={() => onSharePress(props.navigator)}
            onAboutPress={() => onAboutPress(props.navigator)}
            onLogInPress={() => onLogInPress(props.navigator)}
            onStudyProgressPress={() => onStudyProgressPress(props.navigator)}
            onForCustomersPress={() => onForCustomersPress(props.navigator)}
        />
    );
};

MenuContainer.propTypes = {
    navigator: React.PropTypes.object,
}

const styles = StyleSheet.create({
    contain: {
        flex:1,
        backgroundColor: COLORS.clrBlack
    },
    txtWhite: {
        color: COLORS.clrWhite,
        marginHorizontal: 10,
    },
    imgLogo: {
        flex: 1,
        resizeMode: 'contain',
        marginRight: 10,
    },
    txtTitle: {
        color: COLORS.clrWhite,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    section: {
        borderTopWidth: 1,
        borderTopColor: 'black',
        marginTop: 5,
        paddingTop: 5,
    },
    txtSection: {
        marginVertical: 5,
        fontWeight: 'bold',
    },
    rowContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    imgContent: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
    },
    txtContent: {
    }
});

export default MenuContainer