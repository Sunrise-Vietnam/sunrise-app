import React from 'react';
import Schools from './Schools.js';
import Routes from '../';

const onSchoolInfoPress = (navigator, schoolName) => {
    return navigator.push(Routes.getSchoolInfoRoute(schoolName));
};

const SchoolsContainer = (props) => {
    return (
        <Schools
            {...props}
            onSchoolInfoPress ={(schoolName) => onSchoolInfoPress(props.navigator, schoolName)}
        />
    );
};

SchoolsContainer.propTypes = {
    navigator: React.PropTypes.object
};

export default SchoolsContainer;
