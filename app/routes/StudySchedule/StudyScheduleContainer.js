import React from 'react';
import StudySchedule from './StudySchedule';
import Routes from '../';

const onCourseRegisterPress = (navigator) => {
    return navigator.push(Routes.getCourseRegisterRoute());
};

const StudyScheduleContainer = (props) => {
    return (
        <StudySchedule onCourseRegisterPress={() => onCourseRegisterPress(props.navigator)} />
    );
};

export default StudyScheduleContainer;
