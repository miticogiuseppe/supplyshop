import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

const SpkMarketcap = ({ cardClass, mainClass, className, classNames, showPriceInfo, showChangeInfo, displaySection, classData, charts, series, type, width, height, obj }) => {
  return (
    <Fragment>
      <Card className={cardClass}>
        <Card.Body>
          <div className={mainClass}>
            <div className={className}>
              <div>
                <div className={classNames}>
                  <div className={classData}>
                    <span className="avatar avatar-md avatar-rounded">
                      <img src={obj.img} alt="img" />
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-1">{obj.title}</h6>
                    <span className="text-muted"> {obj.rank}</span>
                  </div>
                </div>
                {showPriceInfo && (
                  <div>
                    <div className="mb-1">
                      <span className="fs-20 fw-medium lh-1 text-primary mb-1">{obj.price}</span>
                      <span className="mb-0 text-muted ms-2">
                        <span className="text-muted">Vol:</span>
                        <span className="text-success fw-medium"> {obj.volumeChange}</span>
                      </span>
                    </div>
                    <p className="fw-medium mb-0">
                      {obj.amount} <span className="mb-1 fw-normal fs-13 text-muted">{obj.data}</span>
                    </p>
                  </div>
                )}

                {showChangeInfo && (
                  <div className="fs-24 d-block d-flex align-items-center fw-medium">
                    {obj.changePercent}
                    <span className={`fs-12 text-primary1 op-7 fw-normal ms-1`}>
                      {obj.changeValues}
                      <i className={`ti ti-arrow-big-${obj.dir}-line ms-1 d-inline-flex`}></i>
                    </span>
                    <span className={`badge bg-${obj.badgeColor} fs-10 ms-2`}>{obj.badge}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="ms-auto text-end">
              {displaySection === 'chart1' && (
                <div>

                  <div className="mb-4">
                    <p className="tx-14 mb-1 fw-semibold text-dark">{obj.marketData}</p>
                    <p className="mb-0 fs-14">
                      {obj.price1}
                      <span className={`text-success mb-0 font-weight-normal tx-13`}>
                        {obj.percent}<span className={`text-   numberfont`}>{obj.increment}</span>
                      </span>
                    </p>
                  </div>
                  <div id={obj.id}>
                    <Spkapexcharts chartOptions={charts} chartSeries={series} type={type} width={width} height={height} />
                  </div>

                </div>
              )}

              {displaySection === 'chart2' && (
                <div className="text-end ms-auto">
                  <div className="">
                    <span className={`fs-15 text-primary`}>{obj.price2}</span>
                    <span className={`text-success mx-1`}>{obj.price3}</span>
                  </div>
                  <div id={obj.id} className="mt-4 w-100">
                    <Spkapexcharts chartOptions={charts} chartSeries={series} type={type} width={width} height={height} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkMarketcap;
