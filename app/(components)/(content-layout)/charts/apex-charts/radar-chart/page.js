"use client"
import Spkapexcharts from "../../../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Multioptions, Multiseries, Ploygonseries, Polygonoptions, Radaroptions, Radarseries } from "../../../../../../shared/data/charts/apexcharts/radardata";
import Pageheader from "../../../../../../shared/layouts-components/page-header/pageheader";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const RadarChart = () => {
    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title={"Radar Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Radar Charts" activepage="Apex Radar Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Radar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-basic">
                                <Spkapexcharts chartOptions={Radaroptions} chartSeries={Radarseries} type="radar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Radar Chart-Multiple Series</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-multiple">
                                <Spkapexcharts chartOptions={Multioptions} chartSeries={Multiseries} type="radar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Radar Chart Polygon Fill</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-polygon">
                                <Spkapexcharts chartOptions={Polygonoptions} chartSeries={Ploygonseries} type="radar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default RadarChart;