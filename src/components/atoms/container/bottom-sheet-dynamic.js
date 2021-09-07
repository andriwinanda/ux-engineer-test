import React, { useState, useEffect, useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import PropTypes from 'prop-types';
import Icon from '../icon';



export const BottomSheet = (props) => {
  const [show, setShow] = useState(props.show);
  const [active, setActive] = useState(false);
  const [heightChange, setHeightChange] = useState(0);
  const [height, setHeight] = useState(global.window ? window.innerWidth < 600 ? 60 : 100 : 60);
  const [touchAction, setTouchAction] = useState(false);
  const [stylingSheet, setStylingSheet] = useState('rounded-t-2xl');
  const [stylingContent, setStylingContent] = useState('overflow-y-hidden sm:overflow-y-scroll');

  const sheetView = `fixed bottom-0 max-w-600px w-full pb-8 bg-white z-50 ${stylingSheet}`;
  const contentView = `${stylingContent} w-full h-full flex flex-col sm:mt-4`;
  const sheet = useRef (null);
  const content = useRef (null);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  useEffect(() => {
    show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
  }, [show]);

  const setClose = props.close;
  const bind = useDrag(({ active, last, movement: [, my] }) => {
    setActive(active);
    const changePercentage = -(my / window.innerHeight) * 100;
    if (active === true && height === 60) {
      setHeightChange(height + changePercentage);
    } else if (active === true && height === 100) {
      if (changePercentage < 0 && content.current?.scrollTop === 0) {
        setHeightChange(height + changePercentage);
        setTouchAction(false);
      } else if (changePercentage > 0) {
        setHeightChange(100);
        setTouchAction(true);
      } else setHeightChange(100);
    }
    if (last) {
      if (height === 60) {
        if (changePercentage > 20) {
          setHeight(100);
          setStylingContent('overflow-auto');
          setStylingSheet('rounded-none');
          setTouchAction(true);
        } else if (changePercentage < -20) {
          setClose();
        }
      }
      if (height === 100) {
        if (changePercentage < -20) {
          setHeight(60);
          setStylingContent('overflow-hidden');
          setStylingSheet('rounded-t-2xl');
        }
      }
    }
  });

  const handleClickOverlay = (e) => {
    e.stopPropagation();
  };

  const closeOverlay = () => {
    setClose();
    setShow(false);
  };

  return (
    <div>
      {show ? (
        <div
          className="fixed top-0 w-full h-full max-w-600px mx-auto bg-nero bg-opacity-75 left-1/2 z-40"
          onClick={closeOverlay}
          style={{ transform: 'translateX(-50%)', transition: `${active ? '' : 'opacity 0.5s'}` }}
          data-cy={'bottomsheet'}
        >
          <div
            onClick={handleClickOverlay}
            className={sheetView}
            {...bind()}
            style={{ touchAction: 'none', height: `${active ? heightChange : height}%` }}
            ref={sheet}
          >
            <div className="w-10 mx-auto mt-2 mb-6 bg-nobel h-1 rounded-3xl sm:hidden" />
            <div
              className='absolute top-0 right-0 transform -translate-x-4 translate-y-4 cursor-pointer tablet:hidden xxs:hidden mini:hidden'
              onClick={closeOverlay}
              data-cy={'bottomsheet-close'}
            >
              <Icon
                color='zambesi'
                name='close'
              />
            </div>
            <div
              className={contentView}
              ref={content}
              style={{ touchAction: `${touchAction ? 'auto' : 'none'}` }}
            >
              {props.children}
              {stylingContent === 'overflow-auto' ? <div className="w-full h-4 bg-transparent sticky bottom-0" /> : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

BottomSheet.propTypes ={
  show: PropTypes.bool,
  children: PropTypes.node,
  close: PropTypes.any,
}

BottomSheet.defaultProps = {
  show: false
};

export default BottomSheet;
