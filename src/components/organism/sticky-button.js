/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonContained from '../molecules/button/button-contained';


export const StickyButton = ({ differentiator = 'purchasing', disabled = false, label = 'Beli langsung', withIcon = false, iconNameProp = 'trash-can-outline', iconPosition = 'right', onClick = () => alert('beli'), ...props }) => {
  const handleClick = () => {
    onClick && !disabled && onClick();
  };
  return (
    <div
      id="sticky"
      className={[
        'h-14',
        'w-full',
        'bg-white',
        'flex',
        'flex-row',
        'items-center',
        'justify-center',
        'shadow-top',
        'px-4 py-2',
        'sticky',
        'bottom-0'
      ].join(' ')}
      {...props}
    >
      <ButtonContained
        differentiator={differentiator}
        big
        disabled={disabled}
        full
        label={label}
        withIcon={withIcon}
        iconNameProp={iconNameProp}
        iconPosition={iconPosition}
        onClick={handleClick}
      />
    </div>
  );
};


StickyButton.propTypes = {
  differentiator: PropTypes.oneOf(['purchasing' , 'non-purchasing']),
  disabled: PropTypes.bool,
  label: PropTypes.string,
  withIcon: PropTypes.bool,
  iconNameProp: PropTypes.oneOf(['trash-can-outline' , 'plus' , 'minus']),
  iconPosition: PropTypes.oneOf(['left' , 'right']),
  onClick: PropTypes.func,
}

export default StickyButton;
