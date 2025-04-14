"use client"
import StickyHeadTable, { COLUMNS, CustomizedTables, DATATABLE, Deletetable } from "../../../../../shared/data/tables/datatablesdata";
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Spkdatatable from "../../../../../shared/@spk-reusable-components/reusable-plugins/spk-datatable";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const DataTables = () => {

    const [editableData, setEditableData] = useState(DATATABLE);
    const handleResetEditableData = () => {
        setEditableData([...DATATABLE]); // Reset data to its initial state
    };


    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Data Tables"} />

            <Pageheader title="Tables" currentpage="Data Tables" activepage="Data Tables" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Table
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Spkdatatable COLUMNS={COLUMNS} DATATABLE={DATATABLE} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Editable Table
                            </div>
                        </Card.Header>
                        <Card.Body className="responsive-datatable ">
                            <Spkdatatable
                                COLUMNS={COLUMNS}
                                DATATABLE={DATATABLE}
                                editable={true}         // Enables edit mode
                                resetData={handleResetEditableData} // Passes reset handler
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sticky header Table
                            </div>
                        </Card.Header>
                        <Card.Body className="ti-striped-table ti-custom-table-hover">
                            <StickyHeadTable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Customization Table
                            </div>
                        </Card.Header>
                        <Card.Body className="customization-table">
                            <CustomizedTables />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Edit Row Table
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Deletetable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
};

export default DataTables;