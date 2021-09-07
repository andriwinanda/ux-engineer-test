import React, { useState } from 'react';
import FullscreenImage from '../../organism/product/fullscreen-mage';
import PropTypes from 'prop-types';


export const ProductImage = (props) => {
  const [show, setShow] = useState(false);
  const showFull = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="flex min-w-full -mt-12 w-full max-w-600px max-h-164px sm:max-h-276px overflow-hidden">
        <div className="bg-nero w-full max-w-600px select-none cursor-pointer">
          <div className="h-full w-full mx-auto">
            {show ? (
              <FullscreenImage
                onClick={showFull}
                image_url={props.image_url}
                image_title={props.image_title}
              />
            ) :
              (
                <img
                  onClick={showFull}
                  draggable={false}
                  src={props.image_url}
                  alt={props.image_title}
                  className={`w-full object-scale-down max-h-164px mx-auto`}
                />
              )}

          </div>
        </div>
      </div>
    </div>
  )
}

ProductImage.propTypes = {
  image_url: PropTypes.string,
  image_title: PropTypes.string
}
ProductImage.defaultProps = {
  show: false
};
export default ProductImage