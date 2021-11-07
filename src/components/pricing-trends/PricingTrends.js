import React from "react";
import Header from "../global/Header";
import { useState } from "react";
import TownDB from "../price-estimator/TownDB";
import Dropdown from "../global/Dropdown";
import PricingGraph from "./PricingGraph";
import FlatTypeDB from "./FlatTypeDB";
import "./Graph.css";

const PricingTrends = () => {
    const [flatType, setFlatType] = useState("");
    const [town1, setTown1] = useState("");
    const [town2, setTown2] = useState("");
    const [town3, setTown3] = useState("");

    const flatTypeSelectHandler = (selectedFlatType) => {
        setFlatType(selectedFlatType);
    };
    const town1SelectHandler = (selectedTown1) => {
        setTown1(selectedTown1);
    };
    const town2SelectHandler = (selectedTown2) => {
        setTown2(selectedTown2);
    };
    const town3SelectHandler = (selectedTown3) => {
        setTown3(selectedTown3);
    };
    return (
        <div>
            <Header />
            <div className="dropdowns_container">
                <Dropdown
                    label="Flat Type"
                    options={FlatTypeDB}
                    value={flatType}
                    onSelectOption={flatTypeSelectHandler}
                />
                <Dropdown
                    label="Town 1"
                    options={TownDB}
                    value={town1}
                    onSelectOption={town1SelectHandler}
                />
                <Dropdown
                    label="Town 2"
                    options={TownDB}
                    value={town2}
                    onSelectOption={town2SelectHandler}
                />
                <Dropdown
                    label="Town 3"
                    options={TownDB}
                    value={town3}
                    onSelectOption={town3SelectHandler}
                />
            </div>
            <div className="my_graph">
                <PricingGraph
                    flatType={flatType}
                    town1={town1}
                    town2={town2}
                    town3={town3}
                />
            </div>
        </div>
    );
};

export default PricingTrends;
