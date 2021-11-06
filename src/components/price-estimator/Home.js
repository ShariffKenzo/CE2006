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
import * as gov from "../../logic/govData";
import LocationSearchModal from "./LandingPage";
import * as gmaps from "../../logic/gMaps";



import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";



const Home = () => {
    const [selectedTown, setSelectedTown] = useState("");
    const [streetDB, setStreetDB] = useState([]);
    const [selectedStreet, setSelectedStreet] = useState("");
    const [blockDB, setBlockDB] = useState([]);
    const [selectedBlock, setSelectedBlock] = useState("");
    const [flatTypeDB, setFlatTypeDB] = useState([]);
    const [selectedFlatType, setSelectedFlatType] = useState("");
    const [isDone, setIsDone] = useState(0);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        selectedTown && gov.getStreets(selectedTown).then(setStreetDB);
    }, [selectedTown]);

    useEffect(() => {
        selectedStreet && gov.getBlocks(selectedStreet).then(setBlockDB);
    }, [selectedStreet]);

    useEffect(() => {
      selectedBlock && gov.getFlatType(selectedStreet, selectedBlock).then(setFlatTypeDB);
    }, [selectedBlock]);

    useEffect(() => {
        var filters = {
            street_name: selectedStreet,
            block: selectedBlock,
            flat_type: selectedFlatType,
        };
        isDone && gov.getMain("f1765b54-a209-4718-8d38-a39237f502b3", {}, filters, true).then(response => setInfo(response['records']))
    }, [isDone]);

    const townSelectHandler = (town) => {
        setSelectedTown(town);
        setSelectedStreet("");
        setSelectedBlock("");
        setSelectedFlatType("");
    };
    const streetSelectHandler = (street) => {
        setSelectedStreet(street);
        setSelectedBlock("");
        setSelectedFlatType("");
    };
    const blockSelectHandler = (block) => {
        setSelectedBlock(block);
        setSelectedFlatType("");
    };
    const flatTypeSelectHandler = (flatType) => {
        setSelectedFlatType(flatType);
        setIsDone(isDone + 1);
    };

/////////////////////MAPS PORTTION //////////////////


//const [latvar, setLatvar] = useState("");
//const [longvar, setLongvar] = useState("");

//var latvar = (async function geoCode(selectedStreet + selectedBlock))[0];
//var longvar = (async function geoCode(selectedStreet + selectedBlock))[1];

//useEffect(() => {
//    latvar && longvar;
//}, [latvar]);

 let latvar = 1.3483;
 let longvar =   103.6831;

/////////////////////MAPS PORTTION //////////////////
  
/*
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat:  1.3483, lng: 103.6831}}
        >
          <Marker
            position={{ lat:  1.3483, lng: 103.6831 }}
          />
        </GoogleMap>
      ));
      
      */
//////////////// duplicate test//////////////
      const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat:  latvar, lng: longvar}}
        >
          <Marker
            position={{ lat:  latvar, lng: longvar }}
          />
        </GoogleMap>
      ));
      


/////////////////////MAPS PORTTION //////////////////




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
                        value={selectedTown}
                        onSelectOption={townSelectHandler}
                    />
                    <Dropdown
                        className="Streetest"
                        label="Street"
                        value={selectedStreet}
                        options={streetDB}
                        onSelectOption={streetSelectHandler}
                    />
                    <Dropdown
                        className="Typreest"
                        label="Block"
                        value={selectedBlock}
                        options={blockDB}
                        onSelectOption={blockSelectHandler}
                    />
                    <Dropdown
                        className="Blkest"
                        label="Flat Type"
                        value={selectedFlatType}
                        options={flatTypeDB}
                        onSelectOption={flatTypeSelectHandler}
                    />
                </div>
            </frag>
            {/*
            <frag>
                <SimpleMap className="Googlemaps" street={selectedStreet} block={selectedBlock}/>
            </frag>*/}
            

            {/*<frag>
        <BlockInfo info = {info}/>
      </frag>*/}

            <div
                styles={{ height: "500px", overflowY: "scroll" }} //style={styles.wrapperDiv}
            >
                <BlockInfo info={info} />
          </div>

{/* OTHER MAPS NOT IN USE NOW
           <frag style={{
                height: "70vh",
                width: "50%",
                position: "absolute",
                left: "28%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}> <LocationSearchModal/> </frag>

        */}



<frag style={{
                height: "70vh",
                width: "50%",
                position: "absolute",
                left: "28%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}>

<MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTxHMM9lclQOFgoL2-TROLWJnu_8mb7X4&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />

  </frag>

            
        </div>
    );
};

export default Home;
