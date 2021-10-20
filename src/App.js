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


function App() {
  return (
    
     <div>
    <frag><Header /></frag>
    <frag className ="town"><TownDropdown/></frag>
    <frag className ="street"><StreetDropdown/></frag>
    <frag className ="flattype"><FlatTypeDropdown/></frag>
    
    <frag><Backgroundimg /></frag>
    <frag><SimpleMap className="Googlemaps" /></frag>
    
      


    </div>  
  );
}

export default App;
