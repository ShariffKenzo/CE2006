import React from "react";
import "../App.css";
import Header from "../components/global/Header";
import Backgroundimg from "../components/global/BackgroundImage";
import SimpleMap from "../components/price-estimator/PriceEstimatorMap";
import { ReactDOM } from "react";
import PricingTrendsFilters from "../components/pricing-trends/PricingTrendsFilters";

import Example from "../components/global/Example";
import TownDropdown from "../components/price-estimator/TownDropdown";
import { Dropdown } from "reactstrap";
import StreetDropdown from "../components/price-estimator/StreetDropdown";
import FlatTypeDropdown from "../components/price-estimator/FlatTypeDropdown";
import Testdropdown from "../components/global/TestDropdown";
import Table from "../components/price-estimator/BlockInfo";
import PricingGraph from "../components/pricing-trends/PricingGraph";

const PricingTrends = () => {
  return (
    <div>
      <frag><Backgroundimg /></frag>
      <frag>
        <Header />
      </frag>
      <frag >
        <PricingTrendsFilters  />
      </frag>
      <frag>
        <PricingGraph />
      </frag>
     
    </div>
  );
};

export default PricingTrends;
