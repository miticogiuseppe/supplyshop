"use client"
import Pageheader from "../../../../../shared/layouts-components/page-header/pageheader";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
import Seo from "../../../../../shared/layouts-components/seo/seo";
const Draggabledata = dynamic(() => import("../../../../../shared/data/adavanec-ui/draggabledata"), { ssr: false });

const DraggableCards = () => {

    return (

        <Fragment>

            <Seo title={"Draggable Cards"} />

            <Pageheader title="Advanced Ui" currentpage="Draggable Cards" activepage="Draggable Cards" />

            <Draggabledata />

        </Fragment>

    )
};

export default DraggableCards;