import React, { Fragment } from 'react';
import Banner from '../../components/Banner';
import BannerFile from '../../assets/images/banners/store-banner.jpg';
import Product from '../../components/Product';
import Breadcrumb from '../../components/Breadcrumb';

export default function Home() {
    return (
        <Fragment>
            <Banner fileName={BannerFile} title='Tienda Online'/>
            <Breadcrumb />
            <Product />
        </Fragment>
    );
}