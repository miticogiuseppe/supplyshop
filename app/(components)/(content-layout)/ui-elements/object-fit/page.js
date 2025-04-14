"use client"
import { objectfit1, objectfit10, objectfit11, objectfit12, objectfit13, objectfit14, objectfit15, objectfit2, objectfit3, objectfit4, objectfit5, objectfit6, objectfit7, objectfit8, objectfit9 } from "../../../../../shared/data/prism/ui-elements-prism";
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import ShowCode from "../../../../../shared/layouts-components/showcode/showcode";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const ObjectFit = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Uielements-Objectfit" />

            <Pageheader title="Ui Elements" currentpage="Object Fit" activepage="Object Fit" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Fill" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit1}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-fill border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Scale Down" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit2}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-scale border rounded" alt="..." />
                    </ShowCode>

                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Contain" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit3}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Cover" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit4}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-cover border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit None" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit5}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-none border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Contain (SM - responsive)" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit6}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-sm-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Contain (MD - responsive)" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit7}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-md-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Contain (LG - responsive)" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit8}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-lg-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Contain (XL - responsive)" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit9}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-xl-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Contain (XXL - responsive)" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit10}>
                        <img src="../../assets/images/media/media-28.jpg" className="object-fit-xxl-contain border rounded" alt="..." />
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Contain Video" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit11}>
                        <video src="../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Scale Video" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit14}>
                        <video src="../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Fill Video" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit13}>
                        <video src="../../assets/video/1.mp4" className="object-fit-fill rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit None Video" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit15}>
                        <video src="../../assets/video/1.mp4" className="object-fit-fill rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="">
                    <ShowCode title="Object Fit Cover Video" customCardClass="custom-card" customCardBodyClass="object-fit-container" reactCode={objectfit12}>
                        <video src="../../assets/video/1.mp4" className="object-fit-fill rounded border" autoPlay loop muted></video>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    )
};

export default ObjectFit;