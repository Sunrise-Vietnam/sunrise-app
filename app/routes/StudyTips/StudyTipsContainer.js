import React from 'react';
import StudyTips from './StudyTips';
import Routes from '../';

const onTipDetailPress = (navigator, postID) => {
    return navigator.push(Routes.getTipDetailRoute(postID));
};

const StudyTipsContainer = (props) => {
    return (
        <StudyTips
            onTipDetailPress ={(postID) => onTipDetailPress(props.navigator, postID)}
        />
    );
};

StudyTipsContainer.propTypes = {
    navigator: React.PropTypes.object
};

export default StudyTipsContainer;
