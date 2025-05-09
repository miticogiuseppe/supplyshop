"use client"
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const Empty = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Pages-Empty" />

            <Pageheader title="Pages" currentpage="Empty" activepage="Empty" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="mb-0">EMPTY CARD</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default Empty;