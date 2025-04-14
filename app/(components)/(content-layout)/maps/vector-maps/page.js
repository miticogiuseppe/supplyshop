"use client";
import { MapAnnotation, Shapeworldmap, USState, WorldMap } from "../../../../../shared/data/maps/vectormapdata";
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../../shared/layouts-components/seo/seo";

const VectorMap = () => {
	const [content, setContent] = useState("");
	return (
		<Fragment>
			<Seo title={"Vector Maps"} />

			<Pageheader title="Maps" currentpage="Vector Maps" activepage="Vector Maps" />

			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Basic Vector Map</div>
						</Card.Header>
						<Card.Body  >
							<div id="vector-map">
								<WorldMap setTooltipContent={setContent} />
								{content}
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Map With Markers</div>
						</Card.Header>
						<Card.Body  >
							<div id="marker-map">
								<Shapeworldmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Map With Image Markers</div>
						</Card.Header>
						<Card.Body  >
							<div id="marker-image-map">
								<MapAnnotation />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">Map With Lines</div>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<USState />
							</div>
						</Card.Body>
					</Card>
				</Col>

			</Row>
		</Fragment>
	);
};

export default VectorMap;
