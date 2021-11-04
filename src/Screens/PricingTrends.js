import React from "react";
import "../App.css";
import Header from "../components/global/Header";
import Backgroundimg from "../components/global/BackgroundImage";
import { ReactDOM } from "react";
import PricingTrendsFilters from "../components/pricing-trends/PricingTrendsFilters";

import PricingGraph from "../components/pricing-trends/PricingGraph";

const PricingTrends = () => {
  let townsToGraph = [null, null, null];
  const selectedTownsHandler = (towns) => {
    console.log(towns);
    townsToGraph = towns
  }

  return (
    <div>
      <frag><Backgroundimg /></frag>
      <frag>
        <Header />
      </frag>
      <frag >
        <PricingTrendsFilters  onSelectOptions={selectedTownsHandler}/>
      </frag>
      <frag>
        <PricingGraph towns={townsToGraph}/>
      </frag>
     
    </div>
  );
};

export default PricingTrends;
