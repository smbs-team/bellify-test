import React, { PureComponent } from 'react';
import StoreItem from './StoreItem';

import { Link } from 'react-router-dom';

import dummyData from '../../data/dummy-items';

class ListStore extends PureComponent {
    render() {
        return (
            <div className="container space-separator Store">
                <div className="row">
                    {dummyData.map((dd) => {
                        return <div className="col-md-3">
                            <StoreItem fileName={dd.image} title={dd.name} price={dd.price} />
                        </div>
                    })}
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