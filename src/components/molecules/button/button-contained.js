/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../atoms/button';
import '../../../styles'



export const ButtonContained = ({ withIcon = false, iconNameProp = 'trash-can-outline', iconPosition = 'left', full = false, big = false, label = 'Contained', disabled = false, differentiator = 'purchasing', onClick, isLoading = false, ...props }) => {
  const backgroundActive = 'bg-persimmon';
  return (
    <Button
      className={[`${disabled ? 'bg-nobel' : backgroundActive}`, 'min-w-100px', `${big ? 'h-40px' : 'h-32px'}`, 'rounded-lg', 'text-white', 'font-bold', 'px-20px', 'flex flex-row justify-center items-center', `${full ? 'w-100%' : 'w-auto'}`, isLoading && 'skeleton'].join(' ')}
      label={
        <div className={`flex ${iconPosition === 'left' && 'flex-row-reverse'}`}>
          <div className={`h-4 leading-4 self-center ${iconPosition === 'left' && withIcon ? 'ml-1' : iconPosition === 'right' && withIcon ? 'mr-1' : ''}`}>{label}</div>
        </div>
      }
      onClick={isLoading ? () => null : onClick}
      type={props.type}
      {...props}></Button>
  );
};

export default ButtonContained;
