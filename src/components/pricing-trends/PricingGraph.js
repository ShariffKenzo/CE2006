/**
 * Displays y axis: price of HDB in hundreds/ x axis: quarters
 */
import React from "react";
import { Chart } from "react-charts";
import { Line } from "react-chartjs-2";

<<<<<<< HEAD
let db1 =[
  [0, null],
  [1, 1],
  [2, 5],
  [3, 1],
  [4, 4],
]
let db2 =[
  [0, 5],
  [1, 0.5],
  [2, 2],
  [3, 3],
  [4, 2],
]

const PricingGraph = (props) => {
=======

const PricingGraph = () => {
>>>>>>> 6730b2af421ca9f927925c7d99885e0322ee4a00
  const data = React.useMemo(
    () => [
      {
        label: "Bishan",
        data: db1,
      },
      {
        label: props.towns[1],
        data: db2,
      },
      {
        label: props.towns[2],
        data: db1,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically

    /// new stuff to add
    <div style={{ height: '70vh',  width:'70%',  position: 'absolute', left: '50%', top: '60%',
    transform: 'translate(-50%, -50%)', backgroundColor :'white', }}
    >
      <Chart data={data} axes={axes}/>
    </div>
  );
  return lineChart;
};

export default PricingGraph;