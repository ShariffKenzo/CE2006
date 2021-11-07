import React from "react";
import { useState, useEffect } from "react";
import Header from "../global/Header";
import PriceEstimatorMap from "./PriceEstimatorMap";
import BlockInfo from "./BlockInfo";
import Dropdown from "../global/Dropdown";
import "./../global/DropdownsContainer.css";
import "./../global/Map.css";
import TownDB from "./TownDB";
import * as gov from "../../logic/govData";
import "../global/ContentContainer.css";

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
        selectedBlock &&
            gov.getFlatType(selectedStreet, selectedBlock).then(setFlatTypeDB);
    }, [selectedBlock]);

    useEffect(() => {
        var filters = {
            street_name: selectedStreet,
            block: selectedBlock,
            flat_type: selectedFlatType,
        };
        isDone &&
            gov
                .getMain(
                    "f1765b54-a209-4718-8d38-a39237f502b3",
                    {},
                    filters,
                    true
                )
                .then((response) => setInfo(response["records"]));
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
                <Dropdown
                    label="Flat Type"
                    value={selectedFlatType}
                    options={flatTypeDB}
                    onSelectOption={flatTypeSelectHandler}
                />
            </div>
            <div className="content_container">
                <div className="myMap">
                    <PriceEstimatorMap
                        block={selectedBlock}
                        street={selectedStreet}
                    />
                </div>
                <BlockInfo info={info} />
            </div>
        </div>
    );
};

export default Home;
