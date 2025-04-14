"use client"
import Spkapexcharts from "../../../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Boxplothoptions, Boxplothseries, Boxplotoptions, Boxplotseries, Boxplotsoptions, Boxplotsseries } from "../../../../../../shared/data/charts/apexcharts/boxplotdata";
import Pageheader from "../../../../../../shared/layouts-components/page-header/pageheader";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const BoxplotChart = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Boxplot Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Boxplot Charts" activepage="Apex Boxplot Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Boxplot Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-basic">
                                <Spkapexcharts chartOptions={Boxplotoptions} chartSeries={Boxplotseries} type="boxPlot" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Boxplot With Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-scatter">
                                <Spkapexcharts chartOptions={Boxplotsoptions} chartSeries={Boxplotsseries} type="boxPlot" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Horizontal Boxplot Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="boxplot-horizontal">
                                <Spkapexcharts chartOptions={Boxplothoptions} chartSeries={Boxplothseries} type="boxPlot" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default BoxplotChart;