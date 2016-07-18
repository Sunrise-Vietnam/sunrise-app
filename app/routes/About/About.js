import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/index';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

const About = (props) => {
    return (
        <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
            <View>
                <Image style={styles.imgContain} source={require('./map.png')}>
                    <View style={styles.mainContent}>
                        <View style={{marginTop: 30}}>
                            <Text style={[styles.txtRed,styles.txtBold]}>CÔNG TY TNHH THÁI DƯƠNG VIỆT NAM</Text>
                            <Text style={[styles.txtRed,styles.txtBold]}>TƯ VẤN DU HỌC VÀ ĐÀO TẠO NGOẠI NGỮ</Text>
                        </View>
                        <Text style={[styles.txtOrange, styles.txtBold]}>TRỤ SỞ CHÍNH HÀ NỘI</Text>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('../StudyAbroadInfo/location.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>Địa chỉ: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>86 Cửa Bắc, Ba Đình</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('./phone.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>ĐT: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>(04) 3722 4898 * 3722 4878</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('./fax.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>Fax: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>(04) 3722 4855</Text>
                        </View>
                        <Text style={[styles.txtOrange, styles.txtBold]}>VĂN PHÒNG HẢI PHÒNG</Text>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('../StudyAbroadInfo/location.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>Địa chỉ: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>29 Nguyễn Trãi, Ngô Quyền</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('./phone.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>ĐT: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>(031) 264 0689 * 365 3269</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('./fax.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>Fax: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>(031) 373 2895</Text>
                        </View>
                        <Text style={[styles.txtOrange, styles.txtBold]}>VĂN PHÒNG TIMES CITY</Text>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('../StudyAbroadInfo/location.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>Địa chỉ: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>Khu văn phòng T5-L2-01 Times City,</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Text style={[{flex: 1}, {marginLeft: 20}]}></Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>458 Minh Khai, Hai Bà Trưng, Hà Nội</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('./phone.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>ĐT: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>(04) 3204 8333 * 3200 4743</Text>
                        </View>
                        <Text style={[styles.txtOrange, styles.txtBold]}>VĂN PHÒNG HỒ CHÍ MINH</Text>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('../StudyAbroadInfo/location.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>Địa chỉ: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>Lầu 7 toà nhà Thanh Dung,</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Text style={[{flex: 1}, {marginLeft: 20}]}></Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>179 Nguyễn Cư Trinh, quận 1</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('./phone.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>ĐT: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>(08) 3837 0176 * 3837 0226</Text>
                        </View>
                        <View style={styles.rowInfo}>
                            <Image style={styles.imgIcon} source={require('./fax.png')}/>
                            <Text style={[styles.txtBlack, styles.txtBold, {flex: 1}]}>Fax: </Text>
                            <Text style={[styles.txtBlack, {flex: 3}]}>(08) 3836 0940</Text>
                        </View>
                    </View>
                </Image>
                <Image style={styles.bgGray} source={require('./bg-footer.png')}>
                    <View style={styles.rowInfo}>
                        <Image/>
                        <Text style={[styles.txtWhite, styles.txtBold, {flex: 1}]}>Website: </Text>
                        <Text style={[styles.txtWhite, {flex: 3}]}>www.sunrisevietnam.com</Text>
                    </View>
                    <View style={styles.rowInfo}>
                        <Text style={{flex: 1}}></Text>
                        <Text style={[styles.txtWhite, {flex: 3}]}>www.sunrise.edu.vn</Text>
                    </View>
                    <View style={styles.rowInfo}>
                        <Image/>
                        <Text style={[styles.txtWhite, styles.txtBold, {flex: 1}]}>Facebook: </Text>
                        <Text style={[styles.txtWhite, {flex: 3}]}>www.facebook.com/thaiduong.vietnam</Text>
                    </View>
                    <View style={styles.rowInfo}>
                        <Image/>
                        <Text style={[styles.txtWhite, styles.txtBold, {flex: 1}]}>Email: </Text>
                        <Text style={[styles.txtWhite, {flex: 3}]}>info@sunrisevietnam.com</Text>
                    </View>
                </Image>
            </View>
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
    },
    imgContain: {
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        height: null,
        width: null,
        marginHorizontal: 10,

    },
    mainContent: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        paddingBottom: 20
    },
    txtRed: {
        color: COLORS.clrRed,
        fontSize: 17,
        alignSelf: 'center',
    },
    txtOrange: {
        color: COLORS.clrOrange,
        fontSize: 15,
        marginTop: 15,
        marginLeft: 25,
        marginBottom: 3,
    },
    rowInfo: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    imgIcon: {
        marginRight: 10,
        width: 10,
        height: 10,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    txtBold: {
        fontWeight: '700'
    },
    txtBlack: {
        color: COLORS.clrBlack,
        fontSize: 13,
    },
    bgGray: {
        resizeMode: 'cover',
        height: null,
        width: null,
        padding: 10,
    },
    txtWhite: {
        color: COLORS.clrWhite,
    }
});


export default About;