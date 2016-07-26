import React from 'react';
import Countries from './Countries.js';
import Routes from '../';

const onCountryInfoPress = (navigator, label) => {
    return navigator.push(Routes.getCountryInfoRoute(label));
};

const CountriesContainer = (props) => {
    return (
        <Countries
            onCountryInfoPress ={(label) => onCountryInfoPress(props.navigator, label)}
        />
    );
};

CountriesContainer.propTypes = {
    navigator: React.PropTypes.object
};

export default CountriesContainer;
