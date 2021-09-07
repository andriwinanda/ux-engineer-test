import React from 'react';
import PropTypes from 'prop-types';



export const HeaderContainer = (props) => {
  const HeaderView = `flex w-full ${props.bgColor} ${props.capitalize ? 'capitalize' : ''} items-center h-12 text-xl px-4 z-10 font-normal ${props.className} border-none ${props.shadow ? 'shadow-bottom' : 'shadow-none'} `;
  return (
    <div className={HeaderView} id={props.id}>
      {props.children}
    </div>
  );
};

HeaderContainer.propTypes = {
  children: PropTypes.node,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  capitalize: PropTypes.bool,
  id: PropTypes.any,
}

HeaderContainer.defaultProps = {
  bgColor: 'bg-white',
  shadow: true,
  capitalize: true,
};

export default HeaderContainer;
