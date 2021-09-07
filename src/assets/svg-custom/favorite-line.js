/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const FavouriteLine = ({ color = 'nero', size = '24', ...props }) => {
  
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.2947 5.83069C18.8733 5.40884 18.3728 5.07418 17.822 4.84585C17.2712 4.61752 16.6808 4.5 16.0845 4.5C15.4882 4.5 14.8978 4.61752 14.3469 4.84585C13.7961 5.07418 13.2957 5.40884 12.8743 5.83069L11.9994 6.70557L11.126 5.83069C10.2746 4.97915 9.11985 4.5007 7.91569 4.50059C6.71153 4.50049 5.55664 4.97874 4.7051 5.83013C3.85356 6.68153 3.37511 7.83632 3.375 9.04048C3.37489 10.2446 3.85314 11.3995 4.70454 12.2511L5.57904 13.1274L11.9994 19.5463L19.2947 12.2526C19.7165 11.8312 20.0512 11.3307 20.2795 10.7799C20.5078 10.2291 20.6254 9.63866 20.6254 9.04238C20.6254 8.44611 20.5078 7.85568 20.2795 7.30485C20.0512 6.75402 19.7165 6.2536 19.2947 5.83219V5.83069Z" 
      stroke="#595959" 
      stroke-width="1.5" 
      stroke-linecap="round" 
      stroke-linejoin="round"></path>
    </svg>
  );
};

FavouriteLine.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
  }
