import { IGame, IGameInfo } from './game-helper';
import { dateHelper, localNumberUnitFormat, secondsToDayHourMinuteFormat, isSupportWebp } from 'Helpers/common-helper';
import { IConfigReducers } from 'Redux/reducers/config-reducers';
import { forceHttps } from 'Helpers/url-helper';
import { routes } from 'Helpers/route-helper';
import { queryUrlBuilder, routeBuilder, ROUTER_NAME } from './navigation-helper';
import { IEventItemInfoGroup } from './item-info-helper';



export interface IProduct {
  id: number;
  name: string;
  seo_string: string;
  image_url: string | undefined;
  discount: number;
  competitor_price: number;
  is_cheaper_than_competitor: boolean;
  is_antihackback: boolean;
  grosir: boolean;
  game_name: string;
  game_id: number;
  order_count: number;
  use_fast_delivery: boolean;
  use_auto_delivery: boolean;
  is_cheaper_than_market: boolean;
  use_ads: boolean;
  item_type: string | undefined;
  server_name: string | undefined;
  price: number;
  item_category_id: number;
  stock: number;
  item_info_group_id?: number;
}


export interface IProductDetailResponse {
  id: number;
  seller_id: number;
  game_id: number;
  item_type_id: number;
  server_id: number;
  server_name: string;
  item_info_id: number;
  item_info_group_id: number;
  item_category_id: number;
  use_auto_delivery: number;
  is_fast_delivery_set: number;
  name: string;
  seo_string: string;
  image_url: string | undefined;
  discount: number;
  competitor_price: number;
  is_antihackback: boolean;
  grosir: boolean;
  game_name: string;
  order_count: number;
  is_cheaper_than_market: boolean;
  use_ads: boolean;
  price: number;
  stock: number;
  view_count: number;
  images: IProductDetailImage[];
  wholesale: any[]; // need to check endpoint
  market_price: null | number;
  is_cheaper_than_competitor: number;
  seller: ISellerDetailResponse;
  item_type?: IItemTypeResponse;
  game?: IGame;
  order_record?: Record<string, any>;
  rarity_type_id: number;
  use_fast_delivery: number;
  base_unit: number;
  min_order: number;
  max_order: number;
  description: string;
  is_active: number;
  item_info?: IItemInfoResponse;
}


export interface IProductDetail {
  wholesale: IWholesale[];
  name: string;
  base_unit: string;
  game_name: string;
  game_slug: string;
  images: IProductDetailImage[];
  stock: number;
  is_cheaper_than_market: boolean;
  is_cheaper_than_competitor: boolean;
  is_fast_delivery_eligible: boolean;
  id: number;
  platform_id: number;
  game_id: number;
  seller_id: number;
  price: number;
  competitor_price: number;
  discount_percent: undefined | number;
  server_name: string;
  min_order: number;
  successful_order_count: number;
  failed_order_count: number;
  seller_last_login: string;
  shop_average_rating: number;
  shop_rating_count: number;
  shop_created_since: string;
  seller_last_10_delivery_time: string;
  shop_name: string;
  last_delivery_time: string;
  item_type: string;
  item_type_id?: number;
  item_info_name?: string;
  item_info_id?: number;
  description: string;
  faq_id: string;
  use_auto_delivery: boolean;
  use_fast_delivery: boolean;
  shop_profile_picture_url: string;
  shop_is_open: boolean;
  is_active: boolean;
  shop_is_active: boolean;
  ready_stock: boolean;
  item_category_id: null | number;
  item_info_group_id?: number;
  testimonial: IProductTestimonial[];
  in_wishlist: boolean;
  shopping_cart_count: number;
  other_products?: IProductDetail[];
  anti_hack_back: boolean;
  how_to: IProductHowTo;
  product_average_delivery_time: string;
  required_info: IProductRequiredInfo;
  shop_url: string;
  is_using_denom: boolean;
  item_info_slug?: string;
  seller: IProductDetailSeller;
  use_ads: number;
  shop_slug: string;
}


const productImageHelper = (item) => {
  if (isSupportWebp()) {
    return item.images[0].alternate_image_url ? item.images[0].alternate_image_url : item.images[0].image_url;
  }
  return item.images[0].image_url;
};

const thumbImageHelper = (item) => {
  if (isSupportWebp()) {
    return item.images[0].alternate_thumbnail_image_url ? item.images[0].alternate_thumbnail_image_url : item.images[0].thumbnail_image_url;
  }
  return item.images[0].image_url;
};

