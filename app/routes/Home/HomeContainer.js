import React from 'react';
import Home from './Home';
import Routes from '../';

const onStudyAbroadInfoPress = (navigator) => {
    return navigator.push(Routes.getDirectOneRoute());
};

const onFollowStudentPress = (navigator) => {
    return navigator.push(Routes.getDirectTwoRoute());
};

const HomeContainer = (props) => {
    return (
        <Home
            onStudyAbroadInfoPress={() => onStudyAbroadInfoPress(props.navigator)}
            onFollowStudentPress={() => onFollowStudentPress(props.navigator)}
            />
    );
};

HomeContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default HomeContainer;
