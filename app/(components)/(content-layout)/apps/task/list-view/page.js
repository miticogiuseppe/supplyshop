"use client"
import Spkcardscomponent from "../../../../../../shared/@spk-reusable-components/reusable-dashboards/spk-cards";
import SpkFlatpickr from "../../../../../../shared/@spk-reusable-components/reusable-plugins/spk-flatpicker";
const SpkSelect = dynamic(() => import("../../../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect"), { ssr: false });
import SpkTablescomponent from "../../../../../../shared/@spk-reusable-components/reusable-tables/tables-component";
import SpkButton from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Listviewassigneddata, Listviewdata, Prioritydata, Statusdata, taskData } from "../../../../../../shared/data/apps/task/listviewdata";
import Pageheader from "../../../../../../shared/layouts-components/page-header/pageheader";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Pagination, Row, Table } from "react-bootstrap";
import Seo from "../../../../../../shared/layouts-components/seo/seo";

const ListView = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //datepicker

    const [_startDate, setStartDate] = useState();
    const [_startDate1, setStartDate1] = useState(new Date());

    
    const [allData, setallData] = useState(Listviewdata)
    const [data, setData] = useState(allData);
    const [selectAll, setSelectAll] = useState(false);
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setData((prevData) =>
            prevData.map((item) => ({
                ...item,
                isChecked: !selectAll,
            }))
        );
    };

    const handleRemove = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    const handleCheckboxToggle = (id) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Tasks-listview" />

            <Pageheader title="Apps" subtitle="Task" currentpage="Task List View" activepage="Task List View" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                {taskData.map((task) => (
                    <Col key={Math.random()} xxl={3}>
                        <Spkcardscomponent cardClass="overflow-hidden main-content-card" dataClass="mb-0" mainClass="d-flex align-items-start justify-content-between mb-2" badgeClass="rounded" card={task} Icon={true} iconClass={task.Icon} />
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={12} xl={12} className="">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Total Tasks
                            </div>
                            <div className="d-flex">
                                <SpkButton Buttonvariant="primary" onClickfunc={handleShow} Size="sm" Customclass="waves-light" data-bs-toggle="modal" data-bs-target="#create-task"><i className="ri-add-line fw-medium align-middle me-1"></i> Create Task</SpkButton>
                                {/* <!-- Start::add task modal --> */}
                                <Modal show={show} onHide={handleClose} centered className="fade" id="create-task" tabIndex={-1}>
                                    <div className="modal-content">
                                        <Modal.Header>
                                            <h6 className="modal-title">Add Task</h6>
                                            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" onClickfunc={handleClose}
                                                Buttonlabel="Close"></SpkButton>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row gy-2">
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="task-name" className="">Task Name</Form.Label>
                                                    <Form.Control type="text" className="" id="task-name" placeholder="Task Name" />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="task-id" className="">Task ID</Form.Label>
                                                    <Form.Control type="text" className="" id="task-id" placeholder="Task ID" />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label className="">Assigned Date</Form.Label>
                                                    <div className="form-group">
                                                        <div className="input-group custom-input-group flex-nowrap">
                                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                            <SpkFlatpickr inputClass="form-control" options={{ dateFormat: "Y-m-d" }} placeholder="Choose Date" onfunChange={(date) => setStartDate(date)} />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label className="">Due Date</Form.Label>
                                                    <div className="form-group">
                                                        <div className="input-group custom-input-group flex-nowrap">
                                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                            <SpkFlatpickr inputClass="form-control" options={{ dateFormat: "Y-m-d" }} placeholder="Choose date" onfunChange={(date) => setStartDate1(date)} />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <label className="form-label">Status</label>
                                                    <SpkSelect name="state" option={Statusdata} mainClass="js-example-placeholder-multiple w-full js-states"
                                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Statusdata[0]]}
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <label className="form-label">Priority</label>
                                                    <SpkSelect name="state" option={Prioritydata} mainClass="js-example-placeholder-multiple w-full js-states"
                                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Prioritydata[0]]}
                                                    />
                                                </Col>
                                                <Col xl={12}>
                                                    <label className="form-label">Assigned To</label>
                                                    <SpkSelect multi name="state" option={Listviewassigneddata} mainClass="js-example-placeholder-multiple w-full js-states"
                                                        menuplacement='auto' classNameprefix="Select2"
                                                    />
                                                </Col>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}
                                                Buttondismiss="modal">Cancel</SpkButton>
                                            <SpkButton Buttonvariant="primary" Buttontype="button">Add Task</SpkButton>
                                        </Modal.Footer>
                                    </div>
                                </Modal>
                                {/* <!-- End::add task modal --> */}
                                <SpkDropdown Customclass="ms-2" Icon={true} IconClass="ti ti-dots-vertical" Togglevariant="" Customtoggleclass="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light no-caret">
                                    <li><Dropdown.Item>New Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item>Pending Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item>Completed Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item>Inprogress Tasks</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTablescomponent tableClass="text-nowrap" showCheckbox={true} checked={selectAll} onChange={handleSelectAll} header={[{ title: 'Task' }, { title: 'Task ID' }, { title: 'Assigned Date' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Priority' }, { title: 'Assigned To' }, { title: 'Action' }, { title: 'Status Update' }]}>
                                    {data.map((task, index) => (
                                        <tr className="task-list" key={index}>
                                            <td className="task-checkbox">
                                            <input type="checkbox" checked={task.isChecked} onChange={() => handleCheckboxToggle(task.id)} className="form-check-input"/>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{task.title}</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{task.code}</span>
                                            </td>
                                            <td>{task.startDate}</td>
                                            <td>
                                                <span className={`fw-medium text-${task.color}`}>
                                                    {task.status}
                                                </span>
                                            </td>
                                            <td>{task.dueDate}</td>
                                            <td>
                                                <span className={`badge bg-${task.color1}-transparent`}>
                                                    {task.priority}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {task.avatars.map((avatar, idx) => (
                                                        <span key={idx} className="avatar avatar-sm avatar-rounded">
                                                            <img src={`../../../assets/images/faces/${avatar}`} alt="img" />
                                                        </span>
                                                    ))}
                                                    <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                        +{task.count}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <SpkButton Buttonvariant="primary-light" Size="sm" Buttontoggle="tooltip" data-bs-placement="top">
                                                        <i className="ri-edit-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="danger-light" onClickfunc={() => handleRemove(task.id)} Size="sm" Customclass="btn-icon ms-1 task-delete-btn" Buttontoggle="tooltip" data-bs-placement="top">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${task.color2}-transparent`}>
                                                    {task.reviewStatus}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTablescomponent>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0 overflow-auto float-end">
                                    <Pagination.Item disabled>Previous</Pagination.Item>
                                    <Pagination.Item >1</Pagination.Item>
                                    <Pagination.Item active>2</Pagination.Item>
                                    <Pagination.Item>3</Pagination.Item>
                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    )
};

export default ListView;