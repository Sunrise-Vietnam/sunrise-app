import React, { Component } from 'react';
import { ListView, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Image } from 'react-native';
import { COLORS } from '../../styles/index';

import { SwipeListView } from 'react-native-swipe-list-view';

import config from '../../config.js';
import Meteor, { connectMeteor } from 'react-native-meteor';
import Loading from '../../components/Loading';

class Events extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            eventsData: null
        };
    }
    componentWillMount(){
        const self = this;
        Meteor.call('getEventsInfo', (e, rs) => {
            console.log(rs)
            self.setState({
                eventsData : rs
            });
        });
    }
    /*deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({listViewData: newData});
    }*/
    render() {
        if(!this.state.eventsData)
        {
            return <Loading/>
        } else {
            return (
                <View style={styles.container}>
                    <SwipeListView
                        dataSource={this.ds.cloneWithRows(this.state.eventsData)}
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
								<Image style={[styles.backImg, {width: 20, height: 20}]} source={require('./check.png')}/>
							</TouchableOpacity>
						</View>
					    )}
                        leftOpenValue={0}
                        rightOpenValue={0}
                        disableLeftSwipe={true}
                        disableRightSwipe={true}
                        //onRowOpen={ }
                        />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        borderTopColor: '#FF7200',
        borderTopWidth: 50,
        backgroundColor: 'white'
    },
    rowFront: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.clrBlack,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10
    },
    rowFrontOpen: {
        backgroundColor: COLORS.clrOrange
    },
    frontImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 20,
        width:10,
        marginHorizontal: 10,
        resizeMode: 'contain'
    },
    frontText: {
        color: COLORS.clrWhite
    },
    frontDate: {
        flex: 1,
        fontSize: 48,
        alignSelf: 'center'
    },
    details: {
        flex: 4,
        marginRight: 10,
        alignItems: 'center'
    },
    frontTitle: {
        fontSize: 15,
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    frontDetail: {
        fontSize: 11,
        alignSelf: 'flex-start'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: COLORS.clrWhite,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15
    },
    backLeftBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: COLORS.clrWhite
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
        justifyContent: 'center'
    }
});

export default Events;