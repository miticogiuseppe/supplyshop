"use client"
const SpkSelect = dynamic(() => import("../../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect"), { ssr: false });
const SpkMultiselect = dynamic(() => import("../../../../../shared/@spk-reusable-components/reusable-plugins/spk-multiselect"), { ssr: false });
import SpkButton from "../../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from "../../../../../shared/data/forms/select2data";
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../../shared/layouts-components/seo/seo";


const Select2 = () => {

    const [valuesA, setValuesA] = useState()
    const [valuesB, setValuesB] = useState()

    const [selectedOptions, setSelectedOptions] = useState(null);

    const handleSelectChange = (selected) => {
        const maxSelections = 3;

        if (selected && selected.length <= maxSelections) {
            setSelectedOptions(selected);
        }
    };

    const [singleSelectValue, setSingleSelectValue] = useState(null);
    const [multiSelectValue, setMultiSelectValue] = useState([]);
    const [isSelectDisabled, setSelectDisabled] = useState(false);

    const options = [
        { value: 's-1', label: 'Selection-1' },
        { value: 's-2', label: 'Selection-2' },
        { value: 's-3', label: 'Selection-3' },
        { value: 's-4', label: 'Selection-4' },
        { value: 's-5', label: 'Selection-5' },
    ];
    const options1 = [
        { value: 's-1', label: 'Selection-1' },
        { value: 's-2', label: 'Selection-2' },
        { value: 's-3', label: 'Selection-3' },
    ];

    const handleSingleSelectChange = (selectedOption) => {
        setSingleSelectValue(selectedOption);
    };

    const handleMultiSelectChange = (selectedOptions) => {
        setMultiSelectValue(selectedOptions);
    };

    const disableSelect = () => {
        setSelectDisabled(true);
    };

    const enableSelect = () => {
        setSelectDisabled(false);
    };

    const [ selectedOptions1, setSelectedOptions1] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const MAX_SELECTIONS = 3;

    const handleSelectChange1 = (selected1) => {
        if (selected1.length > MAX_SELECTIONS) {
            setErrorMessage('You can only select up to 3 items!');
        } else {
            setErrorMessage('');
            setSelectedOptions1(selected1);
        }
    };
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-Select2" />

            <Pageheader title="Forms" currentpage="Select2" activepage="Select2" />

            {/* <!-- Page Header Close --> */}

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Select2
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="state" option={Selectoption1} mainClass="basic-multi-select " searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Selectoption1[0]]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Single Select With Placeholder
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="state" option={Selectoption3} mainClass="js-example-placeholder-single js-states" clearable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Selectoption3[0]]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multiple Select
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkMultiselect multi options={Selectoption2} mainClass="default basic-multi-select custom-multi " values={[Selectoption2[0]]} onChange={(valuesA) => setValuesA(valuesA)} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multiple Select With Placeholder
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkMultiselect multi options={Selectoption4} mainClass="default basic-multi-select custom-multi " onChange={(valuesB) => setValuesB(valuesB)} placeholder="Select a State" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Templating
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="state" option={Selectoption5} mainClass="js-example-templating js-persons basic-custom-select" menuplacement="auto" classNameprefix="Select2" defaultvalue={[Selectoption5[0]]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Templating Selection
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect name="state" option={Selectoption5} mainClass="basic-multi-select" menuplacement="auto" classNameprefix="Select2" defaultvalue={[Selectoption5[0]]} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Disabling a Select2 control
                            </div>
                        </Card.Header>
                        <div className="card-body vstack gap-3">
                            <SpkSelect mainClass="mb-3" option={options} classNameprefix="Select2" defaultvalue={singleSelectValue} onfunchange={handleSingleSelectChange} disabled={isSelectDisabled} />
                            <SpkSelect mainClass="js-example-disabled-multi" option={options1} defaultvalue={multiSelectValue} classNameprefix="Select2" onfunchange={handleMultiSelectChange} multi disabled={isSelectDisabled} clearable={!isSelectDisabled} />
                            <div>
                                <SpkButton Buttonvariant='primary-light' Customclass="me-2" onClickfunc={enableSelect}>
                                    Enable
                                </SpkButton>
                                <SpkButton Buttonvariant='primary' onClickfunc={disableSelect}>
                                    Disable
                                </SpkButton>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Max Selections Limiting
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkSelect multi name="states[]" option={Selectmaxoption} mainClass="basic-multi-select" searchable menuplacement="auto" classNameprefix="Select2" defaultvalue={selectedOptions1} onfunchange={handleSelectChange1} />
                            {errorMessage && (
                                <div className="text-danger mt-2">
                                    {errorMessage}
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    )
};

export default Select2;