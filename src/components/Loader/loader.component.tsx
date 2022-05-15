import React from 'react';

import loaderIcon from 'assets/icons/loader-fill.svg';
import './loader.styles.scss';

type LoaderProps = {
    visible: boolean
};

const Loader: React.FC<LoaderProps> = ({visible}) => {
    if (!visible) return null;
    return (
        <div className="loader">
            <img src={loaderIcon} alt="loader" /> 
            <p>Loading...</p>
        </div>
    );
};

export default Loader;