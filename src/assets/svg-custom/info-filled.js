/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const InfoFilled = ({ color = 'nero', size = '24', ...props }) => {
  
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.875 12C19.875 16.3492 16.3492 19.875 12 19.875C7.65076 19.875 4.125 16.3492 4.125 12C4.125 7.65076 7.65076 4.125 12 4.125C16.3492 4.125 19.875 7.65076 19.875 12ZM11.25 16.125V10.875H12.75V16.125H11.25ZM12.0375 9.75C12.5553 9.75 12.975 9.33027 12.975 8.8125C12.975 8.29473 12.5553 7.875 12.0375 7.875C11.5197 7.875 11.1 8.29473 11.1 8.8125C11.1 9.33027 11.5197 9.75 12.0375 9.75Z"
        fill={color}
      />
    </svg>
  );
};

InfoFilled.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
  }
