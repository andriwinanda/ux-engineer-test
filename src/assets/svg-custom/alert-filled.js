/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const AlertFilled = ({ color = 'nero', size = '24', ...props }) => {
  
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
        d="M19.875 12C19.875 16.3492 16.3492 19.875 12 19.875C7.65076 19.875 4.125 16.3492 4.125 12C4.125 7.65076 7.65076 4.125 12 4.125C16.3492 4.125 19.875 7.65076 19.875 12ZM12.975 15.1875C12.975 15.7053 12.5553 16.125 12.0375 16.125C11.5197 16.125 11.1 15.7053 11.1 15.1875C11.1 14.6697 11.5197 14.25 12.0375 14.25C12.5553 14.25 12.975 14.6697 12.975 15.1875ZM12.75 8.625C12.75 8.21079 12.4142 7.875 12 7.875C11.5858 7.875 11.25 8.21079 11.25 8.625V12.375C11.25 12.7892 11.5858 13.125 12 13.125C12.4142 13.125 12.75 12.7892 12.75 12.375V8.625Z"
        fill={color}
      />
    </svg>
  );
};

AlertFilled.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
  }
