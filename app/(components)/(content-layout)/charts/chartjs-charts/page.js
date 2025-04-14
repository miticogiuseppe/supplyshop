"use client"
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from "react-chartjs-2";
import * as chartjsdata from "../../../../../shared/data/charts/chartjsdata";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SpkChartJs from "../../../../../shared/@spk-reusable-components/reusable-plugins/spk-chartjs";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const ChartjsCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Chartjs Charts"} />

            <Pageheader title="Charts" currentpage="ChartJs" activepage="ChartJs" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Line Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <SpkChartJs id="chartjs-charts" type="line" chartOptions={chartjsdata.Option} chartSeries={chartjsdata.Data} height='250px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <SpkChartJs id="chartjs-charts" type="bar" chartOptions={chartjsdata.Option1} chartSeries={chartjsdata.Data1} height='250px' />

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Pie Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <SpkChartJs id="chartjs-charts" type="pie" chartOptions={chartjsdata.Option2} chartSeries={chartjsdata.Data2} height='250px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Doughnut Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <SpkChartJs id="chartjs-charts" type="doughnut" chartOptions={chartjsdata.Option3} chartSeries={chartjsdata.Data3} height='250px' />

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Polar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <SpkChartJs id="chartjs-charts" type="polarArea" chartOptions={chartjsdata.Option5} chartSeries={chartjsdata.Data5} height='250px' />

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Radial Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <SpkChartJs id="chartjs-charts" type="radar" chartOptions={chartjsdata.Option6} chartSeries={chartjsdata.Data6} height='250px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Scatter Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <SpkChartJs id="chartjs-charts" type="scatter" chartOptions={chartjsdata.Option7} chartSeries={chartjsdata.Data7} height='250px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Bubble Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <SpkChartJs id="chartjs-charts" type="bubble" chartOptions={chartjsdata.Option8} chartSeries={chartjsdata.Data8} height='250px' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default ChartjsCharts;