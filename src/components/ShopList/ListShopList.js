import React, { PureComponent } from 'react';
import ShopItem from './ShopItem';
import ItemImage1 from '../../assets/images/items/item.png';

class ListShopList extends PureComponent {
    render() {
        return (
            <div className="container space-separator">
                <div className="row">
                    <div className="col-md-3">
                        <ShopItem fileName={ItemImage1} title='Lorem Ipsum' price={'25.00 €'} />
                    </div>
                    <div className="col-md-3">
                        <ShopItem fileName={ItemImage1} title='Lorem Ipsum' price={'25.00 €'} />
                    </div>
                    <div className="col-md-3">
                        <ShopItem fileName={ItemImage1} title='Lorem Ipsum' price={'25.00 €'} />
                    </div>
                    <div className="col-md-3">
                        <ShopItem fileName={ItemImage1} title='Lorem Ipsum' price={'25.00 €'} />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ListShopList;