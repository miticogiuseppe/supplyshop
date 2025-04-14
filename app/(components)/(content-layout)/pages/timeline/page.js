"use client"
import SpkTimeline from "../../../../../shared/@spk-reusable-components/reusable-pages/timeline/spk-timeline1";
import SpkTimelineStep from "../../../../../shared/@spk-reusable-components/reusable-pages/timeline/spk-timeline3";
import Notification from "../../../../../shared/@spk-reusable-components/reusable-pages/timeline/spk-timeline2";
import SpkNotificationtimeline from "../../../../../shared/@spk-reusable-components/reusable-pages/timeline/spk-timeline2";
import SpkButton from "../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { notifications, steps, timelineData } from "../../../../../shared/data/pages/timelinedata";
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const Timeline = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Pages-Timeline" />

            <Pageheader title="Pages" currentpage="Timeline" activepage="Timeline" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row className="justify-content-center">
                <Col xxl={11}>
                    <Card className=" custom-card border overflow-hidden">
                        <div className="card-header">
                            <div className="card-title">
                                Timeline 01
                            </div>
                        </div>
                        <Card.Body className=" bg-light">
                            <div className="timeline container">
                                <Row>
                                    <Col lg={12}>
                                        <SpkTimeline timelineData={timelineData} />
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <div className="row justify-content-center timeline-2">
                <Col xxl={11}>
                    <Card className=" custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Timeline 02
                            </div>
                        </div>
                        <ul className="notification container px-3">
                            {notifications.map((notification, index) => (
                                <Notification key={index} {...notification} />
                            ))}
                        </ul>
                        <div className="text-center mb-4">
                            <SpkButton Buttonvariant="success-light" Customclass="btn-loader mx-auto">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </SpkButton>
                        </div>
                    </Card>
                </Col>
            </div>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <div className="row justify-content-center timeline-3">
                <Col xxl={11}>
                    <Card className=" custom-card">
                        <div className="card-header pb-4">
                            <div className="card-title">Timeline 03</div>
                        </div>
                        <Card.Body className=" pt-xxl-5 mt-xxl-5">
                            <div className="timeline-steps">
                                {steps.map((step, index) => (
                                    <SpkTimelineStep key={index} {...step} />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    )
};

export default Timeline;