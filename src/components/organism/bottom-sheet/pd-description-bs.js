import React from 'react';
import PropTypes from 'prop-types';
import BottomSheet from '../../atoms/container/bottom-sheet-dynamic';

export const DescriptionBottomSheet = (props) => {
  return (
    <BottomSheet
      show={props.show}
      close={props.close}
    >
      <div className='mx-4 mb-7'>
        <h2 className="font-bold text-xl leading-6 text-nero">{props.titleDesc}</h2>
        <div className="mt-4 ">
          <p className="text-nero font-normal text-base leading-4 whitespace-pre-line">{props.fullDesc}</p>
        </div>
      </div>
      <div className='w-full bg-transparent h-16' />
    </BottomSheet>
  );
};


DescriptionBottomSheet.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.any,
  fullDesc: PropTypes.string,
  titleDesc: PropTypes.string,
}

DescriptionBottomSheet.defaultProps = {
  show: false
};

export default DescriptionBottomSheet;
