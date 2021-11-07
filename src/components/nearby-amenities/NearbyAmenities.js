import React from "react";

import Header from "../global/Header";
import Backgroundimg from "../global/BackgroundImage";
import { useState,useEffect } from "react";
import PriceEstimatorMap from "../price-estimator/PriceEstimatorMap";
import BlockInfo from "../price-estimator/BlockInfo";
import * as gov from "../../logic/govData";
import Dropdown from "../global/Dropdown";
import "../price-estimator/PriceEstimatorFilters.css";
import TownDB from "../price-estimator/TownDB";

import APIKEY from "../../logic/data/gMapsAPI";


import { ReactDOM } from "react";



const NearbyAmenities = () => {
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
           
            

            <div
                styles={{ height: "500px", overflowY: "scroll" }} //style={styles.wrapperDiv}
            >
                <BlockInfo info={info} />
          </div>


<frag style={{
                height: "70vh",
                width: "50%",
                position: "absolute",
                left: "28%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}>

<PriceEstimatorMap block={selectedBlock} street={selectedStreet}/>

  </frag>

     
       
 
 
     </div>  
    )
}
export default NearbyAmenities;
