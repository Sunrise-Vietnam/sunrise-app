import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/index';

const StudyEnglish = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.onStudyTipsPress}>
                <Image style={styles.imgLogo} source={require('../StudyAbroadInfo/search.png')}/>
                <Text style={styles.txtBlack}>
                    BÍ KÍP HỌC TIẾNG ANH
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.onTestSchedulePress}>
                <Image style={styles.imgLogo} source={require('../StudyAbroadInfo/timetable.png')}/>
                <Text style={styles.txtBlack}>
                    LỊCH THI IELTS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.onStudySchedulePress}>
                <Image style={styles.imgLogo} source={require('../StudyAbroadInfo/school.png')}/>
                <Text style={styles.txtBlack}>
                    LỊCH KHAI GIẢNG
                </Text>
            </TouchableOpacity>
        </View>
    );
};

StudyEnglish.propTypes = {
    onStudyTipsPress: React.PropTypes.func,
    onTestSchedulePress: React.PropTypes.func,
    onStudySchedulePress: React.PropTypes.func,
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


export default StudyEnglish;