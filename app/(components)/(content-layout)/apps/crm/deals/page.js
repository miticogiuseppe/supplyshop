"use client"
import SpkDealcards from "../../../../../../shared/@spk-reusable-components/reusable-apps/spk-dealcards";
import SpkDealsCard from "../../../../../../shared/@spk-reusable-components/reusable-apps/spk-dealscard";
import SpkFlatpickr from "../../../../../../shared/@spk-reusable-components/reusable-plugins/spk-flatpicker";
import SpkBadge from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Dealsdata, Dealsdata1, Dealsdata2, Dealsdata3, Dealsdata4, Dealsdata5, Dealsdata6 } from "../../../../../../shared/data/apps/crm/dealsdata";
import Pageheader from "../../../../../../shared/layouts-components/page-header/pageheader";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, InputGroup, Modal, Row } from "react-bootstrap";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const Deals = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [_startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        if (date) {
            setStartDate(date);
        }
    };

    const firstContainerRef = useRef(null);
    const secondContainerRef = useRef(null);
    const thirdContainerRef = useRef(null);
    const fourthContainerRef = useRef(null);
    const fifthContainerRef = useRef(null);
    const sixthContainerRef = useRef(null);


    useEffect(() => {
        if (typeof window !== "undefined") {
            const dragula = require("dragula");
            const windowElement = window;

            if (firstContainerRef.current && secondContainerRef.current) {
                const containers = [
                    firstContainerRef.current,
                    secondContainerRef.current,
                    thirdContainerRef.current,
                    fourthContainerRef.current,
                    fifthContainerRef.current,
                    sixthContainerRef.current,

                ];
                const drake = dragula(containers);

                if (document.querySelector(".firstdrag")?.classList.contains("task-Null")) {
                    document.querySelector(".view-more-button")?.classList.add("d-none");
                }
            }
        }
    }, []);

    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}
            <Seo title="Crm-Deals" />

            <Pageheader title="Apps" subtitle="CRM" currentpage="Deals" activepage="Deals" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="fw-medium fs-16 me-2">Deals</span><SpkBadge variant="primary" Customclass="align-middle">26</SpkBadge>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <SpkButton Buttonvariant="primary" Size="sm" Customclass="" onClickfunc={handleShow} Buttontoggle="modal" Buttontarget="#create-contact">
                                        <i className="ri-add-line me-1 fw-medium align-middle"></i>New Deal
                                    </SpkButton>
                                    <SpkButton Buttonvariant="success-light" Size="sm" Customclass="">
                                        Export As CSV
                                    </SpkButton>
                                    <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                        <Dropdown.Item as="li" href="#!">Newest</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">Date Added</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">A - Z</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                {Dealsdata.map((idx) => (
                    <Col xxl={2} md={4} className="" key={Math.random()}>
                        <SpkDealcards key={Math.random()} cardClass={`border border-${idx.color} border-opacity-50`} bodyClass="p-3" mainClass="d-flex align-items-top flex-wrap justify-content-between" icon={idx.iconClass} iconClass={idx.title} iconColor={idx.color} badge={idx.badgeText} badgeColor={idx.color} iconColors={idx.color} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={2} className="" id="leads-discovered" ref={firstContainerRef}>
                    {Dealsdata1.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="leads-qualified" ref={secondContainerRef}>
                    {Dealsdata2.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="contact-initiated" ref={thirdContainerRef}>
                    {Dealsdata3.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="needs-identified" ref={fourthContainerRef}>
                    {Dealsdata4.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="negotiation" ref={fifthContainerRef}>
                    {Dealsdata5.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
                <Col xxl={2} className="" id="deal-finalized" ref={sixthContainerRef}>
                    {Dealsdata6.map((idx) => (
                        <SpkDealsCard key={Math.random()} cardClass="custom-card" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                    ))}
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}

            {/* <!-- Start:: New Deal --> */}
            <Modal show={show} onHide={handleClose} centered className="fade" id="create-contact" tabIndex={-1}>
                <div className="modal-content">
                    <Modal.Header>
                        <h6 className="modal-title">New Deal</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" onClickfunc={handleClose}
                            Buttonlabel="Close"></SpkButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <img src="../../../assets/images/faces/9.jpg" alt="" id="profile-img" />
                                        <SpkBadge variant="primary" Customclass="rounded-pil avatar-badge">
                                            <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                            <i className="fe fe-camera"></i>
                                        </SpkBadge>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-name" className="">Contact Name</Form.Label>
                                <Form.Control type="text" className="" id="deal-name" placeholder="Contact Name" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-lead-score" className="">Deal Value</Form.Label>
                                <Form.Control type="number" className="" id="deal-lead-score" placeholder="Deal Value" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name" className="">Company Name</Form.Label>
                                <Form.Control type="text" className="" id="company-name" placeholder="Company Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Last Contacted</Form.Label>
                                <InputGroup className="custom-input-group">
                                    <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                    <SpkFlatpickr inputClass="form-control" placeholder='Choose date and time' onfunChange={handleDateChange} dataEnableTime={true} />
                                </InputGroup>
                            </Col>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}
                            Buttondismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button">Create Deal</SpkButton>
                    </Modal.Footer>
                </div>
            </Modal>
            {/* <!-- End:: New Deal --> */}
        </Fragment>
    )
};

export default Deals;