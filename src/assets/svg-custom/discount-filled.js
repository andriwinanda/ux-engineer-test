/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const DiscountFilled = ({ color = 'nero', size = '24', ...props }) => {
  
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
        d="M12.7187 5.38642C12.5262 5.39112 12.3428 5.46969 12.2067 5.60587L5.25933 12.5532C4.96644 12.8461 4.92683 13.3606 5.21973 13.6535L10.523 18.9568C10.8159 19.2497 11.3304 19.2101 11.6233 18.9172L18.5706 11.9698C18.7068 11.8337 18.7854 11.6503 18.7901 11.4578L18.9153 6.32183C18.9345 5.88235 18.2942 5.24205 17.8547 5.26116L12.7187 5.38642ZM13.612 10.5645C14.4907 11.4431 15.9153 11.4431 16.794 10.5645C17.6727 9.68578 17.6727 8.26116 16.794 7.38248C15.9153 6.5038 14.4907 6.5038 13.612 7.38248C12.7334 8.26116 12.7334 9.68578 13.612 10.5645Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

DiscountFilled.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
  }
