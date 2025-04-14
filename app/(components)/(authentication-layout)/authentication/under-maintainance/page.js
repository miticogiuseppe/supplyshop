"use client"
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import SpkButton from "../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { DayCounter } from "../../../../../shared/data/authentication/comingsoondata";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const UnderMaintenance = () => {

    useEffect(() => {
        document.querySelector("body")?.classList.add("coming-soon-main");
        return () => {
            document.querySelector("body")?.classList.remove("coming-soon-main");
        }
    }, [])

    return (
        <Fragment>
            <Seo title="Under-Maintainance" />
            <Row className="authentication coming-soon justify-content-center g-0 my-auto">
                <Col xxl={5} xl={5} lg={5} md={6} sm={7} className="col-11 my-auto">
                    <div className="authentication-cover rounded-3 overflow-hidden card custom-card border my-3">
                        <div className="aunthentication-cover-content text-center">
                            <Row className="justify-content-center align-items-center mx-0 g-0">
                                <Col xxl={11} xl={10} lg={10} md={12} sm={12} className="col-12">
                                    <div>
                                        <div className="mb-4"> <Link scroll={false} href="/dashboard/sales">
                                            <img src="../../assets/images/brand-logos/toggle-logo.png" alt="" className="authentication-brand" /> </Link>
                                        </div>
                                        <h4 className="mb-2">Under Maintenance</h4>
                                        <p className="mb-5 text-muted">Excuse our digital dust - we're sprucing up our site to bring you an even better browsing adventure soon!</p>
                                        <div className="input-group mb-5">
                                            <Form.Control type="email" className="form-control-lg bg-light" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                            <SpkButton Buttontype="button" Buttonvariant="primary" Size="lg" Customclass="" Id="button-addon2">Subscribe</SpkButton>
                                        </div>
                                        <DayCounter />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>

            </Row>
        </Fragment>
    )
};

export default UnderMaintenance;