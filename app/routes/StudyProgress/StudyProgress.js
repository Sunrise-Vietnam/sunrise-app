import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/index';

const StudyProgress = (props) => {
    return (
        <View style={styles.container}>
            <Text>test</Text>
        </View>
    );
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 310,
        backgroundColor: COLORS.clrGray,
        margin: 5,
        borderRadius:4,
        alignItems: 'center',
    },
    btnBlack: {
        color: COLORS.clrBlack,
        fontWeight: '700'
    },
    txtRed: {
        color: COLORS.clrRed,
        fontWeight: '700'
    },
    txtOrange: {
        color: COLORS.clrOrange,
        fontWeight: '700'
    },
});


export default StudyProgress;