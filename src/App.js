import "./App.css";
import { ReactDOM } from "react";

import Home from "./components/price-estimator/Home";
import NearbyAmenities from "./Screens/NearbyAmenities";
import PricingTrends from "./components/pricing-trends/PricingTrends";
import { Route, Link } from "react-router-dom";

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