export const productListHelper = (data, configReducers) => {
  return data.map(
    (item): IProduct => {
      const productImage = item.images && item.images.length > 0 && item.images[0].image_url ? forceHttps(productImageHelper(item)) : undefined;
      const thumbImage = item.images && item.images.length > 0 && item.images[0].thumbnail_image_url ? forceHttps(thumbImageHelper(item)) : undefined;
      const product: IProduct = {
        name: item.name,
        seo_string: item.seo_string,
        game_name: item.game ? item.game.name : '',
        game_id: item.game_id ? item.game_id : undefined,
        image_url: thumbImage || productImage,
        id: item.id,
        price: item.price,
        competitor_price: item.competitor_price,
        discount: item.competitor_price && item.competitor_price > item.price ? ((item.competitor_price - item.price) / item.competitor_price) * 100 : 0,
        is_cheaper_than_competitor: !!(item.competitor_price && item.competitor_price > item.price),
        grosir: item.wholesale.length > 0,
        order_count: item.order_record ? item.order_record.successful_order_count : 0,
        use_fast_delivery: Boolean(Number(item.use_fast_delivery)),
        use_auto_delivery: Boolean(Number(item.use_auto_delivery)),
        is_cheaper_than_market: !!(item.market_price && item.market_price > item.price),
        is_antihackback: false,
        item_category_id: item.item_type ? item.item_type.item_category_id : undefined,
        item_info_group_id: item.item_info_group_id ? item.item_info_group_id : undefined,
        item_type: item.item_type?.name && item.item_type.name.length > 0 ? item.item_type.name : undefined,
        server_name: item.server_name && item.server_name.length > 0 ? item.server_name : undefined,
        stock: item.stock,
        use_ads: !!item.use_ads,
      };

      if (configReducers !== undefined) {
        product.is_antihackback = configReducers.configList.ACCOUNT_CATEGORY_ID === product.item_category_id;
      }

      return product;
    },
  );
};

// export const formatProductDeliveryTime = (time?: number) => {
//   if (!time) {
//     return 'Standar';
//   } else if (time < 60) {
//     return '< 1 menit';
//   } else {
//     return secondsToDayHourMinuteFormat(time);
//   }
// };

export const formatProductDetail = (productData: IProductDetailResponse, otherProducts: IProductDetailResponse[], testimonial: IProductTestimonial[], shoppingCartCount: number, alreadyInWishList: boolean, antiHackBack: boolean, productHowTo: Partial<IProductHowTo>, deliveryTime: number) => {
  const formattedProductDetail: any = formatProductDetailData(productData);
  const productAverageDelieryTime = formatProductDeliveryTime(deliveryTime);
  return {
    ...formattedProductDetail,
    other_products: otherProducts || [],
    testimonial,
    shopping_cart_count: shoppingCartCount,
    in_wishlist: alreadyInWishList,
    anti_hack_back: antiHackBack,
    how_to: productHowTo,
    product_average_delivery_time: productAverageDelieryTime,
    is_using_denom: productData.item_type?.is_using_denom,
  } as IProductDetail;
};

export const formatDenomination = (productData: IProductDetailResponse) => {
  return {
    id: productData.id,
    itemInfo: productData.name,
    itemStock: productData.stock,
    itemPrice: productData.price,
    itemUrl: routes.product.route + productData.seo_string + '/' + productData.id,
  };
};



export const formatProductDetailData = (data: IProductDetailResponse) => {
  return {
    platform_id: data.game?.platform_id,
    wholesale: formatWholesale(data.wholesale),
    name: data.name,
    base_unit: localNumberUnitFormat(data.base_unit),
    game_name: data.game ? data.game.name : '',
    images: data.images && data.images.length > 0 ? data.images : null,
    stock: data.stock,
    is_cheaper_than_market: Boolean(data.market_price && data.market_price > data.price),
    is_cheaper_than_competitor: Boolean(data.is_cheaper_than_competitor && data.is_cheaper_than_competitor === 1),
    id: data.id,
    game_id: data.game_id,
    game_slug: data.game?.slug,
    seller_id: data.seller_id,
    price: data.price,
    competitor_price: data.competitor_price,
    discount_percent: data.competitor_price && data.competitor_price > data.price ? ((data.competitor_price - data.price) / data.competitor_price) * 100 : null,
    server_name: data.server_name,
    min_order: data.min_order,
    max_order: data.max_order,
    failed_order_count: data.order_record ? data.order_record.failed_order_count : 0,
    successful_order_count: data.order_record ? data.order_record.successful_order_count : 0,
    seller_last_login: data.seller ? data.seller.last_login : '',
    shop_average_rating: data.seller ? data.seller.average_rating : 0,
    shop_rating_count: data.seller ? data.seller.rating_count : 0,
    shop_name: data.seller ? data.seller.shop_name : '',
    seller_last_10_delivery_time: data.seller ? data.seller.last_ten_delivery_time : '',
    item_type: data.item_type ? data.item_type.name : '',
    item_type_id: data.item_type_id,
    item_info_name: data.item_info ? data.item_info.name : '',
    item_info_id: data.item_info ? data.item_info.id : '',
    item_info_group_id: data.item_info_group_id,
    description: data.description,
    faq_id: data.item_type ? data.item_type.how_to_trade_faq_id : '',
    use_auto_delivery: Boolean(data.use_auto_delivery),
    use_fast_delivery: Boolean(data.use_fast_delivery),
    shop_profile_picture_url: data.seller && data.seller.shop_profile_picture_url && data.seller.shop_profile_picture_url.length > 0 ? forceHttps(data.seller.shop_profile_picture_url) : null,
    shop_is_open: data.seller && data.seller.is_open === 1,
    shop_created_since: data.seller.created_since,
    is_active: data.is_active === 1,
    shop_is_active: data.seller && data.seller.is_active === 1,
    ready_stock: data.stock < data.min_order,
    item_category_id: data.item_type ? data.item_type.item_category_id : null,
    is_fast_delivery_eligible: Boolean(data.item_type?.is_fast_delivery_eligible),
    required_info: data.item_type?.required_info,
    shop_url: routeBuilder(ROUTER_NAME.SHOP, { shop_name: data.seller.slug }),
    shop_slug: data.seller.slug,
    item_info_slug: data.item_info?.slug,
    use_ads: data.use_ads ? data.use_ads : 0,
  } as Partial<IProductDetail>;
};

