import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../molecules/section-container';
import ProductInfo from '../../molecules/content/product-info';
import ButtonText from '../../molecules/button/button-text';


const ProductSummary = (props) => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  };

  const itemDiscount =
    props.priceAfterDiscount !== undefined ? ((props.itemPrice - props.priceAfterDiscount) / props.itemPrice) * 100 : 0;
  return (
    <SectionContainer>
      <ProductInfo
        differentiator="big"
        totalItemType={props.totalItemType}
        itemType={props.itemType}
        itemDelivery={props.itemDelivery}
        itemDeliveryShow={props.itemDeliveryShow}
        itemInfo={props.itemInfo}
        itemServerGroup={props.itemServerGroup}
        itemPrice={props.itemPrice}
        itemPriceShow={true}
        priceAfterDiscount={props.priceAfterDiscount}
        itemDiscount={itemDiscount}
        itemStock={props.itemStock}
        itemCheaperThanShow={props.itemCheaperThan}
        itemWholeSalerShow={props.itemWholeSaler}
        itemGuaranteeShow={props.itemGuarantee}
        favoriteShow={true}
        isFavorite={props.isFavorite}
        handleFavorite={props.toggleFavorite}
        isNewItem={props.isNewItem}
        itemImageURL={props.itemImageURL}
      />
      {props.itemWholesalePrice && props.itemWholesalePrice.length !== 0 ? (
        <div className="flex items-center mt-4">
          <p className="text-base font-normal leading-4 text-nero">Harga grosir mulai dari</p>
          <p className="text-base font-bold leading-4 text-persimmon ml-1">
            Rp{props.itemWholesalePrice[0].price.toLocaleString().split(',').join('.')}
          </p>
          <div className="mr-0 ml-auto">
            <ButtonText label="Detail" onClick={onClick} />
          </div>
        </div>
      ) : null}
    </SectionContainer>
  );
};
ProductSummary.propTypes = {
  itemInfo: PropTypes.string,
  itemServerGroup: PropTypes.string,
  totalItemType: PropTypes.any,
  itemType: PropTypes.string,
  itemPrice: PropTypes.number,
  priceAfterDiscount: PropTypes.number,
  itemStock: PropTypes.number,
  itemDelivery: PropTypes.string,
  itemDeliveryShow: PropTypes.bool,
  itemCheaperThan: PropTypes.bool,
  itemWholeSaler: PropTypes.bool,
  itemGuarantee: PropTypes.bool,
  isFavorite: PropTypes.bool,
  deliveryRate: PropTypes.string,
  minimumBuy: PropTypes.number,
  transactionSuccess: PropTypes.number,
  transactionFailed: PropTypes.number,
  itemWholesalePrice: PropTypes.number,
  isNewItem: PropTypes.bool,
  toggleFavorite: PropTypes.func,
  deliveryRateShow: PropTypes.bool,
  itemImageURL: PropTypes.string
}
export default ProductSummary;
