/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const BadgeInfoOutlined = ({
  differentiator = 'stock-large',
  big = false,
  label = 'This text is label',
  inactive = false,
  ...props
}) => {
  const [foundation, setFoundation] = React.useState({
    differentiator: '',
    borderColor: '' ,
    textColor: '' ,
  });

  React.useEffect(() => {
    if (differentiator !== foundation.differentiator) {
      switch (differentiator) {
        case 'stock-mid':
          setFoundation({
            differentiator: 'stock-mid',
            borderColor: 'border-tenneOrange',
            textColor: 'text-tenneOrange',
          });
          break;
        case 'stock-low':
          setFoundation({
            differentiator: 'stock-low',
            borderColor: 'border-redOrange',
            textColor: 'text-redOrange',
          });
          break;
        case 'stock-out':
          setFoundation({
            differentiator: 'stock-out',
            borderColor: 'border-redOrange',
            textColor: 'text-redOrange',
          });
          break;
        default:
          setFoundation({
            differentiator: 'stock-large',
            borderColor: 'border-deepSea',
            textColor: 'text-deepSea',
          });
          break;
      }
    }
  }, [differentiator, foundation.differentiator]);

  return (
    <div
      className={[
        'font-normal',
        'capitalize',
        'select-none',
        `${inactive ? 'opacity-50' : 'opacity-100'}`,
        `${big ? 'h-5 text-base' : 'h-4 text-sm'}`,
        'w-auto',
        `${foundation.textColor}`,
        `border ${foundation.borderColor}`,
        'rounded',
        'px-1',
        'text-center',
        'font-itemku',
        'flex',
        'flex-row',
        'item-center',
        'justify-center',
        'align-middle',
        'flex-none',
      ].join(' ')}
      {...props}>
      {differentiator === 'stock-out' ? 'Stok habis' : label}
    </div>
  );
};

BadgeInfoOutlined.propTypes = {
    differentiator:PropTypes.oneOf(['stock-large' , 'stock-mid' , 'stock-low' , 'stock-out']),
    big: PropTypes.bool,
    label: PropTypes.string,
    inactive: PropTypes.bool
  }
  
export default BadgeInfoOutlined;
