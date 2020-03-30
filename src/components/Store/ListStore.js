import React, { PureComponent } from 'react';
import StoreItem from './StoreItem';
import ItemImage1 from '../../assets/images/items/item.png';

import { Link } from 'react-router-dom';

class ListStore extends PureComponent {
    render() {
        return (
            <div className="container space-separator">
                <div className="row">
                    <div className="col-md-3">
                        <StoreItem fileName={ItemImage1} title='Lorem Ipsum' price={'25.00 €'} />
                    </div>
                    <div className="col-md-3">
                        <StoreItem fileName={ItemImage1} title='Lorem Ipsum' price={'25.00 €'} />
                    </div>
                    <div className="col-md-3">
                        <StoreItem fileName={ItemImage1} title='Lorem Ipsum' price={'25.00 €'} />
                    </div>
                    <div className="col-md-3">
                        <StoreItem fileName={ItemImage1} title='Lorem Ipsum' price={'25.00 €'} />
                    </div>
                </div>
                <div className="paginationCustom-wrapper">
                    <nav aria-label="Page navigation">
                        <ul className="paginationCustom">
                            <li className="pageCustom-item"><Link to={''} className="pageCustom-link selected" href="#">1</Link></li>
                            <li className="pageCustom-item"><Link to={''} className="pageCustom-link" href="#">2</Link></li>
                            <li className="pageCustom-item"><Link to={''} className="pageCustom-link" href="#">3</Link></li>
                            <li className="pageCustom-item"><Link to={''} className="pageCustom-link next" href="#">Siguiente</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default ListStore;