import React from 'react';
import PropTypes from 'prop-types';
import ButtonText from './button/button-text';

const SectionContainer = (props) => {
  return (
    <div className={`${props.noHorizontalPadding ? '' : 'px-4'} py-6 bg-white w-full`}>
      <div className={`flex items-center justify-between ${props.titleHorizontalPadding}`}>
        {props.sectionTitle ? <h2 className="text-nero font-bold text-xl mr-4">{props.sectionTitle}</h2> : null}
        {props.buttonLabel ? (
          <div className="flex-none">
            <div className="w-auto h-full bg-transparent" />
            <ButtonText label={props.buttonLabel} onClick={props.buttonClick} />
          </div>
        ) : null}
      </div>
      {props.children}
    </div>
  );
};
SectionContainer.propTypes = {
  children: PropTypes.node,
  noHorizontalPadding: PropTypes.bool,
  titleHorizontalPadding: PropTypes.string,
  sectionTitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonClick: PropTypes.func,
}
export default SectionContainer;
