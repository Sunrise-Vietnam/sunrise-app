import React, { Component } from 'react';
import { ListView, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Image } from 'react-native';
import { COLORS } from '../../styles/index';

import { SwipeListView } from 'react-native-swipe-list-view';

class Events extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            listViewData: [
                {"txtDate":"03","txtTitle":"Học bổng dự bị đại học - dự bị thạc sỹ ISC UK & EU - Study Group","txtDetail":"Hà Nội, Chủ nhật, 16h00 - 17h30"},
                {"txtDate":"06","txtTitle":"Queensland University of Technology - Úc","txtDetail":"Hà Nội, Thứ 4, 16h00 - 17h00"},
                {"txtDate":"07","txtTitle":"Đại học Auburn - Top 50 trường đại học công lập tốt nhất Hoa Kỳ","txtDetail":"Hà Nội, Thứ 5, 10h00 - 11h30"},
                {"txtDate":"08","txtTitle":"Hội thảo chuyên đề Creative Industry với trường đại học công nghệ Queensland - Úc","txtDetail":"Hồ Chí Minh, Thứ 6, 15h30 - 17h00"},
                {"txtDate":"09","txtTitle":"Săn học bổng A-level, Abbey DLD College","txtDetail":"Hà Nội, Thứ 7, 14h30 - 16h30"},
                {"txtDate":"10","txtTitle":"Con đường ngắn nhất để học thạc sỹ tại Anh và Hà Lan","txtDetail":"Hà Nội, Chủ nhật, 15h00 - 17h00"},
                {"txtDate":"10","txtTitle":"Học bổng dự bị đại học - dự bị thạc sỹ ISC UK & EU - Study Group","txtDetail":"Hà Nội, Chủ nhật, 15h00 - 17h00"},
                {"txtDate":"10","txtTitle":"Săn học bổng A-level, Abbey DLD College","txtDetail":"Hồ Chí Minh, Chủ nhật, 14h30 - 16h30"},
                {"txtDate":"11","txtTitle":"Royal Holloway University of London - UK","txtDetail":"Hà Nội, Thứ 2, 14h00 - 16h00"},
                {"txtDate":"12","txtTitle":"Chương trình Pathway với trường đại học công nghệ Queensland - Úc","txtDetail":"Hồ Chí Minh, Thứ 3, 13h30 - 15h30"},
                {"txtDate":"17","txtTitle":"Sunrise Vietnam Networking Event","txtDetail":"Hà Nội, Chủ nhật, 17h00 - 20h00"},
                //{"txtDate":"","txtTitle":"","txtDetail":""},
            ]
        };
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({listViewData: newData});
    }
    render() {
        disableRightSwipe: true;
        return (
            <View style={styles.container}>
                <SwipeListView
                    dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow={ data => (
						<TouchableHighlight
							onPress={ _ => console.log('You touched me') }
							underlayColor={'#AAA'}
						>
							<View style={styles.rowFront}>
							    <View style={{flexDirection: 'row', flex: 2}}>
							        <Image source={require('./line.png')} style={styles.frontImg}/>
							        <Text style={[styles.frontDate,styles.frontText]}>{data.txtDate}</Text>
							    </View>
							    <View style={styles.details}>
							        <Text style={[styles.frontTitle,styles.frontText]}>{data.txtTitle}</Text>
								    <Text style={[styles.frontDetail,styles.frontText]}>{data.txtDetail}</Text>
								</View>
							</View>
						</TouchableHighlight>
					)}
                    renderHiddenRow={ (data, secId, rowId, rowMap) => (
						<View style={styles.rowBack}>
							<TouchableOpacity style={[styles.backLeftBtn, styles.backLeftBtnLeft]} onPress={ _ => this.deleteRow(secId, rowId, rowMap) }>
								<Image style={[styles.backImg, {width: 16, height: 16}]} source={require('./delete.png')}/>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.backLeftBtn, styles.backLeftBtnRight]}>
								<Image style={[styles.backImg, {width: 20, height: 20,}]} source={require('./check.png')}/>
							</TouchableOpacity>
						</View>
					)}
                    leftOpenValue={150}
                    rightOpenValue={0}
                    disableLeftSwipe={true}
                    //onRowOpen={ }
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        backgroundColor: 'white',
    },
    rowFront: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.clrBlack,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
    },
    rowFrontOpen: {
        backgroundColor: COLORS.clrOrange,
    },
    frontImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 20,
        width:10,
        marginHorizontal: 10,
        resizeMode: 'contain',
    },
    frontText: {
        color: COLORS.clrWhite
    },
    frontDate: {
        flex: 1,
        fontSize: 48,
        alignSelf: 'center',
    },
    details: {
        flex: 4,
        marginRight: 10,
        alignItems: 'center',
    },
    frontTitle: {
        fontSize: 15,
        marginBottom: 10,
    },
    frontDetail: {
        fontSize: 11,
        alignSelf: 'flex-start',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: COLORS.clrWhite,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backLeftBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: COLORS.clrWhite,
    },
    backLeftBtnLeft: {
        left: 0
    },
    backLeftBtnRight: {
        left: 75
    },
    backImg: {
        alignSelf: 'center',
        resizeMode: 'contain',
        justifyContent: 'center',
    },

});

export default Events;