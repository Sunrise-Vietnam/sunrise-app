import React from 'react';
import Home from './Home';
/*import About from './About';*/
import Countries from './Countries';
import CountryInfo from './CountryInfo';
import SchoolInfo from './SchoolInfo';
import StudyAbroadInfo from './StudyAbroadInfo';
/*import Search from './Search';*/

const Routes = {
    getHomeRoute() {
        return {
            renderScene(navigator) {
                return <Home navigator={navigator} />;
            },

            getTitle() {
                return 'Trang chủ';
            },
        };
    },
    getStudyAbroadInfoRoute() {
        return {
            renderScene(navigator) {
                return <StudyAbroadInfo navigator={navigator} />;
            },

            getTitle() {
                return 'Tìm hiểu thông tin du học';
            },
        };
    },
    getCountriesRoute() {
        return {
            renderScene(navigator) {
                return <Countries navigator={navigator} />;
            },

            getTitle() {
                return 'Thăm quan trường';
            },
        };
    },
    getCountryInfoRoute() {
        return {
            renderScene(navigator) {
                return <CountryInfo navigator={navigator} />;
            },

            getTitle() {
                return 'Thăm quan trường';
            },
        };
    },
    getSchoolInfoRoute() {
        return {
            renderScene(navigator) {
                return <SchoolInfo navigator={navigator} />;
            },

            getTitle() {
                return 'Thăm quan trường';
            },
        };
    },
};

export default Routes;
