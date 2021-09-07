/* eslint-disable no-void */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles';
import { getStatic } from '../../utils/common-helper'
import { ArrowForwardOutlined, ArrowBackOutlined, Visibility, Search, Close, DeleteOutline, Add, Remove, Star, ChevronLeft, ChevronRight, CheckRounded, CheckBoxRounded, CheckBoxOutlineBlankRounded, ExpandLess, ExpandMore, VisibilityOff, ArrowUpward, ArrowDownward, DoubleArrowRounded,  Store, Create, BackspaceOutlined, CancelRounded, Menu,  Smartphone, FormatListBulleted, Send } from '@material-ui/icons';

import {
  CartLine,
  FavouriteLine,
  FavouriteFilled,
  ProdukTerjualLine,
  InfoFilled,
  AlertFilled,
  DiscountFilled,
  Share,
  MinPayment,
  CloseCircleOutlined,
} from '../../assets/svg-custom';
 
const ICON_DIMENSION = {
  XXL : 'xxl',
  XL : 'xl',
  LARGE : 'large',
  MEDIUM : 'medium',
  CUSTOM_SMALL : 'custom-small',
  SMALL : 'small',
}

const dimensionList = {
  [ICON_DIMENSION.XXL]: '64',
  [ICON_DIMENSION.XL]: '48',
  [ICON_DIMENSION.LARGE]: '32',
  [ICON_DIMENSION.MEDIUM]: '24',
  [ICON_DIMENSION.CUSTOM_SMALL]: '18',
  [ICON_DIMENSION.SMALL]: '16',
};

