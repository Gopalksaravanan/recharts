import React from "react";
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend } from "recharts";

const salesData = [
    { month: 'Jan', Asales: 500, Bsales:700 },
    { month: 'Feb', Asales: 700, Bsales:500 },
    { month: 'Mar', Asales: 800, Bsales:750 },
    { month: 'Apr', Asales: 600, Bsales:550 },
    { month: 'May', Asales: 900, Bsales:700 },
    { month: 'Jun', Asales: 1000, Bsales:900 },
    { month: 'Jul', Asales: 950, Bsales:800 },
    { month: 'Aug', Asales: 1100, Bsales:1000 },
    { month: 'Sep', Asales: 1050, Bsales:950 },
    { month: 'Oct', Asales: 1200, Bsales:1100 },
    { month: 'Nov', Asales: 1150, Bsales:950 },
    { month: 'Dec', Asales: 1300, Bsales:1200 }
  ];


const LineChartComponent = ()=>{
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ResponsiveContainer width={600} height={400}>
            <LineChart data = {salesData} >
            <XAxis dataKey={"month"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Asales" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="Bsales" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default LineChartComponent;