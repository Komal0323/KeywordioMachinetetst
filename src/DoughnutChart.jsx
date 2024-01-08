import React from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30], // Example data, replace with your own data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Example colors
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2>Doughnut Chart</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
