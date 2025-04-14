import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const SpkSchoolcard = ({ item, price, color, svgIcon, cardClass, bodyClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className={bodyClass}>
                    <div>
                        <span className="d-block mb-1">{item}</span>
                        <h5 className="mb-0 fw-semibold">{price}</h5>
                    </div>
                    <div>
                        <span className={`text-${color}`}>
                            {svgIcon}
                        </span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default SpkSchoolcard;
