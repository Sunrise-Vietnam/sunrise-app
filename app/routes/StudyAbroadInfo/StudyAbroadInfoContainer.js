import React from 'react';
import StudyAbroadInfo from './StudyAbroadInfo';
import Routes from '../';

const onSearchForCoursesPress = (navigator) => {
    return navigator.push(Routes.getSearchForCoursesRoute());
};

const onEventsPress = (navigator) => {
    return navigator.push(Routes.getEventsRoute());
};

const onCountriesPress = (navigator) => {
    return navigator.push(Routes.getCountriesRoute());
};

const onSharePress = (navigator) => {
    return navigator.push(Routes.getShareRoute());
};

const onStudyEnglishPress = (navigator) => {
    return navigator.push(Routes.getStudyEnglishRoute());
};

const onAboutPress = (navigator) => {
    return navigator.push(Routes.getAboutRoute());
};

const StudyAbroadInfoContainer = (props) => {
    return (
        <StudyAbroadInfo
            onSearchForCoursesPress={() => onSearchForCoursesPress(props.navigator)}
            onEventsPress={() => onEventsPress(props.navigator)}
            onCountriesPress={() => onCountriesPress(props.navigator)}
            onSharePress={() => onSharePress(props.navigator)}
            onStudyEnglishPress={() => onStudyEnglishPress(props.navigator)}
            onAboutPress={() => onAboutPress(props.navigator)}
        />
    );
};

StudyAbroadInfoContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default StudyAbroadInfoContainer;
