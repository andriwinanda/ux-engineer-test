/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../atoms/icon';
import { BadgeInfoOutlined } from '../badge/badge-info-outlined';
import { BadgeInfoContained } from '../badge/badge-info-contained';
import { getStatic } from '../../../utils/common-helper';

export const ProductInfo = ({
  id = null,
  differentiator = 'small',
  itemImageURL = 'https://d1x91p7vw3vuq8.cloudfront.net/itemku-upload/202177/dokan0s4swa2sk9chljr0a.jpg',
  itemInfo = 'Item Info',
  itemServerGroup = 'Server Group',
  itemCategory = 'Category',
  storeName = 'Store Name',
  disabledName = 'Toko Sedang Tutup',
  stars = 5,
  itemImageShow = true,
  itemCategoryShow = false,
  itemServerGroupShow = true,
  storeNameShow = false,
  itemStockShow = true,
  itemDeliveryShow = false,
  itemCheaperThanShow = false,
  itemWholeSalerShow = false,
  itemGuaranteeShow = false,
  itemStarShow = false,
  itemPriceShow = false,
  itemTypeShow = false,
  favoriteShow = false,
  isNewItem = false,
  itemStock = 500,
  itemDelivery = '10 Menit Kirim',
  itemCheaperThan = 'https://itemku-assets.s3.ap-southeast-1.amazonaws.com/logo/other/steam-logo.svg',
  itemGuarantee = 'Anti Hackback',
  itemPrice = 200000,
  priceAfterDiscount = 200000,
  itemDiscount = 0,
  totalItemType = 1,
  itemType = 'Item Type',
  isFavorite = false,
  disabled = false,
  handleFavorite,
  productNameOnClick,
  productNameClickable,
  truncateInfoName = false,
  ...props
}) => {
  const itemImageURLState = PropTypes.string = itemImageURL && itemImageURL.slice(0, 4) === 'http' ? itemImageURL : itemImageURL && itemImageURL.slice(0, 2) === '//' ? itemImageURL : getStatic(itemImageURL);
  const productImageURL = itemCheaperThan && itemCheaperThan.slice(0, 4) === 'http' ? itemCheaperThan : itemCheaperThan && itemCheaperThan.slice(0, 2) === '//' ? itemCheaperThan : getStatic(itemCheaperThan);
  const [isFavoriteState, setIsFavoriteState] = React.useState(isFavorite);
  const [animationActive, setAnimationActive] = React.useState('');
  const handleFavoriteLocal = () => {
    handleFavorite && handleFavorite(id);
    setAnimationActive('animated pulse ease-linear');
    setTimeout(() => {
      setAnimationActive('');
    }, 300);
    setIsFavoriteState(!isFavoriteState);
  };


  return (
    <div className="flex flex-row min-h-64px justify-between w-full" {...props}>
      <div className="flex flex-row w-full">
        {differentiator === 'small' && itemImageShow && (
          <div className={`w-10 h-10 mr-2 flex-none ${productNameClickable && 'cursor-pointer'}`} onClick={productNameOnClick}>
            <img alt="" className="object-cover rounded" src={!itemImageURL || itemImageURL === '' ? getStatic('https://d1x91p7vw3vuq8.cloudfront.net/itemku-upload/202177/dokan0s4swa2sk9chljr0a.jpg') : itemImageURLState} />
          </div>
        )}
        <div className={`flex flex-col ${differentiator === 'big' ? 'leading-tight' : itemType === 'box' ? 'space-y-1 leading-normal' : 'space-y-2 leading-tight'}`}>
          <p onClick={productNameOnClick} className={`line-clamp-2 font-bold text-nero ${productNameClickable && 'cursor-pointer'} ${truncateInfoName ? 'truncate' : ''} ${differentiator === 'small' ? 'text-lg' : 'text-xl leading-6'}`}>
            {itemInfo}
          </p>
          <div className={`flex flex-row text-base text-zambesi ${itemType === 'box' && 'mt-1'}`}>
            <p className={itemServerGroupShow ? '' : 'hidden'}>{itemServerGroupShow && itemServerGroup}</p>
            <p className={itemCategoryShow ? '' : 'hidden'}>{itemCategoryShow && itemCategory}</p>
          </div>
          {differentiator === 'small' && itemTypeShow && (
            <p className={`text-base ${itemType === 'box' ? 'text-nero' : 'text-zambesi'}`}>
              {totalItemType} {itemType}
            </p>
          )}
          {itemPriceShow && (
            <div className={`cursor-auto flex ${differentiator === 'small' ? 'flex-row items-center' : 'flex-col pt-4 pb-4'}`}>
              <div className="flex flex-row items-center">
                <p className={`${differentiator === 'small' ? 'text-base' : 'text-3xl '} text-persimmon font-bold mr-2`}>{itemPrice <= 0 || itemPrice === null || itemPrice === undefined ? 'Rp0' : `Rp${priceAfterDiscount?.toLocaleString().split(',').join('.')}`}</p>
                {differentiator === 'big' && (
                  <p className="text-base text-zambesi">
                    per {totalItemType} {itemType}
                  </p>
                )}
              </div>
              {itemDiscount > 0 && (
                <div className={`flex flex-row items-center space-x-2 ${differentiator === 'big' && 'mt-1'}`}>
                  <BadgeInfoContained big={differentiator === 'big'} differentiator="discount" label={itemDiscount > 100 ? '100%' : `${Math.round(itemDiscount)}%`} />
                  <p className="text-sm text-nobel line-through">{itemPrice <= 0 || itemPrice === null || itemPrice === undefined ? 'Rp0' : `Rp${itemPrice.toLocaleString().split(',').join('.')}`}</p>
                </div>
              )}
            </div>
          )}
          {(itemStockShow || itemDeliveryShow || itemCheaperThanShow || itemWholeSalerShow || itemGuaranteeShow || isNewItem) && (
            <div className="flex flex-col w-full cursor-auto">
              <div className="flex flex-row items-center">
                {itemStockShow && (
                  <div className="flex-none mr-2">
                    <BadgeInfoOutlined big={differentiator === 'big'} differentiator={itemStock > 999 ? 'stock-large' : itemStock > 10 ? 'stock-mid' : itemStock <= 10 ? 'stock-low' : 'stock-out'} label={itemStock > 999 ? 'Stok 999+' : itemStock > 10 ? `Stok ${itemStock}` : itemStock > 1 ? `Tersisa ${itemStock} Stok` : itemStock === 1 ? 'Stok Terakhir' : itemStock <= 0 ? 'Stok Habis' : 'Stok Habis'} />
                  </div>
                )}
                {itemDeliveryShow && (
                  <div className="flex-none mr-2">
                    <BadgeInfoContained big={differentiator === 'big'} differentiator="delivery" label={itemDelivery} />
                  </div>
                )}
                {itemCheaperThanShow && (
                  <div className="flex-none mr-2">
                    <BadgeInfoContained big={differentiator === 'big'} differentiator="cheapest" label="Lebih murah dari" withIcon iconItem={<img alt="" src={productImageURL} />} />
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center">
                {itemWholeSalerShow && (
                  <div className="flex-none mr-2 mt-2">
                    <BadgeInfoContained big={differentiator === 'big'} differentiator="wholesaler" label="Grosir" />
                  </div>
                )}
                {itemGuaranteeShow && (
                  <div className="flex-none mr-2 mt-2">
                    <BadgeInfoContained big={differentiator === 'big'} differentiator="guarantee" label={itemGuarantee} />
                  </div>
                )}
                {isNewItem && (
                  <div className="flex-none mr-2 mt-2">
                    <BadgeInfoContained big={differentiator === 'big'} differentiator="guarantee" label="Baru" />
                  </div>
                )}
              </div>
            </div>
          )}
          {(storeNameShow || itemStarShow) && (
            <div className={`flex flex-row space-x-2 items-center cursor-auto ${itemStarShow ? 'mt-3' : 'mt-2'}`}>
              {storeNameShow && (
                <div className="flex flex-row items-center space-x-1">
                  <Icon name="tokoku" size="small" />
                  <div className={disabled ? 'xxs:max-w-80px' : ''}>
                    <p className="text-base truncate">{storeName}</p>
                  </div>
                </div>
              )}
              {itemStarShow && (
                <div className="flex flex-row items-center">
                  <div>
                    <Icon name="star" color="amber" size="small" />
                  </div>
                  <p className="text-sm">{stars}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between cursor-pointer items-end" style={{ maxWidth: '115px' }}>
        {favoriteShow && (
          <div className={animationActive}>
            <Icon onClick={handleFavoriteLocal} color='text-persimmon' name={isFavoriteState ? 'favorite' : 'favorite-outlined'} />
          </div>
        )}
        {disabled && (
          <div className="flex flex-row items-center ml-auto">
            <p className="text-sm text-redOrange leading-tight text-right whitespace-no-wrap">{disabledName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  id: PropTypes.number,
  differentiator: PropTypes.oneOf(['small', 'big']),
  itemImageURL: PropTypes.string,
  itemInfo: PropTypes.string,
  itemServerGroup: PropTypes.string,
  itemCategory: PropTypes.string,
  storeName: PropTypes.string,
  stars: PropTypes.number,
  itemImageShow: PropTypes.bool,
  itemServerGroupShow: PropTypes.bool,
  itemCategoryShow: PropTypes.bool,
  storeNameShow: PropTypes.bool,
  itemStockShow: PropTypes.bool,
  itemDeliveryShow: PropTypes.bool,
  itemCheaperThanShow: PropTypes.bool,
  itemWholeSalerShow: PropTypes.bool,
  itemGuaranteeShow: PropTypes.bool,
  itemStarShow: PropTypes.bool,
  itemPriceShow: PropTypes.bool,
  itemTypeShow: PropTypes.bool,
  favoriteShow: PropTypes.bool,
  isNewItem: PropTypes.bool,
  itemStock: PropTypes.number,
  itemDelivery: PropTypes.string,
  itemCheaperThan: PropTypes.any,
  itemWholeSaler: PropTypes.string,
  itemGuarantee: PropTypes.string,
  itemPrice: PropTypes.number,
  priceAfterDiscount: PropTypes.number,
  itemDiscount: PropTypes.number, // percentage
  totalItemType: PropTypes.any,
  itemType: PropTypes.string,
  isFavorite: PropTypes.bool,
  disabled: PropTypes.bool,
  handleFavorite: PropTypes.func,
  productNameClickable: PropTypes.bool,
  productNameOnClick: PropTypes.func,
  disabledName: PropTypes.string,
  truncateInfoName: PropTypes.bool,
}
export default ProductInfo;
