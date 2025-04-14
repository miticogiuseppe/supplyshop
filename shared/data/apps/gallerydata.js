
"use client";
import { useState } from 'react';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Lightboxcomponent } from '../../@spk-reusable-components/reusable-plugins/spk-lightbox';

export const Gallerylist = () => {

    const [open, setOpen] = useState(false);

    const Slides = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" }
    ]

    return (
        <>
            <Row>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <img src="../../assets/images/media/media-40.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <img src="../../assets/images/media/media-41.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <img src="../../assets/images/media/media-42.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <img src="../../assets/images/media/media-43.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <img src="../../assets/images/media/media-44.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <img src="../../assets/images/media/media-45.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <img src="../../assets/images/media/media-46.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={3} md={3} sm={6} className="col-12">
                    <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
                        <img src="../../assets/images/media/media-60.jpg" alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>
            <Lightboxcomponent
                close={() => setOpen(false)} // Close function
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={Slides} index={0} />
        </>
    );
};
