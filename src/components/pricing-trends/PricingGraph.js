/**
 * Displays y axis: price of HDB in hundreds/ x axis: quarters
 */
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import * as gov from "../../logic/govData";
import Quarters from "./Quarters";

// current problems: lagging state, central area only has 6 data points, when the data labels are the same error occurs

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
        console.log(props.town1);
        console.log(props.flatType);
        console.log(town1Prices);

        // if (props.flatType == "Executive") {
        //     props.flatType &&
        //         props.town1 &&
        //         gov.getMedianHistory(props.town1, "EXEC").then((response) => {
        //             response.map((item) => tempPriceList.push(item));
        //
        //         });
        // }
    }, [props.flatType, props.town1]);
    useEffect(() => {
        props.flatType &&
            props.town2 &&
            gov
                .getMedianHistory(props.town2, props.flatType)
                .then(setTown2Prices);
        console.log(props.town2);
        console.log(props.flatType);
        console.log(town2Prices);
    }, [props.flatType, props.town2]);
    useEffect(() => {
        props.flatType &&
            props.town3 &&
            gov
                .getMedianHistory(props.town3, props.flatType)
                .then(setTown3Prices);
        console.log(props.town3);
        console.log(props.flatType);
        console.log(town3Prices);
    }, [props.flatType, props.town3]);

    return (
        <div>
            <Line
                data={{
                    labels: Quarters,
                    datasets: [
                        {
                            label: props.town1,
                            data: town1Prices,
                            backgroundColor: "red",
                            borderColor: "red",
                        },
                        {
                            label: props.town2,
                            data: town2Prices,
                            backgroundColor: "blue",
                            borderColor: "blue",
                        },
                        {
                            label: props.town3,
                            data: town3Prices,
                            backgroundColor: "green",
                            borderColor: "green",
                        },
                    ],
                }}
                height={200}
                width={400}
            />
        </div>
    );
};

export default PricingGraph;
