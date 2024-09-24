import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Sample data
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// Colors for the Pie chart slices
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = () => {
  return (
    <>
    <h1> Pie Chart Component</h1>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
    <PieChart width={400} height={400}>
      {/* 
        'Pie' is the main component to draw a pie chart. 
      */}
      <Pie
        data={data}
        dataKey="value"
        cx="50%" // Horizontal center of the Pie chart
        cy="50%" // Vertical center of the Pie chart
        innerRadius={60} // The inner radius of the pie chart
        outerRadius={80} // The outer radius of the pie chart
        fill="#8884d8" // Default fill color
        paddingAngle={5}
      >
        {/* 
          'Cell' defines each slice of the pie. 
          We map through the data to assign each slice a color from the COLORS array.
        */}
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      {/* Tooltip component provides additional info when you hover over a slice */}
      <Tooltip />

      {/* Legend component displays a legend for each data category */}
      <Legend />
    </PieChart>
    </div>
    </>
  );
};

export default PieChartComponent;
