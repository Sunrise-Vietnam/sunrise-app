import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/index';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-checkbox';
//import _ from 'lodash'

class SearchForCourses extends Component {
    constructor(props){
        super(props);
        let form = {
            fullName : null,
            bod : null,
            className : null,
            schoolName : null,
            tel : null,
            email : null,
            score: null,
            ielts: false,
            toefl: false,
            sat: false,
            parentsName: null,
            parentsTel: null,
            parentsEmail: null,

        }
        this.state = {
            date: new Date(),
            form : form
        }
        this.setFormFieldValue = this.setFormFieldValue.bind(this)
        this.RegisterForm = this.RegisterForm.bind(this)
    }
    setFormFieldValue(fieldName, value){
        let form = this.state.form
        form = Object.assign(form, {[fieldName] : value})
        this.setState({form : form})
    }
    RegisterForm(){
        console.info(this.state.form)
    }
    render() {
        return (
            <ParallaxScrollView style={{ flex: 1, overflow: 'hidden', borderTopColor: '#FF7200', borderTopWidth: 50, }}
                                parallaxHeaderHeight={ 0 }>
                <View>
                    <Image style={{flex: 1, width: window.width, height: 100, marginBottom: 20, resizeMode: 'stretch'}} source={require('./search-for-courses.png')}/>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Họ và tên</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.fullName} onChangeText={(e)=> this.setFormFieldValue('fullName', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Ngày sinh</Text>
                        <View style={styles.bgInput}>
                        <DatePicker
                            style={styles.bgDate}
                            date={this.state.date}
                            mode="date"
                            format="DD - MM - YYYY"
                            minDate="01-01-1940"
                            maxDate="31-12-2015"
                            confirmBtnText="Xong"
                            cancelBtnText="Huỷ"
                            onDateChange={(date) => {this.setState({date: date});}}
                        />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Lớp</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.className} onChangeText={(e)=> this.setFormFieldValue('className', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Trường</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.schoolName} onChangeText={(e)=> this.setFormFieldValue('schoolName', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Số điện thoại</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.tel} onChangeText={(e)=> this.setFormFieldValue('tel', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Email</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.email} onChangeText={(e)=> this.setFormFieldValue('email', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Điểm IELTS/TOEFL</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.score} onChangeText={(e)=> this.setFormFieldValue('score', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Có nhu cầu luyện</Text>
                        <View style={{flexDirection: 'row'}}>
                        <View style={styles.cbGroup}>
                            <CheckBox
                                label='IELTS'
                                labelBefore={true}
                                labelStyle={styles.labelCheckbox}
                                checked={this.state.form.ielts}
                                onChange={(checked) => this.setFormFieldValue('ielts', checked)}
                            />
                        </View>
                        <View style={styles.cbGroup}>
                            <CheckBox
                                label='TOEFL'
                                labelBefore={true}
                                labelStyle={styles.labelCheckbox}
                                checked={this.state.form.toefl}
                                onChange={(checked) => this.setFormFieldValue('toefl', checked)}
                                />
                        </View>
                        <View style={styles.cbGroup}>
                            <CheckBox
                                label='SAT'
                                labelBefore={true}
                                labelStyle={styles.labelCheckbox}
                                checked={this.state.form.sat}
                                onChange={(checked) => this.setFormFieldValue('sat', checked)}
                                />
                        </View>
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Phụ huynh</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.parentsName} onChangeText={(e)=> this.setFormFieldValue('parentsName', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Số điện thoại</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.parentsTel} onChangeText={(e)=> this.setFormFieldValue('parentsTel', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Email</Text>
                        <TextInput
                            style={styles.bgInput}  value={this.state.form.parentsEmail} onChangeText={(e)=> this.setFormFieldValue('parentsEmail', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <TouchableOpacity style={styles.btnOrange} onPress={this.RegisterForm}>
                            <Text style={styles.txtWhite}>
                                ĐĂNG KÝ
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ParallaxScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputGroup: {
        marginBottom: 10
    },
    txtLabel: {
        color: COLORS.clrBlack,
        fontWeight: '700',
        fontSize: 13,
        marginLeft: 10
    },
    bgInput: {
        backgroundColor: COLORS.clrLiGray,
        //fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        height: 40
    },
    bgDate: {
        width: 250,
        borderWidth: 0
    },
    cbGroup: {
        marginRight: 25,
        marginVertical: 5,
    },
    labelCheckbox: {
        color: COLORS.clrBlack,
        fontSize: 15,
    },
    btnOrange: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 150,
        margin: 5,
        borderRadius: 4,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.clrOrange,
    },
    txtWhite: {
        color: COLORS.clrWhite,
        fontWeight: '700',
        fontSize: 20
    },

});

export default SearchForCourses;