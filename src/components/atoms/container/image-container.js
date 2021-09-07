
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import PropTypes from 'prop-types';


export const ImageContainer = (props) => {
  const { widthRatio, heightRatio, baseWidth } = props;
  const ratio = (heightRatio / widthRatio) * 100;
  return (
    <div id="image-container" className={`relative bg-whiteSmoke max-w-600px overflow-hidden ${props.containerClassName}`} style={{ paddingTop: `${ratio}%`, width: baseWidth }}>
      <img id="image" loading={props.loading} className={`${props.className} object-cover absolute top-0 h-full w-full`} style={props.style} src={props.src} alt={props.alt} />
    </div>
  );
};

ImageContainer.defaultProps = {
  baseWidth: '100%',
};


ImageContainer.propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    heightRatio: PropTypes.number,
    widthRatio: PropTypes.number,
    style: PropTypes.objectOf(CSSProperties),
    baseWidth: PropTypes.number | PropTypes.string,
    loading : PropTypes.any,
  }

export default ImageContainer;

