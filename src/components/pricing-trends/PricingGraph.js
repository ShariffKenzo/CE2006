/**
 * Displays y axis: price of HDB in hundreds/ x axis: quarters
 */
import React from "react";
import { Chart } from "react-charts";
import { Line } from "react-chartjs-2";

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
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes}/>
    </div>
  );
  return lineChart;
};

export default PricingGraph;