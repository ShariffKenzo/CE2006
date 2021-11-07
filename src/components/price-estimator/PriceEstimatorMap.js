import * as gmaps from "../../logic/gMaps";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import { useEffect, useRef, useState } from "react";
import APIKEY from "../../logic/data/gMapsAPI";

const PriceEstimatorMap = (props) => {
    const mapRef = useRef();
    const [coor, setCoor] = useState({ lat: 1.3483, lng: 103.6831 });
    const [zoomsize, setZoomsize] = useState(15);

    /// saves coordinates saves the state.  setCoor = function to rerennder; useState(initial parameter)

    useEffect(() => {
        console.log(props.street + " blk " + props.block);
        props.block &&
            gmaps
                .addressToCoords(props.street + " blk " + props.block)
                .then((response) => {
                    console.log(response);
                    setCoor({ lat: response["nLat"], lng: response["nLon"] });
                    setZoomsize(18);
                });
    }, [props.block]);

    useEffect(() => {
        props.street &&
            gmaps.addressToCoords(props.street).then((response) => {
                console.log(response);
                setCoor({ lat: response["nLat"], lng: response["nLon"] });
                setZoomsize(15);
            });
    }, [props.street]);

    console.log(coor);
    const PriceEstimatorMap = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap
                defaultZoom={zoomsize}
                defaultCenter={coor}
                ref={mapRef}
            >
                <Marker position={coor} />
            </GoogleMap>
        ))
    );

    return (
        <PriceEstimatorMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${APIKEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
};

export default PriceEstimatorMap;
