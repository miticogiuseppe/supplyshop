import React, { Fragment } from 'react';

const SpkAnalyticsActive = ({ color, icon, header, inc, percent, color1, data, imgSrc, tiIcon }) => {
    return (
        <Fragment>
            <li>
                <div className="d-flex align-items-center gap-2">
                    <div>
                        <span className={`avatar avatar-md avatar-rounded bg-${color}-transparent`}>
                            {imgSrc ? (
                                <img src={imgSrc} alt={header} className="avatar-img" />
                            ) : (
                                <i className={icon}></i>
                            )}
                        </span>
                    </div>
                    <div className="flex-fill">
                        <span className="d-block fw-medium">{header}</span>
                        <span className="fs-13 text-muted">
                            {inc}
                            <span className={`text-${color1} fw-medium ms-1 mx-1`}>
                                {percent}% <i className={`ti ti-arrow-narrow-${tiIcon}`}></i>
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className="d-block fs-15 mb-0 fw-medium">{data}</span>
                    </div>
                </div>
            </li>
        </Fragment>
    );
};

export default SpkAnalyticsActive;
