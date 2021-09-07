import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonText from "../../molecules/button/button-text";
import SectionContainer from "../../molecules/section-container";
import DescriptionBottomSheet from "../../organism/bottom-sheet/pd-description-bs";

export const ProductDesciption = (props) => {
  const sectionTitle = 'Deskripsi Produk';
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <SectionContainer sectionTitle={sectionTitle}>
        <p className="text-nero font-normal text-base mt-4 overflow-hidden whitespace-pre-line line-clamp-2">
          {props.desc}
        </p>
        <div className="flex mt-2">
          <div className="mr-0 ml-auto">
            <ButtonText label="Selengkapnya" onClick={onClick} />
          </div>
        </div>
        <div className="-mx-4">
          <DescriptionBottomSheet show={show} close={onClick} titleDesc={sectionTitle} fullDesc={props.desc} />
        </div>
      </SectionContainer>
    </div>
  );
};

ProductDesciption.propTypes = {
  desc: PropTypes.string
}

export default ProductDesciption;