import React from "react";
import "../App.css";
import Header from "../components/global/Header";
import Backgroundimg from "../components/global/BackgroundImage";
import SimpleMap from "../components/price-estimator/PriceEstimatorMap";
import { ReactDOM } from "react";

import PricingTrendsFilters from '../components/pricing-trends/PricingTrendsFilters';

const NearbyAmenities = () => {
    return (
        
     <div>
    <frag><Backgroundimg /></frag>
     <frag><Header /></frag> 
    {/* <frag className ="town"><TownDropdown/></frag>
     <frag className ="street"><StreetDropdown/></frag>
    <frag className ="flattype"><FlatTypeDropdown/></frag>*/}
     
     
     
     <frag><SimpleMap className="Googlemaps" /></frag>
     <frag ><PricingTrendsFilters /></frag>
     
     
       
 
 
     </div>  
    )
}
export default NearbyAmenities;
