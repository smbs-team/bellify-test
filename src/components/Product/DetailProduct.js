import React, { PureComponent } from 'react';
import ImageProduct from './ImageProduct';
import InfoProduct from './InfoProduct';

import productMain from '../../assets/images/Products/product_1_1.png';
import thumb_1 from '../../assets/images/Products/product_1_2.png';
import thumb_2 from '../../assets/images/Products/product_1_3.png';

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
            </div>
        );
    }
}

export default DetailProduct;