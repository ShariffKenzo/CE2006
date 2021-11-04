import React from "react";
import { useState, useEffect } from "react";
import "../../App.css";
import Header from "../global/Header";
import Backgroundimg from "../global/BackgroundImage";
import SimpleMap from "./PriceEstimatorMap";
import BlockInfo from "./BlockInfo";
import Dropdown from "../global/Dropdown";
import "./PriceEstimatorFilters.css";
import TownDB from "./TownDB";
// import FlatTypeDB from "./FlatTypeDB";


const Home = () => {
  const [selectedTown, setSelectedTown] = useState("");
  const [streetDB, setStreetDB] = useState([]);
  const [selectedStreet, setSelectedStreet] = useState("");
  const [blockDB, setBlockDB] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState("");
  const [flatTypeDB, setFlatTypeDB] = useState([]);
  const [selectedFlatType, setSelectedFlatType] = useState("")
  const [isDone, setIsDone] = useState(0);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    var filters = JSON.stringify({ town: selectedTown.toUpperCase() });
      fetch(
          `https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&filters=${filters}`
      )
          .then((response) => response.json())
          .then((json) => {
              console.log(`https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&filters=${filters}`)
              let streets = [];
              json["result"]["records"].map((item) => {
                  streets.push(item["street_name"]);
              });
              setStreetDB([...new Set(streets)].sort());
          });
  }, [selectedTown]);

  useEffect(() => {
    var filters = JSON.stringify({ street_name: selectedStreet });
      fetch(
          `https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&filters=${filters}`
      )
          .then((response) => response.json())
          .then((json) => {
              console.log(`https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&filters=${filters}`)
              let blocks = [];
              json["result"]["records"].map((item) => {
                  blocks.push(item["block"]);
              });
              setBlockDB([...new Set(blocks)].sort());
          });
  }, [selectedStreet, selectedTown]);
  
  useEffect(() => {
    var filters = JSON.stringify({ street_name: selectedStreet, block: selectedBlock });
      fetch(
          `https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&filters=${filters}`
      )
          .then((response) => response.json())
          .then((json) => {
              console.log(`https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&filters=${filters}`)
              let flatTypes = [];
              json["result"]["records"].map((item) => {
                  flatTypes.push(item["flat_type"]);
              });
              
              setFlatTypeDB([...new Set(flatTypes)].sort());
          });
  }, [selectedBlock, selectedTown, selectedStreet]);

  useEffect(()=>{
    var filters = JSON.stringify({ street_name: selectedStreet, block: selectedBlock, flat_type: selectedFlatType.toUpperCase() });
      fetch(
          `https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&filters=${filters}`
      )
          .then((response) => response.json())
          .then((json) => {
              console.log(`https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&filters=${filters}`)
              console.log(json['result']['records'])
              setInfo(json['result']['records'])
          });

  }, [isDone])

  const townSelectHandler = (town) => {
      setSelectedTown(town);
      setSelectedStreet('')
      setSelectedBlock('')
      setSelectedFlatType('')
  };
  const streetSelectHandler = (street) => {
      setSelectedStreet(street);
      setSelectedBlock('')
      setSelectedFlatType('')
  };
  const blockSelectHandler = (block) => {
      setSelectedBlock(block);
      setSelectedFlatType('')
  };
  const flatTypeSelectHandler = (flatType) => {
    setSelectedFlatType(flatType);
    setIsDone(isDone+1)
};

  return (
    <div>
      <frag>
        <Backgroundimg />
      </frag>
      <frag>
        <Header />
      </frag>

      <frag>
      <div>
            <Dropdown
                className="Townest"
                label="Town"
                options={TownDB}
                value = {selectedTown}
                onSelectOption={townSelectHandler}
            />
            <Dropdown
                className="Streetest"
                label="Street"
                value = {selectedStreet}
                options={streetDB}
                onSelectOption={streetSelectHandler}
            />
            <Dropdown
                className="Typreest"
                label="Block"
                value = {selectedBlock}
                options={blockDB}
                onSelectOption={blockSelectHandler}
            />
            <Dropdown
                className="Blkest"
                label="Flat Type"
                value = {selectedFlatType}
                options={flatTypeDB}
                onSelectOption={flatTypeSelectHandler}
            />

        </div>
      </frag>

      <frag>
        <SimpleMap className="Googlemaps" />
      </frag>
      <frag>
        <BlockInfo info = {info}/>
      </frag>
    </div>
  );
};

export default Home;
