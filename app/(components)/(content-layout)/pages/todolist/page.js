"use client"
import SpkProgress from "../../../../../shared/@spk-reusable-components/reusable-uielements/spk-progress";
import SpkTablescomponent from "../../../../../shared/@spk-reusable-components/reusable-tables/tables-component";
import SpkBadge from "../../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Task } from "../../../../../shared/data/pages/todolistdata";
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Pagination, ProgressBar, Row } from "react-bootstrap";
import SpkSelect from "../../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkFlatpickr from "../../../../../shared/@spk-reusable-components/reusable-plugins/spk-flatpicker";
import { Listviewassigneddata, Prioritydata, Statusdata } from "../../../../../shared/data/apps/task/listviewdata";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const Todolist = () => {

    const tableRef = useRef(null);

    useEffect(() => {
        if (tableRef.current && window.dragula) {
            const drake = window.dragula([tableRef.current], {
                moves: ({ el, container, handle }) => {
                    return handle && handle.classList.contains('todo-handle');
                },
            });

            return () => drake.destroy(); // Clean up on unmount
        }
    }, [tableRef]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //datepicker

    const [_startDate, setStartDate] = useState();
    const [_startDate1, setStartDate1] = useState(new Date());

    const [allData, setallData] = useState(Task)
    const [data, setData] = useState(allData);
    const [selectAll, setSelectAll] = useState(false);
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setData((prevData) =>
            prevData.map((item) => ({
                ...item,
                check: !selectAll,
            }))
        );
    };

    const handleRemove = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    const handleCheckboxToggle = (id) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, check: !item.check } : item
            )
        );
    };


    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Pages-Todolist" />

            <Pageheader title="Pages" currentpage="To Do List" activepage="To Do List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={3}>
                    <Card className=" custom-card">
                        <Card.Header className=" gap-3 align-items-center pb-3 border-bottom border-block-end-dashed">
                            <span className="avatar avatar-md bg-primary avatar-rounded"><i className="ri-file-list-3-line fs-16"></i></span>
                            <div className="card-title">
                                To Do List
                                <span className="text-muted d-block fs-12"> Create new list</span>
                            </div>
                            <SpkButton Buttonvariant="primary1-light" Size="sm" Customclass="ms-auto rounded-pill">
                                <i className="ri-add-line me-1"></i>Add New List
                            </SpkButton>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 task-navigation border-bottom border-block-end-dashed">
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-0">
                                        <span className="fs-11 text-muted op-7 fw-medium">General</span>
                                    </li>
                                    <li className="active">
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-checkbox-multiple-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    All Tasks
                                                </span>
                                                <SpkBadge variant="info-transparent" Customclass="rounded-pill">167</SpkBadge>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-checkbox-circle-line align-middle fs-14 text-primary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Completed
                                                </span>
                                                <SpkBadge variant="primary1-transparent" Customclass="rounded-pill">12</SpkBadge>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-calendar-line align-middle fs-14 text-primary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Today
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-star-line text-primary align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Starred
                                                </span>
                                                <SpkBadge variant="primary3-transparent" Customclass="rounded-pill">04</SpkBadge>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-user-line text-primary align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Personal
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-briefcase-line text-primary align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Work
                                                </span>
                                                <SpkBadge variant="primary1-transparent" Customclass="rounded-pill">03</SpkBadge>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-delete-bin-5-line text-primary align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Trash
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-2 d-flex justify-content-between gap-2 align-items-center">
                                        <span className="fs-11 text-muted op-7 fw-medium">Work Space</span>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div><input className="form-check-input" type="checkbox" value="" aria-label="..." /></div>
                                            <div>
                                                <Link scroll={false} href="#!">
                                                    <span className="fw-medium"> Project testing ...</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div><input className="form-check-input" type="checkbox" value="" aria-label="..." /></div>
                                            <div>
                                                <Link scroll={false} href="#!">
                                                    <span className="fw-medium">Bug Fixes and Issue Tracking..</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div><input className="form-check-input" type="checkbox" value="" aria-label="..." /></div>
                                            <div>
                                                <Link scroll={false} href="#!">
                                                    <span className="fw-medium">New Feature Development...</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div><input className="form-check-input" type="checkbox" value="" aria-label="..." /></div>
                                            <div>
                                                <Link scroll={false} href="#!">
                                                    <span className="fw-medium">Admin Template review...</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center justify-content-between m-3 p-3 bg-primary-transparent rounded border overflow-hidden todo-list-card">
                                <div>
                                    <div className="fs-15 fw-medium">Today Completed</div>
                                    <div className="mb-4 fs-15 fw-medium">Tasks</div>
                                    <h4 className="mb-0">3/28 Tasks</h4>
                                </div>
                                <div className="">
                                    <img src="../../assets/images/media/media-66.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between pb-3 border-bottom border-block-end-dashed">
                            <div className="flex-grow-1">
                                <input className="form-control w-100" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-light btn-wave no-caret" Icon={true} Arrowicon={true} Toggletext="Sort By">
                                    <Dropdown.Item href="#!">New</Dropdown.Item>
                                    <Dropdown.Item href="#!">Popular</Dropdown.Item>
                                    <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                            <SpkButton Buttonvariant="primary" onClickfunc={handleShow} Size="sm" Customclass="ms-auto" Buttontoggle="modal" Buttontarget="#addtask">
                                <i className="ri-add-circle-line"></i> Add New Task
                            </SpkButton>
                        </Card.Header>
                        <Card.Body className=" p-0 position-relative" id="todo-content">
                            <div>
                                <div className="table-responsive">
  
                                    <SpkTablescomponent tableClass="text-nowrap" checked={selectAll}
                                        onChange={handleSelectAll}
                                        showCheckbox={true}
                                        header={[
                                            { title: '', headerClassname: 'todolist-handle-drag' },
                                            { title: 'Task Title' },
                                            { title: 'Status' },
                                            { title: 'Dead Line' },
                                            { title: 'Priority' },
                                            { title: 'Assigner' },
                                            { title: 'Progress', headerClassname: 'todolist-progress' },
                                            { title: 'Action', headerClassname: 'text-end' }
                                        ]}
                                    >
                                        {data.map((idx) => (
                                            <tr ref={tableRef} className="todo-box" key={Math.random()}>
                                                <td className="task-checkbox">
                                                    <input type="checkbox" checked={idx.check} onChange={() => handleCheckboxToggle(idx.id)} className="form-check-input"/>
                                                </td>
                                                <td>
                                                    <SpkButton Buttonvariant="light" Size="sm" Customclass="btn btn-icon todo-handle">: :</SpkButton>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">{idx.title}</span>
                                                </td>
                                                <td>
                                                    <span className={`fw-medium text-${idx.color}`}><i className="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>{idx.status}</span>
                                                </td>
                                                <td>
                                                    {idx.dueDate}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color1}-transparent`}>{idx.priority}</span>
                                                </td>
                                                <td className="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={idx.assignee} alt="" />
                                                    </span>
                                                    {idx.name}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <SpkProgress variant={idx.color2} mainClass="progress-animate progress-xs w-100" striped={true} animated={true} now={idx.data} />
                                                        <div className="ms-2">{`${idx.data}%`}</div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="d-flex gap-2">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" onClick={() => handleRemove(idx.id)} className="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </SpkTablescomponent>
                                </div>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div> Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div>
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Modal show={show} onHide={handleClose} centered className="fade" id="create-task" tabIndex={-1}>
                    <div className="modal-content">
                        <Modal.Header>
                            <h6 className="modal-title">Create Task</h6>
                            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" onClickfunc={handleClose}
                                Buttonlabel="Close"></SpkButton>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row gy-2">
                                <Col xl={12}>
                                    <Form.Label htmlFor="task-name" className="">Task Name</Form.Label>
                                    <Form.Control type="text" className="" id="task-name" placeholder="Task Name" />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Assigned To</label>
                                    <SpkSelect multi name="state" option={Listviewassigneddata} mainClass="js-example-placeholder-multiple w-full js-states"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Listviewassigneddata[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Assigned Date</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group custom-input-group flex-nowrap">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr inputClass="form-control" options={{ enableTime: 'true', dateFormat: "Y-m-d:H:i" }} placeholder="Choose Date and Time" onfunChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="">Target Date</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group custom-input-group flex-nowrap">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr inputClass="form-control" options={{ enableTime: 'true', dateFormat: "Y-m-d:H:i" }} placeholder="Choose Date and Time" onfunChange={(date) => setStartDate1(date)} />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Status</label>
                                    <SpkSelect name="state" option={Statusdata} mainClass="js-example-placeholder-multiple w-full js-states"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label className="form-label">Priority</label>
                                    <SpkSelect name="state" option={Prioritydata} mainClass="js-example-placeholder-multiple w-full js-states"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
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
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default Todolist;