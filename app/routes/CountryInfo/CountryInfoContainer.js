import React from 'react';
import CountryInfo from './CountryInfo';
import Routes from '../';

const CountryInfoContainer = (props) => {
    //console.log(props)
    return (
        <CountryInfo {...props}/>
    );
};

export default CountryInfoContainer;
