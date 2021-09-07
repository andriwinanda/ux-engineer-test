import React from 'react';
import '../../styles'
import PropTypes from 'prop-types';



export const Divider = (props) => {
    let dividerView = '';
    switch (props.differentiator) {
        case 'plain':
            dividerView = `border-b border-whisper w-full ${props.className}`;
            break;
        case 'filled':
            dividerView = `w-full h-3 bg-whiteSmoke ${props.className}`;
            break;
        default:
    }

    return <div className={dividerView} id={props.id} />;
};
Divider.propTypes = {
    differentiator: PropTypes.oneOf(['plain', 'filled']).isRequired,
    className: PropTypes.string,
    id: PropTypes.any,
}

Divider.defaultProps = {
    differentiator: 'plain',
};

export default Divider;
