import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

const SpkHrmcard = ({ title, price, percent, data, color, chartOptions, chartSeries, cardClass = '', icon, type, height, width }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <div className="m-3 bg-light rounded-1 border">
                    <Card.Body className="pb-4 mb-2">
                        <div className="d-flex align-items-center w-100 justify-content-between gap-1">
                            <div>
                                <p className="mb-1 text-muted fw-medium">{title}</p>
                                <h4 className="mb-0 fw-medium">{price}</h4>
                            </div>
                            <div className="ms-auto text-end">
                                <span className={`badge bg-${color} rounded-pill align-items-center fs-11`}>
                                    <i className={`ri-arrow-left-${icon}-line fs-11 me-1`}></i>{percent}
                                </span>
                                <div className="text-muted fs-12 mt-1">{data}</div>
                            </div>
                        </div>
                    </Card.Body>
                    <div id="employees">
                        <Spkapexcharts chartOptions={chartOptions} chartSeries={chartSeries} type={type} width={width} height={height}/>
                    </div>
                </div>
            </Card>
        </Fragment>
    );
};

export default SpkHrmcard;
