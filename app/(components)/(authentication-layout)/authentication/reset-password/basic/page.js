"use client"
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const Basic = () => {

    useEffect(() => {
        document.querySelector("body")?.classList.add("authentication-background");

        return () => {
            document.querySelector("body")?.classList.remove("authentication-background");

        }
    }, [])

    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <Fragment>
            <Seo title="ResetPassword-Basic" />
            <div className="container-lg">
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <Card className="custom-card my-4">
                            <Card.Body className="p-5">
                                <div className="mb-3 d-flex justify-content-center">
                                    <Link href="/dashboard/sales">
                                        <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <img src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                                    </Link>
                                </div>
                                <p className="h5 mb-2 text-center">Reset Password</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center fs-14">Hi Henry!</p>
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="create-password" className="text-default">Current Password</Form.Label>
                                        <sup className="fs-12 text-danger">*</sup>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow) ? 'text' : "password"} className="form-control" id="create-password" placeholder="current password" />
                                            <Link scroll={false} href="#!" onClick={() => setpasswordshow(!passwordshow)} className="show-password-button text-muted"
                                            ><i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="create-password" className="text-default">New Password</Form.Label>
                                        <sup className="fs-12 text-danger">*</sup>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control" id="create-password" placeholder="new password" />
                                            <Link scroll={false} href="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-muted"
                                            ><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <Form.Label htmlFor="create-confirmpassword" className="text-default">Confirm Password</Form.Label>
                                        <sup className="fs-12 text-danger">*</sup>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow2) ? 'text' : "password"} className="form-control" id="create-confirmpassword" placeholder="confirm password" />
                                            <Link scroll={false} href="#!" onClick={() => setpasswordshow2(!passwordshow2)} className="show-password-button text-muted"
                                            ><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                        <div className="mt-2">
                                            <div className="form-check mb-0">
                                                <Form.Check className="" type="checkbox" defaultValue="" id="defaultCheck1" />
                                                <label className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <div className="d-grid mt-4">
                                    <Link href="/authentication/sign-in/basic" className="btn btn-primary">Create</Link>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3">Remembered your password? <Link href="/authentication/sign-in/basic" className="text-primary">Sign In</Link></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
};

export default Basic;