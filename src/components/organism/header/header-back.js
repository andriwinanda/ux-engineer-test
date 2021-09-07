import React from 'react';
import '../../../styles';
import PropTypes from 'prop-types';
import HeaderContainer from '../../atoms/container/header-container';
import Button from '../../atoms/button';
import { Icon} from '../../atoms/icon';
import ButtonText from '../../molecules/button/button-text';
// import BadgeNotif from '../../molecules/badge/badge-notif';
// import navigationObject from 'Redux/reducers/navigation';
// import { BackgroundColor } from 'Assets/colors/color-palette';


export const HeaderBack = (props) => {

  const leftClick = props.leftOnClick
    ? props.leftOnClick
    : () => {
      window.history.back()
    };

  const ActionView = `flex flex-none mr-4 justify-center ${props.bgColor === 'bg-transparent' ? 'bg-zambesi rounded' : 'bg-transparent'}`;
  let ActionPlace = <></>;
  const ActionTwoView = `flex flex-none justify-center ${props.bgColor === 'bg-transparent' ? 'bg-zambesi rounded' : 'bg-transparent'}`;
  const AvatarImage = (
    <div className="w-7 h-7 rounded-full">
      <img alt="" src={props.avatarImage} className="object-cover rounded-full w-7 h-7" />
    </div>
  );

  if (props.button === true) {
    if (props.buttonLabel) {
      ActionPlace = (
        <div className="mr-0 ml-auto flex-none">
          <div className={ActionTwoView}>
            <ButtonText label={props.buttonLabel} onClick={props.rightOnClick} />
          </div>
        </div>
      );
    } else if (props.buttonIcon) {
      ActionPlace = (
        <div className="flex space-x-3 mr-0 ml-auto">
          {props.buttonIconTwo && (
            <div className={ActionTwoView}>
              <Button label={<Icon name={props.buttonIconTwo} color={props.bgColor === 'bg-transparent' ? 'white' : props.iconColor} size="medium" />} onClick={props.rightTwoOnClick} data-cy={props.buttonIconTwo} />
            </div>
          )}
          <div className={[ActionTwoView, 'relative'].join(' ')}>
            {props.buttonIcon === 'cart-outline' ? (
              <div className="absolute top-0 right-0 -mr-2" style={{ marginTop: '-6px' }}>
              </div>
            ) : null}
            <Button label={<Icon name={props.buttonIcon} color={props.bgColor === 'bg-transparent' ? 'white' : props.iconColor} size="medium" />} onClick={props.rightOnClick} data-cy={props.buttonIcon} />
          </div>
        </div>
      );
    }
  } else {
    ActionPlace = <></>;
  }

  return (
    <HeaderContainer bgColor={props.bgColor} shadow={props.shadow} capitalize={props.capitalize} className={props.className}>
      <div className="w-full flex truncate mr-3">
        <div className={ActionView}>
          <Button onClick={leftClick} label={<Icon name="arrow-left" color={props.bgColor === 'bg-transparent' ? 'white' : props.iconColor} size="medium" />} />
        </div>
        {props.bgColor === 'bg-transparent' ? null : (
          <div className="flex flex-row space-x-2 items-center cursor-default">
            {props.titleIsString ? (
              <>
                {props.avatarImage && AvatarImage}
                {props.isTitleWithHyphen ? <h1 className="truncate">{props.title}</h1> : <h1 className="truncate">{props.title?.split('-').join(' ')}</h1>}
              </>
            ) : (
              <>
                {props.avatarImage && AvatarImage}
                <h1 className="truncate">{props.title}</h1>
              </>
            )}
          </div>
        )}
      </div>
      {ActionPlace}
    </HeaderContainer>
  );
};


HeaderBack.propTypes = {
  title: PropTypes.any,
  leftOnClick: PropTypes.func,
  button: PropTypes.bool,
  buttonLabel: PropTypes.string,
  buttonIcon: PropTypes.string,
  buttonIconTwo: PropTypes.string,
  iconColor: PropTypes.string,
  rightOnClick: PropTypes.func,
  rightTwoOnClick: PropTypes.func,
  bgColor: PropTypes.string,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.any,
  avatarImage: PropTypes.string,
  titleIsString: PropTypes.bool,
  capitalize: PropTypes.bool,
  isTitleWithHyphen: PropTypes.bool, // ignore hyphen remover helper
}

HeaderBack.defaultProps = {
  iconColor: 'nero',
  bgColor: 'bg-black',
  shadow: true,
  titleIsString: true,
  isTitleWithHyphen: false,
};

export default HeaderBack;
