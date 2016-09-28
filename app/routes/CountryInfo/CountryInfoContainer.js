import React from 'react';
import CountryInfo from './CountryInfo';
import Routes from '../';

const onSchoolsPress = (navigator, key) => {
    return navigator.push(Routes.getSchoolsRoute(key));
};

const CountryInfoContainer = (props) => {
    return (
        <CountryInfo
            {...props}
            onSchoolsPress={(key) => onSchoolsPress(props.navigator, key)}/>
    );
};

CountryInfoContainer.propTypes = {
    navigator: React.PropTypes.object
};

export default CountryInfoContainer;
