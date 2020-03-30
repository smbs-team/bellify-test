import React, { Fragment } from 'react';
import Banner from '../../components/Banner';
import BannerFile from '../../assets/images/banners/store-banner.jpg';
import ImageProduct from '../../components/Product/ImageProduct/index';
import Breadcrumb from '../../components/Breadcrumb';

import productMain from '../../assets/images/Products/product_1_1.png';
import thumb_1 from '../../assets/images/Products/product_1_2.png';
import thumb_2 from '../../assets/images/Products/product_1_3.png';

export default function Home() {
    const productThumbs = [
        { source: thumb_1, isVideo: false },
        { source: thumb_2, isVideo: false },
        { source: null, isVideo: true },
    ]

    return (
        <Fragment>
            <Banner fileName={BannerFile} title='Tienda Online'/>
            <Breadcrumb />
            <ImageProduct fileName={productMain} thumbnails={productThumbs} />
        </Fragment>
    );
}