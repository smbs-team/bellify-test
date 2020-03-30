import React, { Fragment } from 'react';
import Banner from '../../components/Banner';
import BannerFile from '../../assets/images/banners/store-banner.jpg';
import Product from '../../components/Product';
import Breadcrumb from '../../components/Breadcrumb';
import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";

function Home() {
    const {id} = useParams();
    return (
        <Fragment>
            <Banner fileName={BannerFile} title='Tienda Online'/>
            <Breadcrumb />
            <Product id={parseInt(id)} />
        </Fragment>
    );
}

Home.propTypes = {
    id: PropTypes.string    
}

export default Home;
