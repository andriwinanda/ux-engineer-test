
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atoms/icon';


export const FullscreenImage = (props) => {
 
  return (
    <div className="fixed h-full w-full mx-auto bg-nero z-40 max-w-600px" style={{ touchAction: 'none' }}>
      <div className="fixed top-0 py-3 px-3 z-100" onClick={props.onClick}>
        <Icon name="arrow-left" size="medium" color="white" />
      </div>
      <div>
        <div
          className="top-1/2 fixed flex w-full max-w-600px"
          style={{ transform: 'translateY(-50%)' }}
        >
          <img
            draggable={false}
            src={props.image_url}
            alt={props.image_title}
            className={'w-auto mx-auto object-cover' }
          />
        </div>
      </div>
    </div>
  )
}
FullscreenImage.propTypes = {
  image_url: PropTypes.string,
  image_title: PropTypes.string,
  onClick: PropTypes.func
}
export default FullscreenImage