export const Icon = ({ name = 'back', size = 'medium', color = 'zambesi', onClick, ...props }) => {
  const textColor = 'text-' + color;
  const dimension = { height: dimensionList[size] + 'px', width: dimensionList[size] + 'px' };
  const fontSize = { fontSize: dimensionList[size] + 'px' };
  const fontSizeTransform = (deg) => {
    return { ...fontSize, transform: 'rotate(' + deg + 'deg)' };
  };

  return (
    <div {...props} onClick={onClick} className={'flex flex-row justify-center items-center'} style={dimension}>
      {name === 'list' ? (
        <FormatListBulleted className={textColor} style={fontSize} />
      ) : name === 'smartphone' ? (
        <Smartphone className={textColor} style={fontSize} />
      ) : name === 'close-circle-outlined' ? (
        <CloseCircleOutlined color={color} size={dimensionList[size]} />
      ) : name === 'close-circle' ? (
        <CancelRounded className={textColor} style={fontSize} />
      ) : name === 'pen-edit' ? (
        <Create className={textColor} style={fontSize} />
      ) : name === 'menu' ? (
        <Menu className={`text-${color}`} style={{ fontSize: `${dimensionList[size]}px` }} />
      ) : name === 'store' ? (
        <Store className={textColor} style={fontSize} />
      ) : name === 'min-payment' ? (
        <MinPayment color={color} size={dimensionList[size]} />
      ) : name === 'discount-filled' ? (
        <DiscountFilled color={color} size={dimensionList[size]} />
      ) : name === 'share' ? (
        <Share color={color} size={dimensionList[size]} />
      ) : name === 'alert' ? (
        <AlertFilled color={color} size={dimensionList[size]} />
      ) : name === 'info' ? (
        <InfoFilled color={color} size={dimensionList[size]} />
      ) : name === 'statistic-sold-outlined' ? (
        <ProdukTerjualLine color={color} size={dimensionList[size]} />
      ) : name === 'next-to-last' ? (
        <DoubleArrowRounded className={textColor} style={fontSize} />
      ) : name === 'prev-to-first' ? (
        <DoubleArrowRounded className={textColor} style={fontSizeTransform(180)} />
      ) : name === 'arrow-upward' ? (
        <ArrowUpward className={textColor} style={fontSize} />
      ) : name === 'arrow-downward' ? (
        <ArrowDownward className={textColor} style={fontSize} />
      ) : name === 'expand-more' ? (
        <ExpandMore className={textColor} style={fontSize} />
      ) : name === 'expand-less' ? (
        <ExpandLess className={textColor} style={fontSize} />
      ) : name === 'check' ? (
        <CheckRounded className={textColor} style={fontSize} />
      ) : name === 'checkbox-outline-blank' ? (
        <CheckBoxOutlineBlankRounded className={textColor} style={fontSize} />
      ) : name === 'checkbox' ? (
        <CheckBoxRounded className={textColor} style={fontSize} />
      ) : name === 'arrow-right' ? (
        <ArrowForwardOutlined className={textColor} style={fontSize} />
      ) : name === 'arrow-left' ? (
        <ArrowBackOutlined className={textColor} style={fontSize} />
      ) : name === 'backspace' ? (
        <BackspaceOutlined className={textColor} style={fontSize} />
      ) : name === 'cart-outline' ? (
        <CartLine color={color} size={dimensionList[size]} />
      ) : name === 'eye-on' ? (
        <Visibility className={textColor} style={fontSize} />
      ) : name === 'eye-off' ? (
        <VisibilityOff className={textColor} style={fontSize} />
      ) : name === 'search' ? (
        <Search className={textColor} style={fontSize} />
      ) : name === 'close' ? (
        <Close className={textColor} style={fontSize} />
      ) : name === 'trash-can-outline' ? (
        <DeleteOutline className={textColor} style={fontSize} />
      ) : name === 'plus' ? (
        <Add className={textColor} style={fontSize} />
      ) : name === 'minus' ? (
        <Remove className={textColor} style={fontSize} />
      ) : name === 'star' ? (
        <Star className={textColor} style={fontSize} />
      ) : name === 'chevron-left' ? (
        <ChevronLeft className={textColor} style={fontSize} />
      ) : name === 'chevron-right' ? (
        <ChevronRight className={textColor} style={fontSize} />
      ) : name === 'favorite' ? (
        <FavouriteFilled color={color} size={dimensionList[size]} />
      ) : name === 'favorite-outlined' ? (
        <FavouriteLine color={color} size={dimensionList[size]} />
      ) : name === 'toko-resmi-check' ? (
        <img alt="" src={getStatic('icons/toko-resmi-check.svg')} style={dimension} />
      ) : name === 'beranda-nav' ? (
        <img alt="" src={getStatic('beranda-nav.svg')} style={dimension} />
      ) : name === 'beranda-nav-filled' ? (
        <img alt="" src={getStatic('beranda-nav-filled.svg')} style={dimension} />
      ) : name === 'cart-nav' ? (
        <img alt="" src={getStatic('cart-nav.svg')} style={dimension} />
      ) : name === 'cart-nav-filled' ? (
        <img alt="" src={getStatic('cart-nav-filled.svg')} style={dimension} />
      ) : name === 'profile-nav' ? (
        <img alt="" src={getStatic('profile-nav.svg')} style={dimension} />
      ) : name === 'profile-nav-filled' ? (
        <img alt="" src={getStatic('profile-nav-filled.svg')} style={dimension} />
      ) : name === 'toko-resmi-nav' ? (
        <img alt="" src={getStatic('toko-resmi-nav.svg')} style={dimension} />
      ) : name === 'toko-resmi-nav-filled' ? (
        <img alt="" src={getStatic('toko-resmi-nav-filled.svg')} style={dimension} />
      ) : name === 'login-nav-filled' ? (
        <img alt="" src={getStatic('login-nav-filled.svg')} style={dimension} />
      ) : name === 'login-nav' ? (
        <img alt="" src={getStatic('login-nav.svg')} style={dimension} />
      ) : name === 'game-home-nav' ? (
        <img alt="" src={getStatic('game-home-nav.svg')} style={dimension} />
      ) : name === 'game-home-nav-filled' ? (
        <img alt="" src={getStatic('game-home-nav-filled.svg')} style={dimension} />
      ) : name === 'game-list-nav' ? (
        <img alt="" src={getStatic('game-list-nav.svg')} style={dimension} />
      ) : name === 'game-list-nav-filled' ? (
        <img alt="" src={getStatic('game-list-nav-filled.svg')} style={dimension} />
      ) : name === 'game-prize-nav' ? (
        <img alt="" src={getStatic('game-prize-nav.svg')} style={dimension} />
      ) : name === 'game-prize-nav-filled' ? (
        <img alt="" src={getStatic('game-prize-nav-filled.svg')} style={dimension} />
      ) : name === 'game-leaderboard-nav' ? (
        <img alt="" src={getStatic('game-leaderboard-nav.svg')} style={dimension} />
      ) : name === 'game-leaderboard-nav-filled' ? (
        <img alt="" src={getStatic('game-leaderboard-nav-filled.svg')} style={dimension} />
      ) : name === 'coupon' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/coupon.svg'} style={dimension} />
      ) : name === 'dompetku' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/dompetku.svg'} style={dimension} />
      ) : name === 'dompetku-pay' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/dompetku-pay.svg'} style={dimension} />
      ) : name === 'dompetku-withdraw' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/dompetku-withdraw.svg'} style={dimension} />
      ) : name === 'tokoku' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/tokoku.svg'} style={dimension} />
      ) : name === 'tokoku-saldo' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/tokoku-saldo.svg'} style={dimension} />
      ) : name === 'tokoku-saldo-withdraw' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/tokoku-saldo-withdraw.svg'} style={dimension} />
      ) : name === 'verif-icon' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/verif-icon.svg'} style={dimension} />
      ) : name === 'g-logo' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/g-logo.svg'} style={dimension} />
      ) : name === 'email' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/account/20200801/email.svg'} style={dimension} />
      ) : name === 'category-app' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-app.svg'} style={dimension} />
      ) : name === 'category-console' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-console.svg'} style={dimension} />
      ) : name === 'category-mobile-game' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-mobile-game.svg'} style={dimension} />
      ) : name === 'category-pc-game' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-pc-game.svg'} style={dimension} />
      ) : name === 'category-pulsa' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-pulsa.svg'} style={dimension} />
      ) : name === 'category-streaming' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-streaming.svg'} style={dimension} />
      ) : name === 'category-voucher-game' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-voucher-game.svg'} style={dimension} />
      ) : name === 'faq-about' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/faq/20200801/faq-about.svg'} style={dimension} />
      ) : name === 'faq-account' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/faq/20200801/faq-account.svg'} style={dimension} />
      ) : name === 'faq-buyer' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/faq/20200801/faq-buyer.svg'} style={dimension} />
      ) : name === 'faq-feature' ? (
        <img alt="" src={'https://itemkuFormatListBulleted-app.s3-ap-southeast-1.amazonaws.com/icon/faq/20200801/faq-feature.svg'} style={dimension} />
      ) : name === 'faq-payment' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/faq/20200801/faq-payment.svg'} style={dimension} />
      ) : name === 'faq-seller' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/faq/20200801/faq-seller.svg'} style={dimension} />
      ) : name === 'faq-trade' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/faq/20200801/faq-trade.svg'} style={dimension} />
      ) : name === 'order-history' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/order-history/20200801/order-history.svg'} style={dimension} />
      ) : name === 'order-history-os' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/order-history/20200801/order-history-os.svg'} style={dimension} />
      ) : name === 'seller-need-to-process' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/order-history/20200801/seller-need-to-process.svg'} style={dimension} />
      ) : name === 'seller-waiting-for-confirm' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/order-history/20200801/seller-waiting-for-confirm.svg'} style={dimension} />
      ) : name === 'seller-order-done' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/order-history/20200801/seller-order-done.svg'} style={dimension} />
      ) : name === 'seller-order-cancelled' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/order-history/20200801/seller-order-cancelled.svg'} style={dimension} />
      ) : name === 'promoted-product-gif' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/product/20200805/promoted-product.gif'} style={dimension} />
      ) : name === 'promoted-product-outlined' ? (
        <img alt="" src={'https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/product/20200805/promoted-product-outline.svg'} style={dimension} />
      ) : name === 'send' ? (
        <Send className={textColor} style={fontSize} />
      )  : (
        <div></div>
      )}
    </div>
  );
};

export default Icon;
