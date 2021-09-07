/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles'


export const Button = ({ className, label, id, onClick , onBlur, onFocus, capitalize = true, type = 'button', ...props }) => {
  return (
    <button type={type} className={['button','align-middle', 'justify-center', 'items-center', 'cursor-pointer', 'font-itemku', 'text-lg', `${capitalize ? 'capitalize' : ''}`, className].join(' ')} onClick={onClick} onBlur={onBlur} onFocus={onFocus} {...props} id={id}>
      <div>{label}</div>
    </button>
  );
};

Button.propTypes  = {
  className: PropTypes.string,
  label: PropTypes.any,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  capitalize: PropTypes.bool,
  id: PropTypes.any,
  type: PropTypes.oneOf(['button' , 'submit' , 'reset'])
}
Button.defaultProps = {
 
};
export default Button;
