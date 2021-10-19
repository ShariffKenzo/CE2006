import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Backgroundimg from "./components/Backgroundimg";
import SimpleMap from "./components/googlemap";
import { ReactDOM } from "react";

function App() {
  return (
    <div>
      <Backgroundimg />
      <Header className="App" />

      <SimpleMap className="Googlemaps" />
    </div>
  );
}

export default App;
