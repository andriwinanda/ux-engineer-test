/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '../../atoms/icon';
import PropTypes from 'prop-types';

export const BadgeInfoContained = ({ capitalize = true, differentiator = 'delivery', big = false, label = 'This text is label', inactive = false, withIcon = false, iconItem, ...props }) => {
  const [fondation, setFoundation] = React.useState({
    differentiator: '',
  });

  React.useEffect(() => {
    if (differentiator !== fondation.differentiator) {
      switch (differentiator) {
        case 'guarantee':
          setFoundation({
            differentiator: 'guarantee',
            bgColor: 'bg-solitude',
            textColor: 'text-cyanBlue',
          });
          break;
        case 'product':
          setFoundation({
            differentiator: 'product',
            bgColor: 'bg-solitude',
            textColor: 'text-cyanBlue',
          });
          break;
        case 'wholesaler':
          setFoundation({
            differentiator: 'wholesaler',
            bgColor: 'bg-persianRed',
            textColor: 'text-white',
          });
          break;
        case 'cheapest':
          setFoundation({
            differentiator: 'cheapest',
            bgColor: 'bg-mistyRose',
            textColor: 'text-persianRed',
          });
          break;
        case 'discount':
          setFoundation({
            differentiator: 'discount',
            bgColor: 'bg-redOrange',
            textColor: 'text-white',
          });
          break;
        default:
          setFoundation({
            differentiator: 'delivery',
            bgColor: 'bg-swansDown',
            textColor: 'text-deepSea',
          });
          break;
      }
    }
  }, [differentiator, fondation.differentiator]);

  return (
    <div className={[capitalize ? 'capitalize' : '', 'select-none', `${inactive ? 'opacity-50' : 'opacity-100'}`, `${big ? 'text-base h-5' : 'text-sm h-4'}`, `${fondation.textColor}`, `${fondation.bgColor}`, 'rounded', 'px-1', 'text-center', 'font-itemku', 'flex', 'flex-row', 'item-center', 'justify-center', 'align-middle'].join(' ')} {...props}>
      <div className="h-4 leading-normal self-center table align-middle">{differentiator === 'product' ? '+' + label + ' produk' : label}</div>
      {withIcon && differentiator === 'cheapest' && <div className={'ml-1 my-auto w-3 h-3 rounded-full overflow-hidden flex items-center justify-center'}>{iconItem === null ? <Icon
        name="tokoku"
        size="custom-small"
      /> : iconItem}</div>}
    </div>
  );
};


BadgeInfoContained.propTypes = {
  differentiator: PropTypes.oneOf(['delivery' , 'guarantee' , 'wholesaler' , 'cheapest' , 'discount' , 'product']),
  big: PropTypes.bool,
  label: PropTypes.string,
  inactive: PropTypes.bool,
  withIcon: PropTypes.bool,
  iconItem: PropTypes.any,
  capitalize: PropTypes.bool,
}

export default BadgeInfoContained;
