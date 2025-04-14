"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import SpkButton from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const Cover = () => {

    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);

    return (
        <Fragment>
            <Seo title="Signup-Cover" />
            <Row className="authentication authentication-cover-main mx-0">
                <Col xxl={6} xl={7} className="">
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={7} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card my-5 border">
                                <Card.Body className="p-5">
                                    <p className="h5 mb-2 text-center">Sign Up</p>
                                    <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome! Begin by creating your account.</p>
                                    <div className="d-flex mb-3 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                        <SpkButton Buttontype="button" Buttonvariant="light" Customclass="border d-flex align-items-center justify-content-center flex-fill btn-light">
                                            <span className="avatar avatar-xs">
                                                <img src="../../../assets/images/media/apps/google.png" alt="" />
                                            </span>
                                            <span className="lh-1 ms-2 fs-13 text-default">Signup with Google</span>
                                        </SpkButton>
                                    </div>
                                    <div className="text-center my-3 authentication-barrier">
                                        <span>OR</span>
                                    </div>
                                    <div className="row gy-3">
                                        <div className="col-xl-12">
                                            <Form.Label htmlFor="signup-firstname" className="text-default">Full Name<sup className="fs-12 text-danger">*</sup></Form.Label>
                                            <Form.Control type="text" id="signup-firstname" placeholder="full name" />
                                        </div>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="create-password" className="text-default">Password<sup className="fs-12 text-danger">*</sup></Form.Label>
                                            <div className="position-relative">
                                                <Form.Control type={(passwordshow) ? 'text' : "password"} className="form-control" id="create-password" placeholder="password" />
                                                <Link scroll={false} href="#!" onClick={() => setpasswordshow(!passwordshow)} className="show-password-button text-muted"
                                                ><i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                            </div>
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signup-confirmpassword" className="text-default">Confirm Password<sup className="fs-12 text-danger">*</sup></Form.Label>
                                            <div className="position-relative">
                                                <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control" id="create-password" placeholder="confirm password" />
                                                <Link scroll={false} href="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-muted"
                                                ><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                            </div>
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label text-muted fw-normal fs-14" htmlFor="defaultCheck1">
                                                </label>
                                                By creating a account you agree to our
                                                <Link scroll={false

                                                } href="/pages/terms-conditions" className="text-success"><u>Terms & Conditions</u></Link> and <a className="text-success"><u>Privacy Policy</u></a>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="">Create Account</SpkButton>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Already have an account? <Link scroll={false} href="/authentication/sign-in/basic" className="text-primary">Sign In</Link></p>
                                    </div>
                                    <div className="btn-list text-center mt-3">
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-icon">
                                            <i className="ri-facebook-line lh-1 align-center fs-17"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary1-light" Customclass="btn-icon">
                                            <i className="ri-twitter-x-line lh-1 align-center fs-17"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary2-light" Customclass="btn-icon">
                                            <i className="ri-instagram-line lh-1 align-center fs-17"></i>
                                        </SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={5} lg={12} className="d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="authentication-cover-logo">
                            <Link scroll={false} href="/dashboard/sales">
                                <img src="../../../assets/images/brand-logos/desktop-white.png" alt="" className="authentication-brand desktop-white" />
                            </Link>
                        </div>
                        <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
                            <div>
                                <h3 className="text-fixed-white mb-1 fw-medium">Welcome Henry!</h3>
                                <h6 className="text-fixed-white mb-3 fw-medium">Login to Your Account</h6>
                                <p className="text-fixed-white mb-1 op-6">Welcome to the Admin Dashboard. Please log in to securely manage your administrative tools and oversee platform activities. Your credentials ensure system integrity and functionality.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
};

export default Cover;