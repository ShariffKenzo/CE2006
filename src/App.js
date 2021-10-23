import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Backgroundimg from "./components/Backgroundimg";
import SimpleMap from "./components/googlemap";
import { ReactDOM } from "react";

import Example from "./components/Example";
import TownDropdown from "./components/TownDropdown";
import { Dropdown } from "reactstrap";
import StreetDropdown from "./components/StreetDropdown";
import FlatTypeDropdown from "./components/FlatTypeDropdown";
import Testdropdown from "./components/Testdropdown";
import Table from "./components/Table";
import Home from "./Screens/Home";
import NearbyAmenities from "./Screens/NearbyAmenities";
import PricingTrends from "./Screens/PricingTrends";
import { Route, Link } from "react-router-dom";
import NAVBar from "./components/NAVBar";

function App() {
  return (
    <div>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/NearbyAmenities" component={NearbyAmenities} />
      <Route exact path="/PricingTrends" component={PricingTrends} />
    </div>
  );
}

export default App;
