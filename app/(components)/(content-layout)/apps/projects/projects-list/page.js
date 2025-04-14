"use client"
const SpkSelect = dynamic(() => import("../../../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect"), { ssr: false });
import SpkProgress from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-progress";
import SpkTablescomponent from "../../../../../../shared/@spk-reusable-components/reusable-tables/tables-component";
import SpkButton from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Avatars, projects } from "../../../../../../shared/data/apps/projects/Projectlistdata";
import Pageheader from "../../../../../../shared/layouts-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const ProjectsList = () => {

    const Projectselectdata = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Type', label: 'Type' },
        { value: 'A - Z', label: 'A - Z' },
    ]

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Projects-Projectlist" />

            <Pageheader title="Apps" subtitle="Projects" currentpage="Projects List" activepage="Projects List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className=" p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex flex-wrap gap-1 project-list-main">
                                    <Link href="/apps/projects/create-project" className="btn btn-primary me-2"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Project</Link>
                                    <SpkSelect name="colors" option={Projectselectdata} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Projectselectdata[0]]}
                                    />
                                </div>
                                <div className="avatar-list-stacked">
                                    {Avatars.map((idx) => (
                                        <span key={Math.random()} className="avatar avatar-sm avatar-rounded">
                                            <img src={idx.src} alt="" />
                                        </span>
                                    ))}
                                    <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                        +8
                                    </Link>
                                </div>
                                <div className="d-flex" role="search">
                                    <Form.Control className="me-2" type="search" placeholder="Search Project" aria-label="Search" />
                                    <SpkButton Buttonvariant="light" Buttontype="submit">Search</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}

            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Project Name' }, { title: 'Description' }, { title: 'Team' }, { title: 'Assigned Date' }, { title: 'Due Date' }, { title: 'Status' }, { title: 'Priority' }, { title: 'Actions' }]}>
                                    {projects.map((project, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className={`avatar avatar-rounded p-1 bg-${project.imgbg.toLowerCase()}-transparent`}>
                                                            <img src={`../../../assets/images/company-logos/${project.logo}`} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">
                                                            {project.title}
                                                        </Link>
                                                        <span className="text-muted d-block fs-12">
                                                            Total <span className="fw-medium text-default">{project.tasksCompleted}</span> tasks completed
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-muted mb-0 project-list-description">{project.description}</p>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {project.avatars.map((avatar, idx) => (
                                                        <span key={idx} className="avatar avatar-sm avatar-rounded">
                                                            <img src={`../../../assets/images/faces/${avatar}`} alt="" />
                                                        </span>
                                                    ))}
                                                    <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                        +{project.count}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>{project.startDate}</td>
                                            <td>{project.endDate}</td>
                                            <td>
                                                <SpkProgress variant="primary" mainClass="progress progress-xs progress-animate" now={project.progress} />
                                                <div className="mt-1">
                                                    <span className="text-primary fw-medium">{project.progress}%</span> Completed
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${project.color}-transparent`}>{project.priority}</span>
                                            </td>
                                            <td>
                                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" IconClass="fe fe-more-vertical" Icon={true}>
                                                    <Dropdown.Item as="li" href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item as="li" href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                                    <Dropdown.Item as="li" href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                </SpkDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}
            <Pagination className="pagination justify-content-end">
                <Pagination.Item disabled>Previous</Pagination.Item>
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item className="pagination-next">next</Pagination.Item>
            </Pagination>
        </Fragment>
    )
};

export default ProjectsList;