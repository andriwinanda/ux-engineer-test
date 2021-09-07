/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export const Scrollview  = ({
  direction = 'vertical',
  withScrollIndicator = true,
  paddingVertical = 'py-0', // tailwind spacing
  paddingHorizontal = 'px-0', // tailwind spacing
  className,
  space,
  children,
  getDragStatus,
  isClickableContent = false,
  style,
  ...props
}) => {
  // Drag Function //
  const dragContainer = React.useRef();
  const [distance, setDistance] = React.useState(0);
  const [isClicked, setisClicked] = React.useState(false);
  const [anchorPoint, setAnchorPoint] = React.useState(0);
  let dragTimeOut;
  const stopTimeOut = () => {
    clearTimeout(dragTimeOut);
  };
  const handleMouseDownY = (e) => {
    setisClicked(true);
    setAnchorPoint(e.pageY - dragContainer.current?.offsetTop);
    setDistance(dragContainer.current.scrollTop);
    dragContainer.current.style.cursor = 'grabbing';
  };
  const handleMouseUpY = () => {
    setisClicked(false);
    dragContainer.current.style.cursor = 'pointer';
    dragTimeOut = setTimeout(() => {
      getDragStatus && getDragStatus(false);
    }, 50);
  };
  const handleMouseLeaveY = () => {
    setisClicked(false);
  };
  const handleMouseMoveY = (e) => {
    e.preventDefault();
    if (!isClicked) return;
    dragContainer.current.style.cursor = 'grabbing';
    const moveValue = e.pageY - dragContainer.current?.offsetTop;
    const dragValue = (moveValue - anchorPoint) * 1.2;
    dragContainer.current.scrollTop = distance - dragValue;
    dragContainer.current.onclick = null;
    getDragStatus && getDragStatus(true);
  };
  const handleMouseDownX = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setisClicked(true);
    setAnchorPoint(e.pageX - dragContainer.current.offsetLeft);
    setDistance(dragContainer.current.scrollLeft);
    dragContainer.current.style.cursor = 'grabbing';
  };
  const handleMouseUpX = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setisClicked(false);
    dragContainer.current.style.cursor = isClickableContent ? 'pointer' : 'auto';
    dragTimeOut = setTimeout(() => {
      getDragStatus && getDragStatus(false);
    }, 50);
  };
  const handleMouseLeaveX = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setisClicked(false);
  };
  const handleMouseMoveX = (e) => {
    if (!isClicked) return;
    e.preventDefault();
    e.stopPropagation();
    dragContainer.current.style.cursor = 'grabbing';
    const moveValue = e.pageX - dragContainer.current.offsetLeft;
    const dragValue = moveValue - anchorPoint;
    dragContainer.current.scrollLeft = distance - dragValue;
    Math.abs(dragValue) > 5 && getDragStatus && getDragStatus(true);
  };

  React.useEffect(() => {
    if (dragTimeOut) {
      return stopTimeOut();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragTimeOut]);
  return (
    <div
      onMouseDown={direction === 'horizontal' ? handleMouseDownX : handleMouseDownY}
      onMouseUp={direction === 'horizontal' ? handleMouseUpX : handleMouseUpY}
      onMouseLeave={direction === 'horizontal' ? handleMouseLeaveX : handleMouseLeaveY}
      onMouseMove={direction === 'horizontal' ? handleMouseMoveX : handleMouseMoveY}
      onMouseOver={() => (dragContainer.current.style.cursor = isClickableContent ? 'pointer' : 'auto')}
      ref={dragContainer}
      className={`w-full select-none scrolling-touch ${!withScrollIndicator && 'scroll-hide'} ${paddingVertical} ${paddingHorizontal} ${className} ${direction === 'horizontal' ? 'h-full overflow-x-auto overflow-y-hidden' : 'overflow-y-auto overflow-x-hidden'}`}
      style={style}>
      <div className={`w-full h-full ${direction === 'horizontal' && 'flex flex-row'}`}>
        <div {...props} className={`${direction === 'horizontal' ? `w-full flex flex-row flex-none ${space}` : 'flex flex-col'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
Scrollview.propTypes = {
    direction : PropTypes.oneOf(['vertical', 'horizontal']),
    withScrollIndicator : PropTypes.bool,
    paddingVertical : PropTypes.string,
    paddingHorizontal : PropTypes.string,
    className : PropTypes.string,
    space : PropTypes.string,
    getDragStatus : PropTypes.func,
    children : PropTypes.node,
    isClickableContent : PropTypes.bool,
    style : PropTypes.any,
  }
export default Scrollview;
