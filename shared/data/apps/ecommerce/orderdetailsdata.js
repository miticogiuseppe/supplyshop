import Link from "next/link";

export const Accordion1 = [
    {
        id: '0', 
        title: (
            <Link scroll={false} className="px-0 pt-0 flex-fill" href="#!" role="button" data-bs-toggle="collapse" data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
                <div className="d-flex mb-0 lh-1">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-primary border-opacity-10 bg-primary-transparent">
                            <img src="../../../assets/images/ecommerce/png/18.png" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill d-flex align-items-center justify-content-between">
                        <p className="fw-medium mb-0 fs-14">Order Placed  </p>
                        <span className=" text-secondary">May 15</span>
                    </div>
                </div>
            </Link>
        ),
        content: (
            <div className="">
                <p className="mb-0">Order successfully placed by <Link scroll={false} href="#!" className="font-weight-semibold text-primary">Austin Ninus</Link></p>
            </div>
        ),
        itemClass: "accordion-item-class-0 border-0 mb-3",
        bodyClass: "pt-0 ps-5 mb-0 pb-0"
    },
    // You can add more items here if needed
]

export const Accordion2 = [
    {
        id: '0',
        title: (
            <Link className="px-0 pt-0 flex-fill" href="#!" scroll={false} role="button" data-bs-toggle="collapse" data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
                <div className="d-flex mb-0 lh-1">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-primary1 border-opacity-10 bg-primary1-transparent">
                            <img src="../../../assets/images/ecommerce/png/8.png" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill d-flex align-items-center justify-content-between">
                        <p className="fw-medium mb-0 fs-14">Picked</p>
                        <span className="fs-12">  May 15, 21:08</span>
                    </div>
                </div>
            </Link>
        ),
        content: (
            <div className="">
                <p className="mb-0">Your order has been collected by <span className="font-weight-semibold">Suguna Enterprises.</span></p>
            </div>
        ),
        itemClass: "accordion-item-class-0 border-0 mb-3",
        bodyClass: "pt-0 ps-5 mb-0 pb-0"
    },

]

export const Accordion3 = [
    {
        id: '0',
        title: (
            <Link scroll={false} className="px-0 pt-0 flex-fill" href="#!" role="button" data-bs-toggle="collapse" data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree">
                <div className="d-flex mb-0 lh-1">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-info border-opacity-10 bg-info-transparent">
                            <img src="../../../assets/images/ecommerce/png/19.png" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill d-flex align-items-center justify-content-between">
                        <p className="fw-medium mb-0 fs-14">Shipping</p>
                        <span className="fs-12">  May 15, 21:08</span>
                    </div>
                </div>
            </Link>
        ),
        content: (
            <div className="">
                <p className="mb-0">Order<span className="font-weight-semibold"> picked </span> and en route to location.</p>
            </div>
        ),
        itemClass: "accordion-item-class-0 border-0 mb-3",
        bodyClass: "pt-0 ps-5 mb-0 pb-0"
    },

]

export const Accordion4 = [
    {
        title: (
            <Link scroll={false} className="px-0 pt-0 flex-fill" href="#!" role="button" data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="false" aria-controls="basicFour">
                <div className="d-flex mb-0 lh-1">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-secondary border-opacity-10 bg-secondary-transparent">
                            <img src="../../../assets/images/ecommerce/png/25.png" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <p className="fw-medium mb-0 fs-14">Out For Delivery</p>
                        <span className="text-muted fs-12">May 15, 21:08 (expected)</span>
                    </div>
                </div>
            </Link>
        ),
        content: (
            <div className="mb-1 mt-1">
                <p className="mb-0">Your order is out for delivery</p>
                <span className="text-muted fs-12">May 15, 2022, 15:36</span>
            </div>
        ),
        itemClass: "accordion-item-class-0 border-0 mb-3",
        bodyClass: "pt-0 ps-5 mb-0 pb-0"
    },

]

export const Accordion5 = [
    {
        title: (
            <Link scroll={false} className="collapsed px-0 pt-0 flex-fill" href="#!" role="button" data-bs-toggle="collapse" aria-expanded="false" >
                <div className="d-flex mb-0 lh-1">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-primary2 border-opacity-10 bg-primary2-transparent">
                            <img src="../../../assets/images/ecommerce/png/20.png" alt="" />
                        </span>
                    </div>
                    <div className="flex-fill d-flex align-items-center justify-content-between">
                        <p className="fw-medium mb-0 fs-14">Delivered</p>
                        <span className="fs-12 text-muted">May 15, 22:12</span>
                    </div>
                </div>
            </Link>
        ),
        itemClass: "accordion-item-class-0 border-0",
    },

]

export const Orderdetailsdata = [
    {
        image: "../../../assets/images/ecommerce/png/28.png",
        name: "Lightweight Sneakers",
        size: "Men's 10",
        color: "Light Pink",
        sku: "SPK1218153635",
        price: 1249,
        quantity: 1,
        total: 1249
    },
    {
        image: "../../../assets/images/ecommerce/png/12.png",
        name: "Kids' Party Wear Frock",
        size: "6-7 Years",
        color: "Gold",
        sku: "SPK3789423789",
        price: 499,
        quantity: 2,
        total: 998,
        badge:
            (
                <>
                    <span className="badge bg-success ms-3">In Offer</span>
                </>
            )
    },
    {
        image: "../../../assets/images/ecommerce/png/29.png",
        name: "Ladies' Slim Bag",
        size: "Small",
        color: "Red",
        sku: "SPK1120324532",
        price: 799,
        quantity: 1,
        total: 799,
        badge: (
            <>
                <span className="badge bg-primary ms-3">32% Off</span>
            </>
        )
    },
    {
        image: "../../../assets/images/ecommerce/png/14.png",
        name: "Elegant Flower Pot",
        size: "33mm",
        color: "Brown",
        sku: "SPK1218153635",
        price: 1249,
        quantity: 1,
        total: 1249
    },
    {
        image: "../../../assets/images/ecommerce/png/11.png",
        name: "Trendy Sunglasses",
        size: "9",
        color: "Light Gray",
        sku: "SPK3789423789",
        price: 499,
        quantity: 2,
        total: 998,
        badge: (
            <>
                <span className="badge bg-success ms-3">In Offer</span>
            </>
        )
    },
    {
        image: "../../../assets/images/ecommerce/png/13.png",
        name: "Sleek Modern Chair",
        size: "Small",
        color: "Yellow",
        sku: "SPK1120324532",
        price: 799,
        quantity: 1,
        total: 799,
        badge: (
            <>
                <span className="badge bg-primary ms-3">32% Off</span>
            </>
        )
    }
];