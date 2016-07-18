import React from 'react';
import StudyEnglish from './StudyEnglish';
import Routes from '../';

const onStudyTipsPress = (navigator) => {
    return navigator.push(Routes.getStudyTipsRoute());
};

const onTestSchedulePress = (navigator) => {
    return navigator.push(Routes.getTestScheduleRoute());
};

const onStudySchedulePress = (navigator) => {
    return navigator.push(Routes.getStudyScheduleRoute());
};

const StudyEnglishContainer = (props) => {
    return (
        <StudyEnglish
            onStudyTipsPress={() => onStudyTipsPress(props.navigator)}
            onTestSchedulePress={() => onTestSchedulePress(props.navigator)}
            onStudySchedulePress={() => onStudySchedulePress(props.navigator)}
        />
    );
};

StudyEnglishContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default StudyEnglishContainer;
