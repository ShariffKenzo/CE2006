import React from "react";

import Header from "../global/Header";
import { useState, useEffect } from "react";
import PriceEstimatorMap from "../price-estimator/PriceEstimatorMap";
import * as gov from "../../logic/govData";
import Dropdown from "../global/Dropdown";
import "../global/DropdownsContainer.css";
import TownDB from "../price-estimator/TownDB";
import AmenitiesList from "./AmenitiesList";
import "../global/ContentContainer.css";
import Place from "../../logic/Place"

/**
 * Contains all the components for Nearby Amenities page
 * @returns {JSX.Element} Nearby Amenities page
 */
const NearbyAmenities = () => {
    const [selectedTown, setSelectedTown] = useState("");
    const [streetDB, setStreetDB] = useState([]);
    const [selectedStreet, setSelectedStreet] = useState("");
    const [blockDB, setBlockDB] = useState([]);
    const [selectedBlock, setSelectedBlock] = useState("");
    const [isDone, setIsDone] = useState(0);
    const [nearby, setNearby] = useState(null);

    useEffect(() => {
        selectedTown && gov.getStreets(selectedTown).then(setStreetDB);
    }, [selectedTown]);

    useEffect(() => {
        selectedStreet && gov.getBlocks(selectedStreet).then(setBlockDB);
    }, [selectedStreet]);

    useEffect(() => {
        const main = async () => {
            const x = new Place(selectedStreet, selectedBlock);
            await x.build()
            const nearbyPlaces = await x.nearby()
            // console.log(x)
            // console.log(nearby)
            setNearby(nearbyPlaces)
           }
           selectedStreet && selectedBlock && main();
    }, [isDone]);

    const townSelectHandler = (town) => {
        setSelectedTown(town);
        setSelectedStreet("");
        setSelectedBlock("");
    };
    const streetSelectHandler = (street) => {
        setSelectedStreet(street);
        setSelectedBlock("");
    };
    const blockSelectHandler = (block) => {
        setSelectedBlock(block);
        setIsDone(isDone + 1);
    };

    return (
        <div>
            <Header />
            <div className="dropdowns_container">
                <Dropdown
                    label="Town"
                    options={TownDB}
                    value={selectedTown}
                    onSelectOption={townSelectHandler}
                />
                <Dropdown
                    label="Street"
                    value={selectedStreet}
                    options={streetDB}
                    onSelectOption={streetSelectHandler}
                />
                <Dropdown
                    label="Block"
                    value={selectedBlock}
                    options={blockDB}
                    onSelectOption={blockSelectHandler}
                />
            </div>
            <div className="content_container">
                <div className="myMap">
                    <PriceEstimatorMap
                        block={selectedBlock}
                        street={selectedStreet}
                    />
                </div>
                <AmenitiesList nearbyPlaces={nearby}/>
            </div>
        </div>
    );
};
export default NearbyAmenities;
