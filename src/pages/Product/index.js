import React from 'react'
import Footer from '../../components/templates/footer'
import Header from '../../components/organism/header/header-product'
import ProductListSection from '../../components/templates/products/product-list-section'
import { dataProduct } from "../../utils/data-product";


const Product = () => {
  return (
    <div className="bg-white">
      <Header />
      <ProductListSection
        title="Promo Termurah di Seluruh Indonesia"
        data={dataProduct.data.data}
        className='mt-4'
      />
      <ProductListSection
        data={dataProduct.data.data}
        title="Product Mobile Legends terpopuler"
        className='mt-8'
      />
      <Footer />
    </div>
  )
}

export default Product
