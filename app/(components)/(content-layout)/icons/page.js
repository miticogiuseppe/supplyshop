"use client"
import SpkTooltips from '../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips'
import { Bootstrapicons, Boxicons, Feathericons, LineAwesomeicons, Remixicons, Tablericons } from '../../../../shared/data/iconsdata'
import Pageheader from '../../../../shared/layouts-components/page-header/pageheader'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Seo from '../../../../shared/layouts-components/seo/seo'

const Icons = () => {

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Icons"} />

            <Pageheader title="Icons" currentpage="Icons" activepage="Icons" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 -->  */}
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">

                        <Card.Header>
                            <div className="card-title">Bootstrap Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://icons.getbootstrap.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className={`"bi bi-ICON_NAME"`}&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Bootstrapicons.map((idx) => (
                                    <li className="icons-list-item" key={Math.random()} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-arrow-left-circle">
                                        <SpkTooltips placement="top" title={idx.text}>
                                            <i className={`bi bi-${idx.text}`}></i>
                                        </SpkTooltips>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">

                        <Card.Header>
                            <div className="card-title">Remix Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://remixicon.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className={`"ri-ICON_NAME"`}&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Remixicons.map((idx) => (
                                    <li className="icons-list-item" key={Math.random()} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-arrow-left-circle">
                                        <SpkTooltips placement="top" title={idx.text}>
                                            <i className={`ri ${idx.text}`}></i>
                                        </SpkTooltips>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">

                        <Card.Header>
                            <div className="card-title">Feather Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://feathericons.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className={`"fe fe-ICON_NAME"`}&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Feathericons.map((idx) => (
                                    <li className="icons-list-item" key={Math.random()} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-arrow-left-circle">
                                        <SpkTooltips placement="top" title={idx.text}>
                                            <i className={`fe fe-${idx.text}`}></i>
                                        </SpkTooltips>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">

                        <Card.Header>
                            <div className="card-title">Tabler Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://tabler-icons.io/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className={`"ti ti-ICON_NAME"`}&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Tablericons.map((idx) => (
                                    <li className="icons-list-item" key={Math.random()} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-arrow-left-circle">
                                        <SpkTooltips placement="top" title={idx.text}>
                                            <i className={`ti ti-${idx.text}`}></i>
                                        </SpkTooltips>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">

                        <Card.Header>
                            <div className="card-title">Line Awesome Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://icons8.com/line-awesome" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className={`"las la-ICON_NAME"`}&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {LineAwesomeicons.map((idx) => (
                                    <li className="icons-list-item" key={Math.random()} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-arrow-left-circle">
                                        <SpkTooltips placement="top" title={idx.text}>
                                            <i className={`las la-${idx.text}`}></i>
                                        </SpkTooltips>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">

                        <Card.Header>
                            <div className="card-title">Boxicons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://boxicons.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className={`"bx bx-ICON_NAME"`}&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                {Boxicons.map((idx) => (
                                    <li className="icons-list-item" key={Math.random()} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-arrow-left-circle">
                                        <SpkTooltips placement="top" title={idx.text}>
                                            <i className={`bx bx-${idx.text}`}></i>
                                        </SpkTooltips>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
}

export default Icons