import React from 'react';
import PropTypes from 'prop-types';

export default function Banner(props) {
    return (
        <div className="BannerSection" style={{backgroundImage:`url(${props.fileName})`}}>
            <h1 className="BannerSection-title">
                {props.title}
            </h1>
        </div>
    );
}

Banner.propTypes = {
    fileName: PropTypes.string,
    title: PropTypes.string
}

