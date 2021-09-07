import React, { useEffect, useRef, useState } from 'react'
import Divider from '../../components/atoms/divider'; import HeaderBack from '../../components/organism/header/header-back'
import ProductSummary from '../../components/organism/product/product-summary';
import Snackbar from '../../components/organism/snackbar/snackbar';
import StickyButton from '../../components/organism/sticky-button';
import ProductDesciption from '../../components/templates/products/product-description';
import ProductImage from '../../components/templates/products/product-image';
import ProductListSection from '../../components/templates/products/product-list-section';
import { dataProduct } from "../../utils/data-product";

const ProductDetail = () => {
  // page view setting
  const topHeader = useRef(null);
  const [headerColor, setHeaderColor] = useState('bg-transparent');
  const [shadow, setShadow] = useState(false);
  const scrollEvent = () => {
    if (topHeader.current) {
      if (window.scrollY > topHeader.current.offsetHeight) {
        setHeaderColor('bg-white');
        setShadow(true);
      } else {
        setHeaderColor('bg-transparent');
        setShadow(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  // Show Snackbar
  const [show, setShow] = useState(false);
  const showSnackbar = () => {
    return (
      setShow(true)
    )
  }
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="bg-white">
      <div className="sticky top-0 z-20" ref={topHeader}>
        <HeaderBack
          button
          buttonIcon="cart-outline"
          buttonIconTwo="share"
          iconColor="nero"
          title='Product Detail'
          bgColor={headerColor}
          shadow={shadow}
        />
      </div>
      <ProductImage
        image_url={dataProduct.data.data[0].images[0].image_url}
        image_title={dataProduct.data.data[0].images[0].image_title}
      />
      <ProductSummary
        itemInfo={dataProduct.data.data[3].name}
        itemServerGroup={dataProduct.data.data[3].game.name}
        itemPrice={dataProduct.data.data[3].competitor_price}
        priceAfterDiscount={dataProduct.data.data[3].price}
        itemStock={dataProduct.data.data[3].stock}
        itemType={dataProduct.data.data[3].item_type.name}
        totalItemType={dataProduct.data.data[3].base_unit}

      />
      <Divider differentiator="filled" />

      <ProductDesciption desc={dataProduct.data.data[3].description} />

      <Divider differentiator="filled" />

      <ProductListSection
        data={dataProduct.data.data}
        title="Pengiriman Tercepat"
        withTitleButton={true}
        className='mt-8'
        desc="Produk dari ppenjual-penjual yang memberi Garansi Pengiriman 10 menit" />

      <div className="sticky bottom-0">
        <StickyButton
          label="Tambah Ke Troli"
          onClick={showSnackbar}
        />
      </div>


      {/* Snackbar */}
      <Snackbar
        show={show}
        onClose={handleClose}
        withAction={false}
        message="Ditambahkan Ke Troli"
        executeClickOnTimeout={false}
      />
    </div>
  )
}

export default ProductDetail