export const productListComponentHelper = (products: IProduct[], options?: { src?: string; eventGroupsMap?: { [id: number]: IEventItemInfoGroup } }) => {
  return products.map((item: IProduct) => ({
    itemImageURL: item.image_url,
    itemInfo: item.name,
    itemPrice: item.competitor_price && item.competitor_price > item.price ? item.competitor_price : item.price,
    priceAfterDiscount: item.price,
    itemDiscount: item.competitor_price && item.competitor_price > item.price ? ((item.competitor_price - item.price) / item.competitor_price) * 100 : 0,
    itemServerGroup: item.server_name ? item.server_name : item.game_name,
    itemSold: item.order_count,
    itemStock: item.stock,
    isPromoted: item.use_ads,
    itemDelivery: item.use_fast_delivery ? '10 Menit Kirim' : 'Pengiriman Instan',
    itemDeliveryShow: item.use_auto_delivery || item.use_fast_delivery,
    itemGuaranteeShow: item.is_antihackback,
    itemCheaperThanShow: item.is_cheaper_than_market,
    itemWholesalerShow: item.grosir,
    // onClick: () => {
    //   let route = routes.product.route + item.seo_string + '/' + item.id;
    //   if (options?.src) {
    //     route = route + '?src=' + options.src + '&fromAds=1';
    //   }
    //   window.location.href = route;
    // },

    // SEND href FOR PRODUCT INSTEAD OF function. FIX PRODUCT CANNOT OPEN IN NEW TAB
    href: options?.src ? routeBuilder(ROUTER_NAME.PRODUCT_DETAIL, { seo_string: item.seo_string, product_id: item.id }) + '' + queryUrlBuilder({ src: options?.src, fromAds: 1 }) : routeBuilder(ROUTER_NAME.PRODUCT_DETAIL, { seo_string: item.seo_string, product_id: item.id }),
  }));
};


export interface IFavoriteGameList {
  id: number;
  name: string;
  is_category_sales: boolean;
}

export const uniqueFavoriteGameListHelper = (data: any) => {
  return data.map((item: any) => {
    const sellerGame: IFavoriteGameList = {
      id: item.id,
      name: item.name,
      is_category_sales: true,
    };
    return sellerGame;
  });
};

export const wishlistProductHelper = (data: any) => {
  return data.map((item: any) => {
    const productList: IProductWishlist = {
      name: item.name,
      game_name: item.game ? item.game.name : '',
      image: item.images && item.images.length > 0 && item.images[0].image_url ? forceHttps(item.images[0].image_url) : false,
      id: item.id,
      price: item.price,
      discount: item.competitor_price && item.competitor_price > item.price ? item.competitor_price : null,
      is_cheaper_than_competitor: item.competitor_price && item.competitor_price > item.price,
      grosir: item.wholesale.length > 0,
      orderCount: item.order_record ? item.order_record.successful_order_count : null,
      use_fast_delivery: item.use_fast_delivery,
      use_auto_delivery: item.use_auto_delivery,
      is_cheaper_than_market: item.market_price && item.market_price > item.price,
      item_category_id: item.item_type ? item.item_type.item_category_id : null,
      updated_at: item.updated_at,
      seller_rating: item.seller.average_rating,
      shop_name: item.seller.shop_name,
      server_name: item.server_name,
      stock: item.stock,
      min_order: item.min_order,
      is_open: item.seller && item.seller.is_open === 1,
      is_active: item.is_active === 1,
      shop_is_active: item.seller && item.seller.is_active === 1,
      ready_stock: item.stock < item.min_order,
      seo_string: item.seo_string,
    };

    return productList;
  });
};
