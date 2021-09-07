import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../styles';
import ButtonText from '../../molecules/button/button-text';


export const Snackbar = (props) => {
  const setClose = props.onClose;
  const setClick = props.onClick;
  const [position, setPosition] = useState('mb-8');
  const SnackbarView = `bg-nero text-white font-normal w-full items-center text-lg z-200 rounded flex justify-between p-4 transform duration-500 ${props.show ? 'opacity-100' : 'opacity-0'}`;
  const TextView = 'flex leading-5 overflow-hidden max-h-10 break-words overflow-ellipsis';
  const ActionView = 'flex flex-none';
  const SnackbarPosition = `px-4 fixed bottom-0 w-full max-w-600px z-200 transform duration-700 ${position}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.executeClickOnTimeout) {
        if (props.onClick) {
          setClick();
        }
      }
      if (props.onClose) {
        setClose();
      }
      props.getSnackbarStatus && props.getSnackbarStatus(true);
    }, 5000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (document.getElementById('sticky')) {
      setPosition('mb-18');
    } else setPosition('mb-8');
  }, []);

  return (
    <div
      className={SnackbarPosition}
    >
      <div className={SnackbarView}>
        <div className={TextView}>{props.message}</div>
        {props.withAction ? (
          <div className={ActionView}>
            <ButtonText
              label={props.action}
              onClick={props.onClick}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

Snackbar.propTypes = {
  message: PropTypes.any,
  action: PropTypes.string,
  show: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.any,
  onClose: PropTypes.any,
  getSnackbarStatus: PropTypes.any,
  executeClickOnTimeout: PropTypes.bool,
  withAction: PropTypes.bool,
}

Snackbar.defaultProps = {
  message: 'Text Label Use for Description up to Single and Double Line ',
  action: 'action',
  show: false,
  executeClickOnTimeout: true,
  withAction: false,
};

export default Snackbar;
