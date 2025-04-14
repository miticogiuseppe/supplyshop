"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const Error500 = () => {
    return (
        <Fragment>
            <Seo title="500-Error" />
            <div className="page error-bg">
                {/* <!-- Start::error-page --> */}
                <div className="error-page">
                    <div className="container">
                        <div className="my-auto">
                            <div className="row align-items-center justify-content-center h-100">
                                <Col xl={7} lg={5} md={6} className="col-12">
                                    <p className="error-text mb-4">500</p>
                                    <p className="fs-4 fw-normal mb-2">Oops, the page you are trying to access does not exist ?</p>
                                    <p className="fs-15 mb-5 text-muted">The requested page is not available. It might have been relocated, deleted, or never existed.</p>
                                    <Link scroll={false} href="/dashboard/sales" className="btn btn-primary"><i className="ri-arrow-left-line align-middle me-1 d-inline-block"></i> BACK TO HOME PAGE</Link>
                                </Col>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Error500;