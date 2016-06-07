import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import Index from './layouts/Index.js';
import Loading from './components/Loading';
import config from './config';

Meteor.connect(config.METEOR_URL);

const SRVNApp = (props) => {
	const { status} = props;

	if (status.connected === false) {
		return <Loading />;
	} else {
		return <Index />;
	}
};

SRVNApp.propTypes = {
	status: React.PropTypes.object
};

export default createContainer(() => {
	return {
		status: Meteor.status()
	};
}, SRVNApp);