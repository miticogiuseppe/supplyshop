"use client"
import Spkapexcharts from "../../../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Basicrangeoptions, Basicrangeseries, Rangecombooptions, Rangecomboseries } from "../../../../../../shared/data/charts/apexcharts/rangeareadata";
import Pageheader from "../../../../../../shared/layouts-components/page-header/pageheader";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const RangeAreaChart = () => {
    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title={"Rangearea Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Range Area Charts" activepage="Apex Range Area Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Range Area Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-basic">
                                <Spkapexcharts chartOptions={Basicrangeoptions} chartSeries={Basicrangeseries} type="rangeArea" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Combo Range Area Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-combo">
                                <Spkapexcharts chartOptions={Rangecombooptions} chartSeries={Rangecomboseries} type="rangeArea" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default RangeAreaChart;