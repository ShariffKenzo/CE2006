import React from "react";
import "../App.css";
import Header from "../components/global/Header";
import Backgroundimg from "../components/global/BackgroundImage";
import SimpleMap from "../components/price-estimator/PriceEstimatorMap";
import { ReactDOM } from "react";

import Example from "../components/global/Example";
import TownDropdown from "../components/price-estimator/TownDropdown";
import { Dropdown } from "reactstrap";
import StreetDropdown from "../components/price-estimator/StreetDropdown";
import FlatTypeDropdown from "../components/price-estimator/FlatTypeDropdown";
import Testdropdown from "../components/global/TestDropdown";
import Table from "../components/price-estimator/BlockInfo";
import PriceEstimatorFilters from "../components/price-estimator/PriceEstimatorFilters";

const Home = () => {
  return (
    <div>
      <frag>
        <Header />
      </frag>
      {/* <frag className="town">
        <TownDropdown />
      </frag>
      <frag className="street">
        <StreetDropdown />
      </frag>
      <frag className="flattype">
        <FlatTypeDropdown />
      </frag> */}
      <PriceEstimatorFilters/>

      <frag>
        <Backgroundimg />
      </frag>
      <frag>
        <SimpleMap className="Googlemaps" />
      </frag>

      <frag>
        <Table />
      </frag>
    </div>
  );
};

export default Home;
