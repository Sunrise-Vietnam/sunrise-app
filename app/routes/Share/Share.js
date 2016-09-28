import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { COLORS } from '../../styles/index';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

let width = Dimensions.get('window').width;

const CONTENT = [
    {
        imgTitle: 'https://fbbkcw.dm2301.livefilestore.com/y3mw3L_-pB3OjiZsnr9SJ1LVHCRStjwrFGab7sQMhOGAauL_ua4-pHqRhuti-TEinIHTIwAOmzpNIbUflYQi2MMr7KViTtfaVYSUG7ceAXFi3fWhIlwk6vDos4x0vPmCQmNNh04wbUzM1kJ1vxq65e6JNklOz4MXYicaivAZV3YSa0?width=640&height=213&cropmode=none',
        txtTitle: 'CĐCĐ PENINSULA, WA',
        content: 'Học cao đẳng tiết kiệm thời gian, chi phí khá nhiều. Vừa học, mình còn tham gia hoạt động thể thao, ngoại khoá nên cảm giác thú vị hơn rất nhiều. MÌnh cũng thấy việc học tại Mỹ giúp mình độc lập và trưởng thành hơn nhiều so với khi còn ở nhà.'
    },
    {
        imgTitle: 'https://exbscw.dm2301.livefilestore.com/y3mQLyBP_qR_BACJ1AOkA9c0mxQCMTYyR8PnlTizDCuMMBcWVv30_ypw4uIbZd54NFqWZS-IVSxxQ6xvMb1T95ByChjJ38BcZRLxVtnGU1TZCCg84fzZoOSifzZwtGzoprzmYsDtEVOlN3ckA7YhbwQFJzwuvl3q0FYOHpMehFKrZA?width=640&height=213&cropmode=none',
        txtTitle: 'Dự bị đại học',
        content: "Theo học CĐCĐ, điều đầu tiên em có được chính là kiến thức. Bên cạnh kiến thức chuyên môn trên ghế nhà trường, em còn học thêm nhiều kiến thức về những nền văn hoá khác nhau trên thế giới. Điều thứ hai em có được là thời gian. Bằng chương trình kép Hoàn thành phổ thông và Cao đẳng trong 2 năm, em đã có đủ thời gian để định hướng cho tương lai của bản thân."
    },
    {
        imgTitle: 'https://exbtcw.dm2301.livefilestore.com/y3mYXZHthEzoyYF1Vyq_Z_hehs553-6pHeO10y5uKgHf_hKQaWo1p0mwR1C02JwmYnCyDWVB2bU7pJ-01fBmWgWOLHMzZ0Thl52QrQHtMLD5EkH7ByGoDUfRctfRB8wL6slWH6gOr6oXIOgYxdZJyaXVsPeT4f2o6MMp4sxZuP3i6Y?width=640&height=213&cropmode=none',
        txtTitle: 'HỌC BỔNG 60% TẠI BOSWORTH COLLEGE, ANH',
        content: 'Trước khi đi du học, em cũng có nhiều điều bỡ ngỡ trong việc làm thủ tục, tuy nhiên rất may mắn vì được các anh chị và nhất là cô Hương ở trung tâm Sunrise hướng dẫn chu đáo nên em và bố mẹ cũng cảm thấy yên tâm hơn. Trong suốt 2 năm vừa qua, bố mẹ em cũng nắm bắt rõ tình hình học tập sinh hoạt của em qua các báo cáo nhận xét mỗi kì của trường gửi về qua trung tâm.'
    },
    {
        imgTitle: 'https://fbblcw.dm2301.livefilestore.com/y3m8BU60GcgoWeSvlgNMZpmhZZhryIqCEZA4urusl9VyO2cliErpl9btym7n_Qw015A6bh-lX7n6QFnFX48zQqhe2N55qJShi7hNWer0VSJTDxWvhq7fwTHK5nJEg1FGvsh59MyRKRyHH8c0Rb5fBSoMaGZr_YQjEs12_y0sZkrzIM?width=640&height=213&cropmode=none',
        txtTitle: 'DU HỌC SINH TẠI STONY BROOK SCHOOL, MA, MỸ',
        content: 'Stony Brook là ngôi trường rất tốt để theo học. Thời gian học trong trường giúp mình biết cách sống và suy nghĩ trong một môi trường đa văn hoá, đa tôn giáo. Các môn học ở trường như khoa học, lichj sử dạy rất tốt. Cơ sở vật chất đầy đủ và môn thể chất còn là môn bắt buộc nữa.'
    },
    {
        imgTitle: 'https://fbbncw.dm2301.livefilestore.com/y3mOLYH-tbVHyweTXQjeTqX9w2HWSe3lXCvEesUgqwyCjB8tXJUOsDrpNe9fovvIXupNr7vaPwroKTnWx_TlRA8PpRi_4C0_TbWGRHNvAjPPvxDudCNWIhJ3Nqhw9G0cFsRwPDwS0SFIa4ux8E3mOoJC02-ZLQnTCe2eSgAKTAFkWA?width=640&height=213&cropmode=none',
        txtTitle: 'HỌC BỔNG 50%, GIẢI NHÌ TẠI ABBEY HAS GOT TALENT, ABBEY COLLEGE, ANH',
        content: 'Quãng thời gian bên Anh đã giúp em phát triển 2 điều: Kỹ năng học và kỹ năng sống. Kỹ năng học bao gồm ngôn ngữ TA, kinh tế học, toán học, và cách mà nền giáo dục Anh đào tạo học sinh. Kỹ năng sống là các kỹ năng quản lý tài chính cá nhân, lập kế hoạch, biết quản lý thời gian và sống độc lập.'
    }
];

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {collapsed: false};
    }

    _toggleExpanded () {
        this.setState({collapsed: !this.state.collapsed});
    }

    _renderHeader(section, i, isActive) {
        return (
            <Animatable.View duration={300}
                             style={[styles.header/*, isActive ? styles.activeHeader : styles.inactiveHeader*/]}
                             transition="backgroundColor">
                <Image style={[styles.headerImage/*, isActive ? styles.activeImage : styles.inactiveImage*/]} source={{uri: section.imgTitle}} />
            </Animatable.View>
        );
    }

    _renderContent(section, i, isActive) {
        return (
            <Animatable.View duration={300}
                             style={[styles.content/*, isActive ? styles.active : styles.inactive*/]}
                             transition="backgroundColor">
                <Animatable.Text
                    style={[styles.activeText]}
                    duration={300}
                    easing="ease-out"
                    animation={isActive ? 'zoomIn' : false}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <ParallaxScrollView style={styles.container} parallaxHeaderHeight={ 0 }>
                <View>
                    <Accordion
                        sections={CONTENT}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        duration={400}
                        />
                </View>
            </ParallaxScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: '#FF7200',
        borderTopWidth: 50
    },
    header: {
        backgroundColor: 'rgba(30, 30, 30, 0.7)',
        flexDirection: 'row',
        height: 120,
        alignItems: 'center'
    },
    headerImage: {
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
        height: width/3,
        width: width
    },
    headerText: {
        flex: 2,
        color: COLORS.clrWhite,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight: 'normal'
    },
    content: {
        flex: 1,
        padding: 14,
        backgroundColor: COLORS.clrWhite
    },
    activeText: {
        fontStyle: 'italic'
    }
});

export default Share;