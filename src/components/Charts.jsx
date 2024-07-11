import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import '../styles/chart.css'

export default function Charts({hours,temps}){

  let xAxis=[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  let series=temps

  return(
    <LineChart id="chart"
      xAxis={[{ data:xAxis}]}
      series={[
        {
          data:series,
          // area:true,
          color: '#39a2e2'
          
        },
      ]}
      width={1000}
      height={160}
      margin={{ left: 50, right: 50, top: 40, bottom: 40 }}
      // grid={{ vertical: true, horizontal: true }}
    />
  )
}