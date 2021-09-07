/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../atoms/button';
import '../../../styles'


export const ButtonText = ({
  color = 'text-cyanBlue',
  withIcon = false,
  iconNameProp = 'plus',
  label = 'Button Text',
  disabled = false,
  onClick,
  className,
  capitalize = true,
  ...props
}) => {
  function disableClick() {}
  return (
    <Button
      capitalize={capitalize}
      className={[
        
        `${disabled ? 'text-nobel' : color}`,
        'font-bold',
        'flex flex-row justify-center items-center',
        `${className}`
      ].join(' ')}
      label={
        <div className={'flex flex-row-reverse justify-center items-center'}>
          <div className={'h-4 leading-tight self-center'}>{label}</div>
        </div>
      }
      onClick={disabled ? disableClick : onClick}
      {...props}
    ></Button>
  );
};

export default ButtonText;
