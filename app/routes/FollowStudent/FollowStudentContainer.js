import React from 'react';
import FollowStudent from './FollowStudent';
import Routes from '../';

const onLogInPress = (navigator) => {
    return navigator.push(Routes.getLogInRoute());
};

const onStudyProgressPress = (navigator) => {
    return navigator.push(Routes.getStudyProgressRoute());
};

const onForCustomersPress = (navigator) => {
    return navigator.push(Routes.getForCustomersRoute());
};

const FollowStudentContainer = (props) => {
    return (
        <FollowStudent
            onLogInPress={() => onLogInPress(props.navigator)}
            onStudyProgressPress={() => onStudyProgressPress(props.navigator)}
            onForCustomersPress={() => onForCustomersPress(props.navigator)}
        />
    );
};

export default FollowStudentContainer;
