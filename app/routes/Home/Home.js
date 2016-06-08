import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles';
import Button from '../../components/Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOrange: {
        color: COLORS.clrOrange
    },
    textGreen: {
        color: COLORS.clrGreen
    }
});

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image

            />
            <Button
                text="TÌM HIỂU THÔNG TIN DU HỌC"
                style={styles.textOrange}
            />
            <Button
                text="THEO DÕI HỌC SINH DU HỌC"
                style={styles.textGreen}
            />
        </View>
    );
};

Home.propTypes = {
    onCountryPress: React.PropTypes.func,
};

export default Home;
