import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import * as gov from "../../logic/govData";
import Quarters from "./Quarters";
/**
 * Displays a graph comparing the median resale prices for the flat type selected by the user, 
 * for up to 3 different towns selected by the user.
 * @param {string} flatType - flat type selected by the user
 * @param {string} town1 - the first town selected by the user
 * @param {string} town2 - the second town selected by the user
 * @param {string} town3 - the third town selected by the user
 * @returns {JSX.Element} Dynamic graph component
 */
const PricingGraph = (props) => {
    const [town1Prices, setTown1Prices] = useState([]);
    const [town2Prices, setTown2Prices] = useState([]);
    const [town3Prices, setTown3Prices] = useState([]);
    
    useEffect(() => {
        props.flatType &&
            props.town1 &&
            gov
                .getMedianHistory(props.town1, props.flatType)
                .then(setTown1Prices);
    }, [props.flatType, props.town1]);
    
    useEffect(() => {
        props.flatType &&
            props.town2 &&
            gov
                .getMedianHistory(props.town2, props.flatType)
                .then(setTown2Prices);
    }, [props.flatType, props.town2]);

    useEffect(() => {
        props.flatType &&
            props.town3 &&
            gov
                .getMedianHistory(props.town3, props.flatType)
                .then(setTown3Prices);
        // console.log(props.town3);
        // console.log(props.flatType);
        // console.log(town3Prices);
    }, [props.flatType, props.town3]);
    
    return (
            <Line
                data={{
                    labels: Quarters,
                    datasets: [
                        {
                            label: "Town 1: " + props.town1,
                            data: town1Prices,
                            backgroundColor: "red",
                            borderColor: "red",
                        },
                        {
                            label: "Town 2: " + props.town2,
                            data: town2Prices,
                            backgroundColor: "blue",
                            borderColor: "blue",
                        },
                        {
                            label: "Town 3: " + props.town3,
                            data: town3Prices,
                            backgroundColor: "green",
                            borderColor: "green",
                        },
                    ],
                }}
                options={{ maintainAspectRatio: false }}
            />
    );
};

export default PricingGraph;
