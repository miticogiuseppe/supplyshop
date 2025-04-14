"use client"
import SpkBlogcards from "../../../../../../shared/@spk-reusable-components/reusable-pages/spkblogcards";
import SpkCarouselComponent from "../../../../../../shared/@spk-reusable-components/reusable-advancedui/spk-carousel";
import SpkBadge from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkListgroup from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-listgroup";
import { Categoriesdata, Featuredblogdata, Relatedblogdata } from "../../../../../../shared/data/pages/blog/blogdata";
import Pageheader from "../../../../../../shared/layouts-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const Blog = () => {

    const router = useRouter();

    const Carouseldata = [
        <div className="">
            <img src="../../../assets/images/media/blog/1.jpg" className="d-block w-100" alt="..." />
        </div>,
        <div className="">
            <img src="../../../assets/images/media/blog/3.jpg" className="d-block w-100" alt="..." />
        </div>,
        <div className="">
            <img src="../../../assets/images/media/blog/2.jpg" className="d-block w-100" alt="..." />
        </div>
    ]
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Blog" />

            <Pageheader title="Pages" subtitle="Blog" currentpage="Blog" activepage="Blog" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Body className="p-0" >
                            <div
                                className="stretched-link"
                                role="button"
                                onClick={() => router.push("/pages/blog/blog-details")}
                                style={{ cursor: "pointer" }}
                            >
                                <SpkCarouselComponent items={Carouseldata} mainClass="blog-carousel" />
                            </div>
                            <div className="p-3">
                                <h5 className="fw-semibold"><Link href="/pages/blog/blog-details">Melodic Mastery: A Deep Dive into Music Notes</Link></h5>
                                <p className="mb-3">Exploring the intricate symbols and structures that form the foundation of every melody.</p>
                                <p className="mb-3">As musicologist Charles Seeger notes, “Music is a system of communication involving structured sounds produced by members of a community that communicate with other members”</p>
                                <p className="mb-3">“Music” is one of the most difficult terms to define, partially because beliefs about music have changed dramatically over time just in Western culture alone.<Link scroll={false} href="#!" className="fw-medium text-primary ms-2 align-middle fs-12 text-Augoration-underline d-inline-block">Read More</Link></p>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-md avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/11.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-medium">Justin Roy</p>
                                            <p className="text-muted fs-12 mb-0">26,Mar 2024 - 15:37</p>
                                        </div>
                                    </div>
                                    <div className="avatar avatar-sm bg-danger-transparent avatar-rounded">
                                        <i className="ri-heart-line text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Row>
                        <Col xxl={7}>
                            <Card className=" custom-card">
                                <div className="row g-0">
                                    <Col xxl={8} md={10} sm={10} className="">
                                        <Card.Body className="">
                                            <h5 className="fw-semibold">
                                                <Link scroll={false} href="#!">Listening: Finding Happiness in Music</Link>
                                            </h5>
                                            <span className="d-block mb-3">
                                                Different genres and melodies can evoke joy, reduce stress, and create lasting memories. <Link scroll={false} href="#!" className="fw-medium text-primary ms-2 align-middle fs-12 text-Augoration-underline d-inline-block">
                                                    Read More
                                                </Link>
                                            </span>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-start">
                                                    <div className="avatar avatar-md avatar-rounded me-2">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">Nicolas Noor</p>
                                                        <div className="text-muted fs-12 mb-0">20,Aug 2024 - 16:32</div>
                                                    </div>
                                                </div>
                                                <div className="avatar avatar-sm bg-danger-transparent avatar-rounded">
                                                    <i className="ri-heart-line text-danger"></i>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                    <Col xxl={4} md={2} sm={2} className="">
                                        <img src="../../../assets/images/media/blog/4.jpg" className="img-fluid rounded-end h-100 w-100" alt="..." />
                                    </Col>
                                </div>
                            </Card>
                            <SpkBlogcards Routepath="/pages/blog/blog-details" Anchorroute="#!" Navigate="#!" Customimgclass="img-fluid rounded w-100" Imgsrc2="../../../assets/images/faces/8.jpg" Imgsrc1="../../../assets/images/media/blog/9.jpg" Title="Music for the Soul: Enhancing Your Life Through Sound" Text="Learn how to create sacred spaces for musical reflection, find solace in times of hardship, and cultivate mindfulness through.."
                                Name="Sissera William" Time="25,Aug 2024 - 04:25" Linktag="after" textcolor="primary" Linktagposition="after" Customlinkclass="p-3 pt-0 rounded-5" heartfill={true} />
                        </Col>
                        <Col xxl={5} className="">
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Categories :
                                    </Card.Title>
                                    <Link scroll={false} href="#!" className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <SpkListgroup as="ul" Variant="flush" CustomClass="list-style">
                                        {Categoriesdata.map((idx) => (
                                            <ListGroup.Item as="li" key={Math.random()}>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="fw-medium"><i className={`ri-${idx.icon} fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 bg-${idx.color}-transparent text-${idx.color}`}></i>{idx.title}</span>
                                                    <SpkBadge Customclass="bg-primary-transparent">{idx.text}</SpkBadge>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </SpkListgroup>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="d-flex align-items-center justify-content-between">
                                    <Card.Title>
                                        Related Blogs:
                                    </Card.Title>
                                    <div>
                                        <SpkBadge Pill={true} Customclass="bg-primary-transparent">15</SpkBadge>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <SpkListgroup as="ul" Variant="flush" CustomClass="">
                                        {Relatedblogdata.map((idx) => (
                                            <ListGroup.Item as="li" className="border-bottom-0" key={Math.random()}>
                                                <div className="d-flex flew-wrap text-truncate align-items-center gap-2">
                                                    <span className="avatar avatar-xl flex-shrink-0 me-1">
                                                        <img src={idx.src} className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill text-wrap">
                                                        <Link scroll={false} href="#!" className="fs-14 fw-medium mb-0">Jack Diamond</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate text-muted">
                                                            To generate....
                                                        </p>
                                                        <span className="text-muted fs-10">25,Mar 2024 - 22:30</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </SpkListgroup>
                                    <div className="p-3 pt-2 mt-1">
                                        <SpkButton Buttonvariant="primary" Customclass="mx-auto  btn-loader text-center justify-content-center w-100">
                                            <span className="me-2">Load More</span>
                                            <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                        </SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={4} lg={12} md={12} className="">
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="d-flex align-items-center justify-content-between">
                            <Card.Title className="">
                                Featured Blogs
                            </Card.Title>
                            <div>
                                <SpkBadge Customclass="bg-primary-transparent">23 Blogs</SpkBadge>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <SpkListgroup as="ul" Variant="flush" CustomClass="">
                                {Featuredblogdata.map((idx) => (
                                    <ListGroup.Item as="li" key={Math.random()} className={idx.class}>
                                        <div className="d-flex flex-wrap align-items-center gap-3">
                                            <span className="avatar avatar-lg">
                                                <img src={idx.src} className="img-fluid" alt="..." />
                                            </span>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fs-14 fw-medium mb-1">{idx.title}</Link>
                                                <p className="mb-0 mt-1 popular-blog-content text-truncate">
                                                    {idx.text}
                                                </p>

                                            </div>
                                            <div>
                                                <SpkButton Buttonvariant="light" Size="sm" Customclass="btn-icon rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </SpkListgroup>
                            <div className="p-3 pt-2">
                                <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="btn mx-auto btn-loader text-center justify-content-center w-100 ">
                                    <span className="me-2">Load More</span>
                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                </SpkButton>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={8} lg={12} md={12} className="">
                    <Row>
                        <Col xxl={4} xl={6} lg={6} md={6} className="">
                            <SpkBlogcards Routepath="/pages/blog/blog-details" Anchorroute="#!" Navigate="#!" Imgsrc1="../../../assets/images/media/blog/15.jpg" Imgsrc2="../../../assets/images/faces/11.jpg" Customlinkclass="p-3 pb-0 rounded-5" Name="Tilly" Linktagposition="after"
                                Time="19,Apr 2024 - 15:45" Title="Beats to Bliss" Text="Experiencing the Euphoria of Music" Linktag="before" textcolor="primary" Customimgclass="rounded-3 card-img-top" />
                        </Col>
                        <Col xxl={4} xl={6} lg={6} md={6} className="">
                            <SpkBlogcards Routepath="/pages/blog/blog-details" Anchorroute="#!" Navigate="#!" Imgsrc1="../../../assets/images/media/blog/8.jpg" Imgsrc2="../../../assets/images/faces/6.jpg" Customlinkclass="p-3 pb-0 rounded-5" Name="Tilly" Linktag="before" Linktagposition="after" textcolor="primary"
                                Customimgclass="rounded-3 card-img-top" Time="19,Apr 2024 - 15:45" Title="The Pleasure of Harmony: Unlocking the Joy of Music" Text="Exploring the world of 3D images doesn't have to be limited to consumption – you can also become a creator! With accessible." />
                        </Col>
                        <Col xxl={4} xl={12}>
                            <SpkBlogcards Routepath="/pages/blog/blog-details" Anchorroute="#!" Navigate="#!" Imgsrc2="../../../assets/images/faces/16.jpg" Imgsrc1="../../../assets/images/media/blog/9.jpg" Title="Tuning into Happiness: How Music Lifts Our Spirits" Text="Explore the remarkable ability of music to evoke joy, uplift our moods, and nourish our souls. This blog delves into the science behind."
                                Name="Henry Milo" Time="31,Mar 2024 - 20:13" Linktag="after" textcolor="primary1" Linktagposition="after" Customlinkclass="p-3 pt-0 rounded-5" Customimgclass="rounded-3 card-img-bottom" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}

            {/* <!--Start::row-3 --> */}
            <Row>
                <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                    <SpkBlogcards Routepath="/pages/blog/blog-details" Anchorroute="#!" Navigate="#!" Customclass="overflow-hidden" Imgsrc2="../../../assets/images/faces/4.jpg" Imgsrc1="../../../assets/images/media/blog/12.jpg" Title="Understanding Music Notes" Text="Through detailed explanations, visual aids, and practical examples reduce stress, and create lasting memories..."
                        Name="Rosalie" Time="26,Mar 2024 - 15:37" Linktag="before" textcolor="primary" Linktagposition="after" Customimgclass="card-img-top" />
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                    <SpkBlogcards Routepath="/pages/blog/blog-details" Anchorroute="#!" Navigate="#!" Imgsrc2="../../../assets/images/faces/12.jpg" Imgsrc1="../../../assets/images/media/blog/10.jpg" Title="Enhancing Your Life Through Sound" Text="Join us on a journey of discovery as we unravel the mysteries of music note.."
                        Customclass="overflow-hidden" Name="Emanuel" Time="26,Mar 2024 - 15:37" Linktag="before" textcolor="primary2" Linktagposition="after" Customimgclass="card-img-top" />
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                    <SpkBlogcards Routepath="/pages/blog/blog-details" Anchorroute="#!" Navigate="#!" Customclass="overflow-hidden" Title="Mastering the Art of Music Notation" Linktag="after" Text="Discover how these seemingly simple marks on a page translate into the beautiful sounds." Name="Jacob" Customimgclass="card-img-bottom"
                        Imgsrc1="../../../assets/images/media/blog/13.jpg" Imgsrc2="../../../assets/images/faces/2.jpg" Customlinkclass="" Time="- 06,Mar 2024 - 15:37" textcolor="primary3" Linktagposition="before" />
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                    <SpkBlogcards Routepath="/pages/blog/blog-details" Anchorroute="#!" Navigate="#!" Customclass="overflow-hidden" Title="How to Truly Enjoy Your Favorite Tunes?" Linktag="after" Text='Through insightful articles, personal anecdotes, and expert advice, "Music for the Soul"..' Name="Flora" Customimgclass="card-img-bottom"
                        Imgsrc1="../../../assets/images/media/blog/11.jpg" Imgsrc2="../../../assets/images/faces/14.jpg" Customlinkclass="" Time="- 26,Mar 2024 - 15:37" textcolor="primary2" Linktagposition="before" />
                </Col>
            </Row>
            {/* <!--End::row-3 --> */}
        </Fragment>
    )
};

export default Blog;