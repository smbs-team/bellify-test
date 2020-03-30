import React from 'react';
import PropTypes from 'prop-types';

const ShopItem = (props) => {
    return (
        <div className="ShopItem">
            <div className="ShopItem-image">
                <img src={props.fileName} alt="" width="100%"/>
            </div>
            <div className="ShopItem-title" data-price={props.price}>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}

ShopItem.propTypes = {
    fileName: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string
}

export default ShopItem;