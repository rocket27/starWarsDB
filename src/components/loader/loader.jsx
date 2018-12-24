import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <div className="lds-css ng-scope">
            <div style={{width: 100 + '%', height: 100 + '%'}} className="lds-ellipsis">
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;