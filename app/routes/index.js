import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Home from './Home';
import DirectOne from '../layouts/DirectOne';
import DirectTwo from '../layouts/DirectTwo';
import About from './About';
import Countries from './Countries';
import CountryInfo from './CountryInfo';
import Events from './Events';
import FollowStudent from './FollowStudent';
import ForCustomers from './ForCustomers';
import LogIn from './LogIn';
import SearchForCourses from './SearchForCourses';
import Share from './Share';
import StudentInfo from './StudentInfo';
import StudyAbroadInfo from './StudyAbroadInfo';
import StudyEnglish from './StudyEnglish';
import StudyProgress from './StudyProgress';
import StudySchedule from './StudySchedule';
import StudyTips from './StudyTips';
import TestSchedule from './TestSchedule';

const Routes = {
    getHomeRoute() {
        return {
            showNavigationBar: false,
	        renderScene(navigator) {
                return <Home navigator={navigator} />;
            },
        };
    },
    getDirectOneRoute() {
        return {
            renderScene(navigator) {
                return <DirectOne navigator={navigator}/>;
            },
        }
    },
    getDirectTwoRoute() {
        return {
            renderScene(navigator) {
                return <DirectTwo navigator={navigator}/>;
            },
        }
    },
    getStudyAbroadInfoRoute() {
        return {
            renderScene(navigator) {
                return <StudyAbroadInfo navigator={navigator} />;
            },
            getTitle() {
                return 'THÔNG TIN DU HỌC';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                            <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                        </TouchableOpacity>
            },
        };
    },
    getSearchForCoursesRoute() {
        return {
            renderScene(route, navigator) {
                return <SearchForCourses {...route.passProps} navigator={navigator} />;
            },
            getTitle() {
                return 'TÌM KIẾM KHOÁ HỌC'
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getEventsRoute() {
        return {
            renderScene(navigator) {
                return <Events navigator={navigator} />;
            },
            getTitle() {
                return 'LỊCH SỰ KIỆN HỘI THẢO';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getCountriesRoute() {
        return {
            renderScene(navigator) {
                return <Countries navigator={navigator} />;
            },
            getTitle() {
                return 'THĂM QUAN TRƯỜNG';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getCountryInfoRoute(label) {
        return {
            renderScene(navigator) {
                return <CountryInfo navigator={navigator} label={label}/>;
            },
            getTitle() {
                return 'THĂM QUAN TRƯỜNG';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getShareRoute() {
        return {
            renderScene(navigator) {
                return <Share navigator={navigator} />;
            },
            getTitle() {
                return 'DU HỌC SINH CHIA SẺ';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getStudyEnglishRoute() {
        return {
            renderScene(navigator) {
                return <StudyEnglish navigator={navigator} />;
            },
            getTitle() {
                return 'HỌC TIẾNG ANH';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getStudyTipsRoute() {
        return {
            renderScene(navigator) {
                return <StudyTips navigator={navigator} />;
            },
            getTitle() {
                return 'BÍ KÍP HỌC TIẾNG ANH';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getTestScheduleRoute() {
        return {
            renderScene(navigator) {
                return <TestSchedule navigator={navigator} />;
            },
            getTitle() {
                return 'LỊCH THI IELTS';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getStudyScheduleRoute() {
        return {
            renderScene(navigator) {
                return <StudySchedule navigator={navigator} />;
            },
            getTitle() {
                return 'LỊCH KHAI GIẢNG';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getAboutRoute() {
        return {
            renderScene(navigator) {
                return <About navigator={navigator} />;
            },
            getTitle() {
                return 'LIÊN HỆ';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getFollowStudentRoute() {
        return {
            renderScene(navigator) {
                return <FollowStudent navigator={navigator} />;
            },
            getTitle() {
                return 'THEO DÕI HỌC SINH DU HỌC';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getLogInRoute() {
        return {
            renderScene(navigator) {
                return <LogIn navigator={navigator} />;
            },
            getTitle() {
                return 'ĐĂNG NHẬP';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getStudentInfoRoute() {
        return {
            renderScene(navigator) {
                return <StudentInfo navigator={navigator} />;
            },
            getTitle() {
                return 'THEO DÕI HỌC SINH DU HỌC';
            },
            getBackButtonTitle() {
                return '';
            }
        };
    },
    getStudyProgressRoute() {
        return {
            renderScene(navigator) {
                return <StudyProgress navigator={navigator} />;
            },
            getTitle() {
                return 'THEO DÕI HỌC TẬP';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
    getForCustomersRoute() {
        return {
            renderScene(navigator) {
                return <ForCustomers navigator={navigator} />;
            },
            getTitle() {
                return 'TRI ÂN KHÁCH HÀNG';
            },
            getBackButtonTitle() {
                return '';
            },
            renderRightButton() {
                return  <TouchableOpacity>
                    <Image source={require('./search.png')} style={{width: 22,height: 22,marginTop: 14,marginRight: 8,}}/>
                </TouchableOpacity>
            },
        };
    },
};

export default Routes;
