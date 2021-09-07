/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const MinPayment = ({ color = 'nero', size = '24', ...props }) => {
  
  return (
    <svg width={size} {...props} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 7C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H19ZM19 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V16C2 16.7956 2.31607 17.5587 2.87868 18.1213C3.44129 18.6839 4.20435 19 5 19H19C19.7956 19 20.5587 18.6839 21.1213 18.1213C21.6839 17.5587 22 16.7956 22 16V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7956 5 19 5Z"
        fill={color}
      />
      <path
        d="M12 11C12.1978 11 12.3911 11.0586 12.5556 11.1685C12.72 11.2784 12.8482 11.4346 12.9239 11.6173C12.9996 11.8 13.0194 12.0011 12.9808 12.1951C12.9422 12.3891 12.847 12.5673 12.7071 12.7071C12.5673 12.847 12.3891 12.9422 12.1951 12.9808C12.0011 13.0194 11.8 12.9996 11.6173 12.9239C11.4346 12.8482 11.2784 12.72 11.1685 12.5556C11.0587 12.3911 11 12.1978 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11ZM12 9C11.4067 9 10.8266 9.17595 10.3333 9.50559C9.83994 9.83524 9.45543 10.3038 9.22836 10.8519C9.0013 11.4001 8.94189 12.0033 9.05765 12.5853C9.1734 13.1672 9.45912 13.7018 9.87868 14.1213C10.2982 14.5409 10.8328 14.8266 11.4147 14.9424C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6962 14.5446 14.1648 14.1601 14.4944 13.6667C14.8241 13.1734 15 12.5933 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7957 9 12 9Z"
        fill={color}
      />
      <path d="M8 16H6C5.73478 16 5.48043 15.8946 5.29289 15.7071C5.10536 15.5196 5 15.2652 5 15C5 14.7348 5.10536 14.4804 5.29289 14.2929C5.48043 14.1054 5.73478 14 6 14H8C8.26522 14 8.51957 14.1054 8.70711 14.2929C8.89464 14.4804 9 14.7348 9 15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16Z" fill={color} />
      <path d="M18 10H16C15.7348 10 15.4804 9.89464 15.2929 9.70711C15.1054 9.51957 15 9.26522 15 9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8H18C18.2652 8 18.5196 8.10536 18.7071 8.29289C18.8946 8.48043 19 8.73478 19 9C19 9.26522 18.8946 9.51957 18.7071 9.70711C18.5196 9.89464 18.2652 10 18 10Z" fill={color} />
    </svg>
  );
};

MinPayment.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
  }