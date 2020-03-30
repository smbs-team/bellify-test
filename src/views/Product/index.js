import React, { Fragment } from 'react';
import Banner from '../../components/Banner';
import BannerFile from '../../assets/images/banners/store-banner.jpg';
import DetailProduct from '../../components/Product/DetailProduct';
import Breadcrumb from '../../components/Breadcrumb';

export default function Home() {
    return (
        <Fragment>
            <Banner fileName={BannerFile} title='Tienda Online'/>
            <Breadcrumb />
            <DetailProduct />
        </Fragment>
    );
}