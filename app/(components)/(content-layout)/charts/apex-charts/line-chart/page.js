"use client";
import dynamic from "next/dynamic";
const LineChart1 = dynamic(() => import('../../../../../../shared/data/charts/apexcharts/linechartsdata1'), { ssr: false });

const LineChart = () => {

  return (
    <>
      <LineChart1 />
    </>
  );
};

export default LineChart;






