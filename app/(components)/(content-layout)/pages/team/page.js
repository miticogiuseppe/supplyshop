"use client"
import SpkTeamcards from "../../../../../shared/@spk-reusable-components/reusable-pages/spk-teamcards";
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const Team = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Pages-Team" />

            <Pageheader title="Pages" currentpage="Team" activepage="Team" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Director" Title="Hadley Kylin" Imgsrc="../../assets/images/faces/1.jpg" Color="primary" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Manager" Title="Ethan Mitchell" Imgsrc="../../assets/images/faces/2.jpg" Color="primary1" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Creative Director" Title="Iliana Lilly" Imgsrc="../../assets/images/faces/3.jpg" Color="primary2" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Jasmine Della" Imgsrc="../../assets/images/faces/4.jpg" Color="primary3" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Aurora Reed" Imgsrc="../../assets/images/faces/5.jpg" Color="secondary" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Ava Taylor" Imgsrc="../../assets/images/faces/6.jpg" Color="success" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Spencer Robin" Imgsrc="../../assets/images/faces/7.jpg" Color="primary" Imageclass="mb-3" />
                </Col>
                <Col xl={3} lg={3} md={6} sm={6} className="col-12">
                    <SpkTeamcards Navigate="#!" Role="Board Director" Title="Owen Foster" Imgsrc="../../assets/images/faces/8.jpg" Color="primary1" Imageclass="mb-3" />
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    )
};

export default Team;