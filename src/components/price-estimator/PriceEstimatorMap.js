
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import * as maps from "../../logic/gMaps";
import APIKEY from "../../logic/data/gMapsAPI";


const AnyReactComponent = ({ text }) => <div>{text}</div>;
/**
 * Renders the Google maps component
 */

const PriceEstimatorMap = (props) => {
    const defaultProps = {
        center: {
            lat: 1.3483,
            lng: 103.6831,
        },
        zoom: 11,
    };
    var street = props.street;
    var block = props.block;

    let x = maps.geoCode(street + block);

    console.log(x);

    return (
        // Important! Always set the container height explicitly
        <div
            style={{
                height: "70vh",
                width: "50%",
                position: "absolute",
                left: "28%",
                top: "60%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <GoogleMapReact
                ////// uncomment bootstrap when inputing key "Backend"/////
                // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
              
                
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default PriceEstimatorMap;


