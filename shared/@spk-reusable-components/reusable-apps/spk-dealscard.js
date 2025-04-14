import Link from 'next/link';
import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import SpkDropdown from '../reusable-uielements/spk-dropdown';

const SpkDealsCard = ({ img, title, date, subtitle, amount, company, cardClass, bodyClass, Amounttext }) => {
    return (
        <Card className={cardClass}>
            <Card.Body className={bodyClass}>
                <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="d-flex align-items-center gap-1 flex-wrap">
                        <div className="lh-1">
                            <span className="avatar avatar-sm avatar-rounded">
                                <img src={img} alt="" />
                            </span>
                        </div>
                        <div>
                            <div>{title}</div>
                            <div className="text-muted fs-10">{date}</div>
                        </div>
                    </div>
                    <SpkDropdown Customclass="ms-auto" toggleas="a" Customtoggleclass='btn btn-light btn-icons btn-sm text-muted no-caret' Icon={true}
                        IconClass='fe fe-more-vertical' Align="end" Menuclass='dropdown-menu-end'>
                        <Dropdown.Item as="li" href="#!">Edit</Dropdown.Item>
                        <Dropdown.Item as="li" href="#!">Delete</Dropdown.Item>
                        <Dropdown.Item as="li" href="#!">View Details</Dropdown.Item>
                    </SpkDropdown>
                </div>
                <p className="fw-medium mb-1 fs-14">{subtitle}</p>
                <p className="fw-medium"><span className="text-muted fw-normal">{Amounttext}:</span> {amount}</p>
                <div className="deal-description">
                    <div>
                        <Link scroll={false} href="#!" className="company-name">{company}</Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default SpkDealsCard;
