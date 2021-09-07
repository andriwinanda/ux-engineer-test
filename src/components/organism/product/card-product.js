import React from 'react';
import { Card } from '../../atoms/card';
import { BadgeInfoOutlined } from '../../molecules/badge/badge-info-outlined';
import { BadgeInfoContained } from '../../molecules/badge/badge-info-contained';

import { NewGenImage } from '../../templates/new-gen-image';


export const CardProduct = ({
  differentiator = 'large',
  itemImageURL = 'https://d1x91p7vw3vuq8.cloudfront.net/itemku-upload/202177/dokan0s4swa2sk9chljr0a.jpg',
  itemInfo = 'Item Info',
  itemServerGroup = 'Server Group',
  itemCategory = 'Category',
  itemStockShow = true,
  itemDeliveryShow = true,
  itemGuaranteeShow = false,
  itemCheaperThanShow = false,
  itemWholesalerShow = true,
  itemServerGroupShow = true,
  itemCategoryShow = false,
  itemStock = 500,
  itemDelivery = '10 Menit Kirim',
  itemGuarantee = 'Anti Hackback',
  itemCheaperThan = 'https://itemku-assets.s3.ap-southeast-1.amazonaws.com/logo/other/steam-logo.svg',
  itemPrice = 200000,
  priceAfterDiscount = 200000,
  itemDiscount = 0,
  itemSold = 1000,
  isPromoted = true,
  onClick,
  fixed = false,
  isLoading = false,
  fullWidth = false,
  ...props
}) => {
  const cardDimension = fixed ? 'min-h-238px w-37' : 'min-h-248px w-full';
  const priceAfterDisountLocal = priceAfterDiscount;
  // const itemImageURLState = itemImageURL && itemImageURL.slice(0, 4) === 'http' ? itemImageURL : itemImageURL && itemImageURL.slice(0, 2) === '//' ? itemImageURL : getStatic(itemImageURL);
  // const productImageURL = itemCheaperThan && itemCheaperThan.slice(0, 4) === 'http' ? itemCheaperThan : itemCheaperThan && itemCheaperThan.slice(0, 2) === '//' ? itemCheaperThan : getStatic(itemCheaperThan);
  const imageSource = itemImageURL;

  return isLoading ? (
    <Card className={cardDimension + ' flex flex-col w-37 h-64 space-x-1 bg-whiteSmoke skeleton'}>
      <div className="w-37 h-64"></div>
    </Card>
  ) : (
    <Card className={`flex flex-col ${fullWidth ? 'w-full' : ''} select-none h-full ${differentiator !== 'small' ? cardDimension : 'w-39'} overflow-hidden`} onClick={onClick} {...props}>
      {differentiator !== 'small' && (
        <div className="w-full h-18 overflow-hidden relative ">
          <div className="w-full h-18 overflow-hidden">
            <NewGenImage className='w-full h-full object-cover object-top' style={{ width: '100%', height: '80px' }} src={imageSource} />

          </div>
          {itemWholesalerShow && (
            <div className="flex flex-row absolute" style={{ top: '12px', left: '8px' }}>
              <BadgeInfoContained differentiator="wholesaler" label="Grosir" />
            </div>
          )}
        </div>
      )}

      <div className="w-full px-2 py-3 space-y-3">
        <div>
          <div className={`${differentiator !== 'small' ? 'text-base' : 'text-lg w-full'}`}>
            <p className="line-clamp-2">{itemInfo}</p>
          </div>
          <div className="flex flex-row">
            {itemServerGroupShow && differentiator !== 'small' && <div className="text-sm text-nobel">{itemServerGroup}</div>}
            {itemCategoryShow && differentiator !== 'small' && <div className="text-sm text-nobel">{itemCategory}</div>}
          </div>
        </div>
        <div className={`${differentiator !== 'small' ? '' : 'mb-2'} flex flex-row`}>{itemStockShow && <BadgeInfoOutlined differentiator={itemStock > 999 ? 'stock-large' : itemStock > 10 ? 'stock-mid' : itemStock <= 10 ? 'stock-low' : 'stock-out'} label={itemStock > 999 ? 'Stok 999+' : itemStock > 10 ? `Stok ${itemStock}` : itemStock > 1 ? `Tersisa ${itemStock} Stok` : itemStock === 1 ? 'Stok Terakhir' : itemStock <= 0 ? 'Stok Habis' : ''} />}</div>
        {Math.round(itemDiscount) >= 1 && differentiator !== 'small' && (
          <div className="flex flex-row items-center ">
            <BadgeInfoContained differentiator="discount" label={itemDiscount > 100 ? '100%' : `${Math.round(itemDiscount)}%`} />
            <div className="text-sm text-nobel ml-2 line-through">{itemPrice <= 0 || itemPrice === null || itemPrice === undefined ? 'Rp0' : `Rp${itemPrice.toLocaleString().split(',').join('.')}`}</div>
          </div>
        )}
        <div className={`${differentiator !== 'small' ? 'text-xl ' : 'text-base'} text-persimmon font-bold leading-tight mr-2`}>{priceAfterDisountLocal <= 0 || priceAfterDisountLocal === null || priceAfterDisountLocal === undefined ? 'Rp0' : `Rp${priceAfterDisountLocal.toLocaleString().split(',').join('.')}`}</div>
        {itemDeliveryShow && differentiator !== 'small' && (
          <div className=" flex flex-row">
            <BadgeInfoContained differentiator="delivery" label={itemDelivery} />
          </div>
        )}
      </div>
      {differentiator !== 'small' && (
        <div className="px-2 pb-3 w-full h-auto flex-grow flex flex-row justify-between items-end">
          {itemSold <= 0 || itemSold === null || itemSold === undefined ? <BadgeInfoContained differentiator="guarantee" label="Baru" /> : <div className="text-sm text-nobel">{itemSold} produk terjual</div>}
                 </div>
      )}
    </Card>
  );
};

export default CardProduct;
