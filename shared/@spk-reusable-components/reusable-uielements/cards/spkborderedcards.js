import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkBadge from '../spk-badge';

const Spkborderedcards = ({ badges = [], images = [], Title, Color, Class, Navigate }) => {
  return (
    <Fragment>
      <Card className={`border border-${Color} custom-card`}>
        <Card.Body>
          <p className="fs-14 fw-medium mb-2 lh-1">{Title}
            <Link scroll={false} href={Navigate}><i className={`bi bi-plus-square float-end text-${Class} fs-18`}></i></Link>
          </p>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {badges.map((badge, index) => (
              <SpkBadge key={index} Customclass={badge.className}>
                {badge.text}
              </SpkBadge>
            ))}
          </div>
          <div className="avatar-list-stacked">
            {images.map((src, index) => (
              <span className="avatar avatar-sm avatar-rounded" key={index}>
                <img src={src} alt={`img-${index}`} />
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default Spkborderedcards