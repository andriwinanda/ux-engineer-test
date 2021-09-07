/* eslint-disable react/prop-types */
/* eslint-disable no-void */
import React from 'react';
import '../../styles'



export const Card = ({
  className,
  differentiator = 'action',
  disabled = false,
  color = 'bg-white',
  onClick = () => void {},
  style,
  onMouseDown,
  onMouseUp,
  ...props
}) => {
  return (
    <div
      className={[
        className,
        `${!disabled ? 'opacity-100' : 'opacity-50'}`,
        `${
          differentiator === 'action' ? 'shadow-card cursor-pointer' : 'border border-whisper cursor-default shadow-none'
        }`,
        'rounded-lg font-itemku',
        `${color}`,
      ].join(' ')}
      onClick={onClick}
      style={style}
      onMouseDown={onMouseDown && onMouseDown}
      onMouseUp={onMouseUp && onMouseUp}
      {...props}></div>
  );
};

export default Card;
