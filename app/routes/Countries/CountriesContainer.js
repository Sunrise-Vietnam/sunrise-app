import React from 'react';
import Countries from './Countries.js';
import Routes from '../';

const onCountryInfoPress = (navigator, key) => {
    return navigator.push(Routes.getCountryInfoRoute(key));
};

const CountriesContainer = (props) => {
    return (
        <Countries
            onCountryInfoPress ={(key) => onCountryInfoPress(props.navigator, key)}
        />
    );
};

CountriesContainer.propTypes = {
    navigator: React.PropTypes.object
};

export default CountriesContainer;
