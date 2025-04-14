import Link from "next/link";
import { Key } from "react";
import { Row } from "react-bootstrap";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";

export const Swiperdata = [
    <div className="image-container">
        <img className="img-fluid" src="../../../assets/images/nft-images/2.jpg" alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src="../../../assets/images/nft-images/3.jpg" alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src="../../../assets/images/nft-images/4.jpg" alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src="../../../assets/images/nft-images/5.jpg" alt="img" />
    </div>
];

const nftReviews = [
    {
        name: "Christopher",
        date: "24 Nov, 2024 - 10:54PM",
        rating: 4.1,
        title: "Vibrant Symphony 😊",
        description: "Vibrant Symphony is an extraordinary NFT that immerses you in a world of vivid colors and imaginative landscapes.",
        avatar: "../../../assets/images/faces/15.jpg",
        images: [
            "../../../assets/images/nft-images/13.jpg",
            "../../../assets/images/nft-images/15.jpg"
        ]
    },
    {
        name: "Sarah Johnson",
        date: "30 Apr, 2024 - 03:22PM",
        rating: 3.7,
        title: "Enchanting Dreamscape",
        description: "Enchanting Dreamscape offers a surreal journey through dream-like imagery and subtle symbolism.",
        avatar: "../../../assets/images/faces/10.jpg",
        images: [
            "../../../assets/images/nft-images/6.jpg",
            "../../../assets/images/nft-images/7.jpg"
        ]
    },
    {
        name: "Emily Brown",
        date: "15 May, 2024 - 09:15AM",
        rating: 3.8,
        title: "Oceanic Serenity 🌊",
        description: "Oceanic Serenity captivates with its tranquil underwater scenes and ethereal marine life.",
        avatar: "../../../assets/images/faces/12.jpg",
        images: [
            "../../../assets/images/nft-images/6.jpg",
            "../../../assets/images/nft-images/3.jpg"
        ]
    },
];

export const NftSwiper = nftReviews.map((review, index) => (
    <div key={index}>
        <div className="border rounded p-3">
            <div className="d-sm-flex d-block align-items-top mb-3">
                <div className="d-flex flex-fill">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded">
                            <img src={review.avatar} alt={review.name} />
                        </span>
                    </div>
                    <div className="lh-1 me-2">
                        <p className="mb-1 fw-medium fs-14">{review.name}</p>
                        <div className="mb-1">
                            <span className="fs-11 text-muted">{review.date}</span>
                        </div>
                    </div>
                </div>
                <div className="mb-1 ms-auto text-end">
                    {[...Array(5)].map((_, i) => (
                        <i
                            key={i}
                            className={`ri-star-${i < Math.floor(review.rating) ? 'fill' : (i < review.rating ? 'half-fill' : 'line')} align-middle text-warning align-middle me-1`}
                        ></i>
                    ))}
                    <span className="align-middle">{review.rating}</span>
                </div>
            </div>
            <div className="ps-sm-4 ps-0 mb-3">
                <p className="fw-medium mb-1 ps-2">{review.title}</p>
                <p className="mb-0 fs-12 text-muted ps-2">{review.description}</p>
            </div>
            <div className="product-images ps-sm-4 ps-0">
                <Row>
                    <div className="col-xl-6">
                        <div className="">
                            {review.images.map((img, imgIndex) => (
                                <Link key={imgIndex} scroll={false} href="#!" className="avatar avatar-sm me-1">
                                    <img src={img} alt="" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                        <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="me-2">Report abuse</SpkButton>
                        <SpkButton Buttonvariant="primary2-light" Size="sm" Customclass="btn-icon me-2">
                            <i className="ri-thumb-up-line"></i>
                        </SpkButton>
                        <SpkButton Buttonvariant="primary3-light" Size="sm" Customclass="btn-icon">
                            <i className="ri-thumb-down-line"></i>
                        </SpkButton>
                    </div>
                </Row>
            </div>
        </div>
    </div>
))


export const Productsdata = [
    { label: 'Artist Name', value: 'Henry Milo' },
    { label: 'Royalty', value: '10% royalty paid to the artist on secondary sales' },
    { label: 'Total Bids', value: '32' },
    { label: 'Current Owner', value: 'Nikki Jones' },
    { label: 'NFT Type', value: 'Digital art work' },
];

export const NftItems = [
    {
        imageSrc: "../../../assets/images/nft-images/16.jpg",
        name: "Digital Dreamscapes",
        badgeCount: "18.5k",
        followers: 18512,
        price: "2.299 ETH",
        originalPrice: "3.299 ETH",
    },
    {
        imageSrc: "../../../assets/images/nft-images/18.jpg",
        name: "Galactic Gardens",
        badgeCount: "4.2k",
        followers: 4356,
        price: "1.899 ETH",
        originalPrice: "2.799 ETH",
    },
    {
        imageSrc: "../../../assets/images/nft-images/10.jpg",
        name: "Pixelated Paradise",
        badgeCount: "9.1k",
        followers: 9153,
        price: "3.599 ETH",
        originalPrice: "5.499 ETH",
    },
    {
        imageSrc: "../../../assets/images/nft-images/11.jpg",
        name: "Vibrant Voyages",
        badgeCount: "15.7k",
        followers: 15789,
        price: "6.499 ETH",
        originalPrice: "9.999 ETH",
    }
];
