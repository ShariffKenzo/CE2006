import "./App.css";
import { ReactDOM } from "react";

import Home from "./Screens/Home";
import NearbyAmenities from "./Screens/NearbyAmenities";
import PricingTrends from "./Screens/PricingTrends";
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
