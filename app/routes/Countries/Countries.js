import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles/index.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.clrWhite,
    },
    row: {
        flex: 1,
    },
    country: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    lbl: {
        fontSize: 14,
        color: COLORS.clrBlack,
        textAlign: 'center',
        fontWeight: '600'
    }
});
let src = '';
const Countries = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Anh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Mỹ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Úc</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Canada</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Thuỵ Sĩ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Phần Lan</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Hà Lan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>New Zealand</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Singapore</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Hàn Quốc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Nhật Bản</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Malaysia</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Trung Quốc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.country} onPress={props.onCountryPress}>
                    <Image
                        style={styles.image}
                        source={src}
                        />
                    <Text style={styles.lbl}>Thái Lan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

Countries.propTypes = {
    onCountryPress: React.PropTypes.func,
};

export default Countries;
