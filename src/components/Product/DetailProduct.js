import React, { PureComponent } from 'react';
import ImageProduct from './ImageProduct';
import InfoProduct from './InfoProduct';
import StoreItem from '../Store/StoreItem';

import productMain from '../../assets/images/Products/product_1_1.png';
import thumb_1 from '../../assets/images/Products/product_1_2.png';
import thumb_2 from '../../assets/images/Products/product_1_3.png';

import relatedItem from '../../assets/images/items/item.png';

class DetailProduct extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            thumbnails: [
                { source: thumb_1, isVideo: false },
                { source: thumb_2, isVideo: false },
                { source: null, isVideo: true },
            ]
        }
    }

    render() {
        return (
            <div className="container space-separator">
                <div className="row">                    
                    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <ImageProduct thumbnails={this.state.thumbnails} fileName={productMain} />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <InfoProduct />
                    </div>
                </div>
                <div className="RelatedProducts">
                    <h3 className="RelatedProducts-title">Productos de la misma colección</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                    </div>
                </div>
                <div className="RelatedProducts">
                    <h3 className="RelatedProducts-title">Productos relacionados</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProduct;