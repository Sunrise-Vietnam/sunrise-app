import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles';

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.clrWhite,
        margin: 5,
        borderRadius:4
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

const Button = (props) => {
    const { text, onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
};

Button.defaultProps = {
    text: 'Button Text',
    onPress: () => console.log('Button Pressed'),
};

export default Button;
