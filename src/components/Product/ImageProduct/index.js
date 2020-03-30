import React from 'react';
import PropTypes from 'prop-types';
import Preview from './preview';

// import productMain from '../../../assets/images/Products/product_1_1.png';
// import thumb_1 from '../../../assets/images/Products/product_1_2.png';
// import thumb_2 from '../../../assets/images/Products/product_1_3.png';

const ImageProduct = (props) => {
    const renderThumbs = () => {
        return props.thumbnails.map((t) => (
            <Preview fileName={t.source} isVideo={t.isVideo} />
        ))
    }

    return (
        <div className="ImageProduct">
            <div className="ImageProduct-main">
                <img src={props.fileName} alt=""/>                
            </div>            
            <div className="ImageProduct-thumbs">
                { renderThumbs() }
            </div>
        </div>
    );
}

ImageProduct.propTypes = {
    fileName: PropTypes.string,
    thumbnails: PropTypes.arrayOf(PropTypes.shape({
        isVideo: PropTypes.bool,
        source: PropTypes.string
    }))    
}

export default ImageProduct;