"use client"
import { link1, link2, link3, link4, link5, link6, link7, link8, link9 } from "../../../../../shared/data/prism/ui-elements-prism";
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import ShowCode from "../../../../../shared/layouts-components/showcode/showcode";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const LinksInteractions = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Uielements-Links&Interaction" />

            <Pageheader title="Ui Elements" currentpage="Links & Interactions" activepage="Links & Interactions" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="LINK HOVER OPACITY" reactCode={link1} customCardHeaderClass="justify-content-between">
                                <p><Link className="link-opacity-10-hover" href="#!" scroll={false}>Link hover opacity 10</Link></p>
                                <p><Link className="link-opacity-25-hover" href="#!" scroll={false}>Link hover opacity 25</Link></p>
                                <p><Link className="link-opacity-50-hover" href="#!" scroll={false}>Link hover opacity 50</Link></p>
                                <p><Link className="link-opacity-75-hover" href="#!" scroll={false}>Link hover opacity 75</Link></p>
                                <p className="mb-0"><Link className="link-opacity-100" href="#!" scroll={false}>Link hover opacity 100</Link></p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="LINK UNDERLINE OFFSET" reactCode={link2} customCardHeaderClass="justify-content-between">
                                <p><Link href="#!" scroll={false} className="text-decoration-underline">Default link</Link></p>
                                <p><Link className="link-offset-1 text-decoration-underline" href="#!" scroll={false}>Offset 1 link</Link></p>
                                <p><Link className="link-offset-2 text-decoration-underline" href="#!" scroll={false}>Offset 2 link</Link></p>
                                <p className="mb-0"><Link className="link-offset-3 text-decoration-underline" href="#!" scroll={false}>Offset 3 link</Link></p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title=" LINK UNDERLINE OPACITY" reactCode={link3} customCardHeaderClass="justify-content-between">
                                <p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" href="#!" scroll={false}>Underline opacity 0</Link></p>
                                <p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" href="#!" scroll={false}>Underline opacity 10</Link></p>
                                <p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" href="#!" scroll={false}>Underline opacity 25</Link></p>
                                <p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" href="#!" scroll={false}>Underline opacity 50</Link></p>
                                <p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" href="#!" scroll={false}>Underline opacity 75</Link></p>
                                <p><Link className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" href="#!" scroll={false}>Underline opacity 100</Link></p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="COLORED LINKS" reactCode={link4} customCardHeaderClass="justify-content-between">

                                <p><Link href="#!" scroll={false} className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-primary1 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary1 link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-primary2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary2 link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-primary3 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary3 link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Secondary link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Success link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Danger link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Warning link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Info link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Light link</Link></p>
                                <p><Link href="#!" scroll={false} className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Dark link</Link></p>
                                <p className="mb-0"><Link href="#!" scroll={false} className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline ">Emphasis link</Link></p>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="POINTER EVENTS" reactCode={link5} customCardHeaderClass="justify-content-between">
                                <p><Link className="pe-none text-primary fw-medium text-decoration-underline" tabIndex={-1} aria-disabled="true" href={""}>This link</Link> can not be clicked.</p>
                                <p><Link href="#!" scroll={false} className="pe-auto text-primary fw-medium text-decoration-underline">This link</Link> can be clicked (this is default behavior).</p>
                                <p className="pe-none mb-0"><Link tabIndex={-1} className="text-primary fw-medium text-decoration-underline" aria-disabled="true" href={""}>This link</Link> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <Link href="#!" scroll={false} className="pe-auto">this link</Link> has a <code>pe-auto</code> class and can be clicked.</p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="TEXT SELECTION" reactCode={link6} customCardHeaderClass="justify-content-between" >
                                <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
                                <p className="user-select-auto">This paragraph has default select behavior.</p>
                                <p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="LINK HOVER VARIANT" customCardHeaderClass="justify-content-between" reactCode={link7}>
                                <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline" href="#!" scroll={false}>
                                    Underline opacity 0
                                </Link>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="  LINK OPACITY" reactCode={link8} customCardHeaderClass="justify-content-between">
                                <p><Link className="link-opacity-10" href="#!" scroll={false}>Link opacity 10</Link></p>
                                <p><Link className="link-opacity-25" href="#!" scroll={false}>Link opacity 25</Link></p>
                                <p><Link className="link-opacity-50" href="#!" scroll={false}>Link opacity 50</Link></p>
                                <p><Link className="link-opacity-75" href="#!" scroll={false}>Link opacity 75</Link></p>
                                <p className="mb-0"><Link className="link-opacity-100" href="#!" scroll={false}>Link opacity 100</Link></p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="LINK UNDERLINE COLORS" reactCode={link9} customCardHeaderClass="justify-content-between" >
                                <p><Link href="#!" scroll={false} className="link-underline-primary text-decoration-underline">Primary underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-primary1 text-decoration-underline">Primary1 underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-primary2 text-decoration-underline">Primary2 underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-primary3 text-decoration-underline">Primary3 underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-secondary text-decoration-underline">Secondary underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-success text-decoration-underline">Success underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-danger text-decoration-underline">Danger underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-warning text-decoration-underline">Warning underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-info text-decoration-underline">Info underline</Link></p>
                                <p><Link href="#!" scroll={false} className="link-underline-light text-decoration-underline">Light underline</Link></p>
                                <p className="mb-0"><Link href="#!" scroll={false} className="link-underline-dark text-decoration-underline">Dark underline</Link></p>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default LinksInteractions;