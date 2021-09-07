import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../../../components/organism/product/card-product'
import Scrollview from '../../atoms/container/scrollview';
import ButtonText from '../../molecules/button/button-text';
import '../../../styles';


export const ProductListSection = (props) => {

  return (
    <div className={props.className}>
      <div className="mx-4 flex justify-between items-center">
        <h2 className="text-itemku leading-8 font-bold">{props.title}</h2>
        {props.withTitleButton ? (
          <div className="flex-none">
            <ButtonText label="Lihat Semua" onClick={props.onTitleButtonClick} />
          </div>
        ) : null}
        </div>
        <p className="font-normal text-sm leading-4 mt-2 mb-3 text-nero mx-4">{props.desc}</p>
        <Scrollview direction="horizontal" withScrollIndicator={false} space="space-x-2" paddingHorizontal="px-4" className="py-2" isClickableContent={true}>
          {props.data.map((row, idx) => {
            const price = row.competitor_price && row.competitor_price > row.price ? row.competitor_price : row.price;
            const itemDiscount =
            row.competitor_price ? ((row.competitor_price - row.price) / row.competitor_price) * 100 : 0;
            return (

              <a key={row.id} href={'/product-detail/' + row.seo_string} >
                <div className={idx === props.data.length - 1 ? 'pr-4 h-full' : 'h-full'}>
                  <CardProduct
                    fixed
                    itemImageURL={row.images[0].thumbnail_image_url}
                    itemInfo={row.name}
                    itemCheaperThanShow={row.is_cheaper_than_market}
                    itemDiscount={itemDiscount}
                    itemCategory={row.item_type}
                    itemPrice={price}
                    priceAfterDiscount={row.price}
                    itemDelivery={row.use_auto_delivery ? 'Pengiriman Instan' : undefined}
                    itemDeliveryShow={row.use_auto_delivery || !!row.use_fast_delivery}
                    itemStock={row.stock}
                    isPromoted={row.use_ads}
                    itemWholesalerShow={row.wholesale.length}
                    itemGuaranteeShow={row.is_antihackback}
                    itemSold={row.order_record.successful_order_count}
                    itemServerGroup={row.game.name}
                  />
                </div>
              </a>
            )
          })}
        </Scrollview>
      </div>
  );
};

ProductListSection.propTypes = {
  data: PropTypes.any,
  title: PropTypes.string,
  withTitleButton: PropTypes.bool,
  onTitleButtonClick: PropTypes.func,
  loadingState: PropTypes.bool,
  className: PropTypes.string,
  addSeenGameId: PropTypes.bool,
  desc: PropTypes.string,
  link: PropTypes.string,
  hasGameContext: PropTypes.bool,

}

ProductListSection.defaultProps = {
  withTitleButton: false,
  loadingState: false,
  addSeenGameId: false,
  hasGameContext: false,
};

export default ProductListSection;
