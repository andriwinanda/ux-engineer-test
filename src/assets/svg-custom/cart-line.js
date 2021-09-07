/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const CartLine = ({ color = 'nero', size = '24', ...props }) => {
  
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
        d="M3.98452 3.0375C3.59107 2.90799 3.16713 3.12195 3.03762 3.5154C2.90811 3.90885 3.12208 4.33279 3.51552 4.4623L4.24725 4.70316L6.36639 14.3573C6.59296 15.3895 7.50731 16.1249 8.56407 16.1249H15.82C16.8868 16.1249 17.8069 15.3758 18.0233 14.3313L19.1107 9.08126C19.4 7.68476 18.3336 6.3749 16.9075 6.3749H6.14992L5.63856 4.04529C5.57255 3.73678 5.34773 3.48622 5.04772 3.38747L3.98452 3.0375ZM7.83151 14.0357L6.47918 7.8749H16.9075C17.3829 7.8749 17.7383 8.31152 17.6419 8.77702L16.5544 14.027C16.4823 14.3752 16.1756 14.6249 15.82 14.6249H8.56407C8.21182 14.6249 7.90703 14.3798 7.83151 14.0357Z"
        fill={color}
      />
      <path
        d="M11.25 19.8749C11.25 21.1175 10.2427 22.1249 9.00002 22.1249C7.75738 22.1249 6.75002 21.1175 6.75002 19.8749C6.75002 18.6323 7.75738 17.6249 9.00002 17.6249C10.2427 17.6249 11.25 18.6323 11.25 19.8749Z"
        fill={color}
      />
      <path
        d="M17.25 19.8749C17.25 21.1175 16.2427 22.1249 15 22.1249C13.7574 22.1249 12.75 21.1175 12.75 19.8749C12.75 18.6323 13.7574 17.6249 15 17.6249C16.2427 17.6249 17.25 18.6323 17.25 19.8749Z"
        fill={color}
      />
    </svg>
  );
};

CartLine.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
  }