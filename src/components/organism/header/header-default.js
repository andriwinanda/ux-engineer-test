import React from 'react';
import 'Styles/index.css';
import PropTypes from 'prop-types';
import HeaderContainer from 'Components/atoms/container/header-container';
import ButtonText from 'Components/molecules/button/button-text';
import {  Icon } from 'Components/atoms/icon';
import Button from 'Components/atoms/button';
import { ShoppingCartHandler } from 'handlers/shopping-cart-handler';
import announcementObject from 'Redux/reducers/announcement';


export const HeaderDefault = (props) => {
  const ActionView = `flex ml-auto mr-0 flex-none justify-center ${props.titlePosition === 'center' && 'absolute right-0 transform -translate-x-4'}`;
  const titleBoldElement = <b>{props.title}</b>;
  const { total: cartNotification, getShoppingCartCount } = ShoppingCartHandler.useShoppingCartCount();

  const dispatch = useDispatch();
  let ActionPlace = <></>;
  let IconButtonOne = <></>;
  let IconButtonTwo = <></>;
  let IconButtonThree = <></>;
  let titleView = '';

  React.useEffect(() => {
    if (props.nameIconOne === 'cart-outline' || props.nameIconTwo === 'cart-outline' || props.nameIconThree === 'cart-outline') {
      getShoppingCartCount();
    }
    if ([props.nameIconOne, props.nameIconTwo, props.nameIconThree].includes('message-outlined')) {
      dispatch(announcementObject.actions.requestAnnouncementList());
    }
  }, []);

  const messageIcon = (key) => {
    return key === 'message-outlined' ? (
      <div
        className="absolute top-0 right-0 -mr-2"
        style={{ marginTop: '-6px' }}
      >
        {/* <BadgeNotif notification={getDefault(unreadAnnouncement?.length, 0) + unreadMessage} /> */}
      </div>
    ) : null;
  };

  if (props.button === true) {
    ActionPlace = (
      <div className={ActionView}>
        <ButtonText
          label={props.action}
          onClick={props.onClick}
        />
      </div>
    );
  } else {
    ActionPlace = <></>;
  }

  if (props.showIconOne && props.button === false) {
    IconButtonOne = (
      <div className="relative">
        {messageIcon(props.nameIconOne)}
        {props.nameIconOne === 'cart-outline' ? (
          <div
            className="absolute top-0 right-0 -mr-2"
            style={{ marginTop: '-6px' }}
          >
            {/* <BadgeNotif notification={cartNotification} /> */}
          </div>
        ) : null}
        <Button label={<Icon name={props.nameIconOne} color={props.iconColor} size="medium" />} onClick={props.menuOneClick} />
      </div>
    );
  }
  if (props.showIconTwo && props.button === false) {
    IconButtonTwo = (
      <div className="relative">
        {messageIcon(props.nameIconTwo)}
        {props.nameIconTwo === 'cart-outline' ? (
          <div
            className="absolute top-0 right-0 -mr-2"
            style={{ marginTop: '-6px' }}
          >
            {/* <BadgeNotif notification={cartNotification} /> */}
          </div>
        ) : null}
        <Button label={<Icon name={props.nameIconTwo} color={props.iconColor} size="medium" />} onClick={props.menuTwoClick} />
      </div>
    );
  }
  if (props.showIconThree && props.button === false) {
    IconButtonThree = (
      <div className="relative">
        {messageIcon(props.nameIconThree)}
        {props.nameIconThree === 'cart-outline' ? (
          <div
            className="absolute top-0 right-0 -mr-2"
            style={{ marginTop: '-6px' }}
          >
            {/* <BadgeNotif notification={cartNotification} /> */}
          </div>
        ) : null}
        <Button label={<Icon name={props.nameIconThree} color={props.iconColor} size="medium" />} onClick={props.menuThreeClick} />
      </div>
    );
  }

  if (props.titlePosition === 'center') {
    if (props.button === true) {
      titleView = ' w-full text-center cursor-default';
    } else {
      titleView = ' w-full text-center cursor-default';
    }
  } else {
    titleView = 'cursor-default';
  }

  return (
    <HeaderContainer bgColor={props.bgColor} shadow={props.shadow} id={props.id} className={props.className}>
      <div className={titleView}>{props.titleBold ? titleBoldElement : props.title}</div>

      {ActionPlace}
      {(props.showIconOne || props.showIconTwo || props.showIconThree) &&
        <div className="flex mr-0 ml-auto space-x-3 items-center absolute right-0 transform -translate-x-4">
          {IconButtonThree}
          {IconButtonTwo}
          {IconButtonOne}
        </div>
      }
    </HeaderContainer>
  );
};


HeaderDefault.defaultProps =  {
  title: PropTypes.string,
  button: PropTypes.bool,
  action: PropTypes.string,
  onClick: PropTypes.func,
  titlePosition: PropTypes.oneOf(['center' | 'left']),
  bgColor: PropTypes.string,
  shadow: PropTypes.bool,
  titleBold: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.any,
  showIconOne: PropTypes.bool,
  showIconTwo: PropTypes.bool,
  showIconThree: PropTypes.bool,
  nameIconOne: PropTypes.iconName,
  nameIconTwo: PropTypes.iconName,
  nameIconThree: PropTypes.iconName,
  iconColor: PropTypes.colorPalette,
  menuOneClick: PropTypes.func,
  menuTwoClick: PropTypes.func,
  menuThreeClick: PropTypes.func,
}

HeaderDefault.defaultProps = {
  title: 'Title Page',
  action: 'Button',
  button: false,
  titlePosition: 'left',
  shadows: true,
  titleBold: false,
  iconColor: 'nero',
  showIconOne: false,
  showIconTwo: false
};

export default HeaderDefault;
