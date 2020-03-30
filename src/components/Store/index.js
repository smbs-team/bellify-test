import React, { Fragment } from 'react';
import ListStore from './ListStore';
import FilterStore from './FilterStore';

export default function ShopList() {
    return (
        <Fragment>
            <div className="container-fluid">
                <FilterStore />
            </div>
            <ListStore />    
        </Fragment>
    );
}