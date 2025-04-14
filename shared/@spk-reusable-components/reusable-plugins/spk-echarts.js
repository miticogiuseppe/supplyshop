import React from 'react';
import dynamic from 'next/dynamic';
import { EChartsOption } from 'echarts';
const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false });

const SpkEcharts = ({ chartOptions, chartSeries, mainClass, height, width, id }) => {

  return (
    <ReactECharts option={{ ...chartOptions, series: chartSeries }} style={{ height, width }} key={id} className={mainClass} />
  );

};

export default SpkEcharts;
