import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/index';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-checkbox';
import Meteor, { connectMeteor } from 'react-native-meteor';
import _ from 'lodash'
class SearchForCourses extends Component {
    constructor(props){
        super(props);
        let form = {
            hovaten : null,
            ngaysinh : null,
            hoclop : null,
            hoctruong : null,
            sodienthoai : null,
            email : null,
            diem_ielts: null,
            //note: null,
            ielts: false,
            toefl: false,
            sat: false,
            hoten_me: null,
            sodienthoai_me: null,
            email_me: null,
            source: '"zKip6ZGQ4oeAvozAX"'
        };
        this.state = {
            date: new Date(),
            form : form
        };
        this.setFormFieldValue = this.setFormFieldValue.bind(this);
        this.RegisterForm = this.RegisterForm.bind(this)
    }
    setFormFieldValue(fieldName, value){
        let form = this.state.form;
        form = Object.assign(form, {[fieldName] : value});
        this.setState({form : form})
    }
    RegisterForm(){
        let form = this.state.form
        let note = 'Nhu cầu học : '
        if(form.ielts) note += 'ielts,'
        if(form.toefl) note += 'toefl,'
        if(form.sat) note += 'sat'
        if(note !== 'Nhu cầu học : '){
            form = _.extend(_.omit(form,['ielts','toefl','sat']), { note : note})
        }
        Meteor.call('insertRegister', form, (e, r) => {
            console.info(e, r)
        })
    }
    render() {
        return (
            <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                <View>
                    <Image style={styles.headerImg} source={require('./search-for-courses.png')}/>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Họ và tên</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.hovaten} onChangeText={(e)=> this.setFormFieldValue('hovaten', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Ngày sinh</Text>
                        <View style={styles.bgInput}>
                        <DatePicker
                            style={styles.bgDate}
                            date={this.state.date}
                            mode="date"
                            format="DD-MM-YYYY"
                            minDate="01-01-1940"
                            maxDate="31-12-2015"
                            confirmBtnText="Xong"
                            cancelBtnText="Huỷ"
                            onDateChange={(date) => {
                                this.setFormFieldValue('ngaysinh', date);
                                this.setState({date: date})}}
                        />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Lớp</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.hoclop} onChangeText={(e)=> this.setFormFieldValue('hoclop', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Trường</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.hoctruong} onChangeText={(e)=> this.setFormFieldValue('hoctruong', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Số điện thoại</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.sodienthoai} onChangeText={(e)=> this.setFormFieldValue('sodienthoai', e)}
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
                            style={styles.bgInput} value={this.state.form.diem_ielts} onChangeText={(e)=> this.setFormFieldValue('diem_ielts', e)}
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
                            style={styles.bgInput} value={this.state.form.hoten_me} onChangeText={(e)=> this.setFormFieldValue('hoten_me', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Số điện thoại</Text>
                        <TextInput
                            style={styles.bgInput} value={this.state.form.sodienthoai_me} onChangeText={(e)=> this.setFormFieldValue('sodienthoai_me', e)}
                            />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtLabel}>Email</Text>
                        <TextInput
                            style={styles.bgInput}  value={this.state.form.email_me} onChangeText={(e)=> this.setFormFieldValue('email_me', e)}
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
        overflow: 'hidden',
        borderTopColor: '#FF7200',
        borderTopWidth: 50
    },
    headerImg: {
        flex: 1,
        width: window.width,
        height: 100,
        marginBottom: 20,
        resizeMode: 'stretch'
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
        marginVertical: 5
    },
    labelCheckbox: {
        color: COLORS.clrBlack,
        fontSize: 15
    },
    btnOrange: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 150,
        margin: 5,
        borderRadius: 4,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.clrOrange
    },
    txtWhite: {
        color: COLORS.clrWhite,
        fontWeight: '700',
        fontSize: 20
    }
});

export default SearchForCourses