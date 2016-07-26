import React, { Component } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity  } from 'react-native';
import { COLORS } from '../../styles/index';

const Home = (props) => {
    return (
        <Image source={require('./home.png')} style={styles.container}>
            <Image style={styles.img} source={require('./Logo.png')}/>
            <Text style={styles.txtTitle}>DU HỌC SUNRISE VIETNAM</Text>
            <TouchableOpacity style={styles.button} onPress={props.onStudyAbroadInfoPress}>
                <Text style={[styles.txtButton, styles.txtOrange]}>
                    TÌM HIỂU THÔNG TIN DU HỌC
                </Text>
            </TouchableOpacity>
            <Text style={[styles.txtButton, styles.txtWhite]}>Phiên bản Beta</Text>
            {/*<TouchableOpacity style={styles.button} onPress={props.onFollowStudentPress}>
                <Text style={[styles.txtButton, styles.txtGreen]}>
                    THEO DÕI HỌC SINH DU HỌC
                </Text>
            </TouchableOpacity>*/}
        </Image>
    );
};

Home.propTypes = {
    onStudyAbroadInfoPress: React.PropTypes.func,
    onFollowStudentPress: React.PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null
    },
    img: {
        marginBottom: 45
    },
    txtTitle: {
        color: COLORS.clrWhite,
        fontWeight: '700',
        fontSize: 25,
        bottom: 5
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 300,
        backgroundColor: COLORS.clrWhite,
        margin: 10,
        borderRadius: 6,
        alignItems: 'center'
    },
    txtButton: {
        fontWeight: '700',
        fontSize: 18
    },
    txtOrange: {
        color: COLORS.clrOrange
    },
    txtGreen: {
        color: COLORS.clrGreen
    },
    txtWhite: {
        marginTop: 20,
        color: COLORS.clrWhite
    }
});

export default Home;
