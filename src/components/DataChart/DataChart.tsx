'use client';

import { ChartConfiguration, Chart, registerables } from "chart.js";
import {months} from '@/helper/Util'
import { useEffect, useRef } from "react";
import {darkOptions} from '@/components/DataChart/Themes'

export default function DataChart(props: ChartConfiguration){
    const {data, options} = props;
    const chartRef = useRef<HTMLCanvasElement>(null)

    const labels = months({count: 7})
    useEffect(() => {
        if(chartRef.current){
            const chart = new Chart(chartRef.current, {
                ...props,
                options: {
                    ...options,
                    ...darkOptions,
                }
            });
            return () => chart.destroy();
        }
    },[data])
    return <canvas ref={chartRef}/>
    
}
Chart.register(...registerables)
