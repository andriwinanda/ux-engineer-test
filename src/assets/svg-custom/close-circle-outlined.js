/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const CloseCircleOutlined = ({ color = 'nero', size = '24', ...props }) => {
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 0H0V32H32V0Z"
        fill="white"
      />
      <path
        d="M26 16C26 17.9778 25.4135 19.9112 24.3147 21.5557C23.2159 23.2002 21.6541 24.4819 19.8268 25.2388C17.9996 25.9957 15.9889 26.1937 14.0491 25.8079C12.1093 25.422 10.3275 24.4696 8.92894 23.0711C7.53041 21.6725 6.578 19.8907 6.19215 17.9509C5.8063 16.0111 6.00433 14.0004 6.76121 12.1732C7.51809 10.3459 8.79981 8.78412 10.4443 7.6853C12.0888 6.58649 14.0222 6 16 6C18.6522 6 21.1957 7.05357 23.0711 8.92893C24.9464 10.8043 26 13.3478 26 16Z"
        fill="white"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13L13 19L19 13Z"
        fill="white"
      />
      <path
        d="M19 13L13 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13L19 19L13 13Z"
        fill="white"
      />
      <path
        d="M13 13L19 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CloseCircleOutlined.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
  }
