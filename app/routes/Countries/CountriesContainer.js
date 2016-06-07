import React from 'react';
import Countries from './Countries';
import Routes from '../';

const onCountryPress = (navigator) => {
    return navigator.push(Routes.getCountryInfoRoute());
};

const CountriesContainer = (props) => {
    return (
        <Home
            onCountryPress={() => onCountryPress(props.navigator)}
            />
    );
};

CountriesContainer.propTypes = {
    navigator: React.PropTypes.object,
};

export default CountriesContainer;
