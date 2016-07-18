import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/index';

const FollowStudent = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.onLogInPress}>
                <Image style={styles.imgLogo} source={require('./user.png')} />
                <Text style={styles.txtBlack}>
                    THEO DÕI HỌC SINH DU HỌC
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.onStudyProgressPress}>
                <Image style={styles.imgLogo} source={require('./check.png')} />
                <Text style={styles.txtBlack}>
                    THEO DÕI HỌC TẬP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.onForCustomersPress}>
                <Image style={styles.imgLogo} source={require('./gift.png')} />
                <Text style={styles.txtBlack}>
                    TRI ÂN KHÁCH HÀNG
                </Text>
            </TouchableOpacity>
        </View>
    );
};

FollowStudent.propTypes = {
    onLogInPress: React.PropTypes.func,
    onStudyProgressPress: React.PropTypes.func,
    onForCustomersPress: React.PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: COLORS.clrGreen,
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


export default FollowStudent;