import React, { Component } from 'react';
import { StyleSheet, Dimensions, ListView, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { COLORS } from '../../styles/index';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

let width = Dimensions.get('window').width;

class StudySchedule extends Component {
    handleClick() {
        Linking.canOpenURL(this.url).then(supported => {
            if (supported) {
                Linking.openURL(this.url);
            } else {
                console.log('Don\'t know how to open');
            }
        });
    }
    render () {
        return (
            <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                <View>
                    <Text style={[styles.txtBlack, styles.txtTitle]}>TUYỂN SINH LIÊN TỤC CÁC LỚP TIẾNG ANH</Text>
                    <TouchableOpacity style={styles.row} onPress={this.handleClick} url={'http://sunrise.edu.vn/luyen-thi-ielts-tai-sunrise-academy/cac-khoa-hoc-ielts/'}>
                        <Image style={styles.image} source={require('./schedule_one.png')} />
                        <View style={styles.titleView}>
                            <Text style={[styles.txtBlack, styles.txtLbl]}>Lịch khai giảng các lớp IELTS, TOEFL, TOEIC</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row} onPress={this.handleClick} url={'http://sunrise.edu.vn/khoa-hoc/cac-khoa-tieng-anh-cho-tre-em-sunrise-smart-kids/'}>
                        <Image style={styles.image} source={require('./schedule_two.png')} />
                        <View style={styles.titleView}>
                            <Text style={[styles.txtBlack, styles.txtLbl]}>Lịch khai giảng các lớp tiếng Anh trẻ em</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row} onPress={this.handleClick} url={'http://sunrise.edu.vn/khoa-hoc/tieng-anh-giao-tiep/'}>
                        <Image style={styles.image} source={require('./schedule_three.png')} />
                        <View style={styles.titleView}>
                            <Text style={[styles.txtBlack, styles.txtLbl]}>Lịch khai giảng các lớp tiếng Anh giao tiếp</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnOrange} onPress={this.props.onCourseRegisterPress}>
                        <Text style={styles.txtWhite}>
                            ĐĂNG KÝ NGAY
                        </Text>
                    </TouchableOpacity>
                    <Text style={[styles.txtNote, styles.txtBlack]}>Ghi chú: Kiểm tra trình độ tiếng Anh mọi lứa tuổi tất cả các ngày trong tuần</Text>
                    <Text style={[styles.txtTitle, styles.txtBlack]}>ĐT: 093.789.8950</Text>
                </View>
            </ParallaxScrollView>
        );
    }
}

StudySchedule.propTypes = {
    onCourseRegisterPress: React.PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        borderTopColor: COLORS.clrOrange,
        borderTopWidth: 50,
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: (width/4),
        width: width,
        marginBottom: 12
    },
    image: {
        width: (width/4) + 20,
        height: (width/4),
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    titleView: {
        width: (width/4)*3 - 20,
        backgroundColor: COLORS.clrLiGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtLbl: {
        fontSize: 13,
        fontWeight: '600',
        marginHorizontal: 30
    },
    txtTitle: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 17,
        fontWeight: '600'
    },
    txtNote: {
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: 10
    },
    txtBlack: {
        color: COLORS.clrBlack
    },
    btnOrange: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        margin: 10,
        borderRadius: 4,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.clrOrange
    },
    txtWhite: {
        color: COLORS.clrWhite,
        fontWeight: '700',
        fontSize: 17
    }
});

export default StudySchedule;