import * as gmaps from "../../logic/gMaps";
import { Coordinates } from "../../logic/Coordinates";
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
    const [latvar, setLatvar] = useState(1.3483);
    const [longvar, setLongvar] = useState(103.6831);
    const [zoomsize, setZoomsize] = useState(15);

/// saves latvar/longvar saves the state.  setLong/setLat = function to rerennder; useState(initial parameter)


    useEffect(()=>{
        console.log(props.street + " blk " + props.block)
        props.block && gmaps.addressToCoords(props.street + " blk " + props.block).then((response) => {
            console.log(response)
            setLatvar(response['nLat']);
            setLongvar(response['nLon']);
            setZoomsize(18);
          

        })
    }, [props.block])

    useEffect(()=>{
        console.log(props.street + " blk " + props.block)
        props.street && gmaps.addressToCoords(props.street).then((response) => {
            console.log(response)
            setLatvar(response['nLat']);
            setLongvar(response['nLon'])
            setZoomsize(15);



        })
    }, [props.street])

   


    console.log(latvar);
    console.log(longvar);

    const PriceEstimatorMap = withScriptjs(
        withGoogleMap((props) => (
            <GoogleMap
                defaultZoom={zoomsize}
                defaultCenter={{ lat: latvar, lng: longvar }}
                ref={mapRef}
            >
                <Marker position={{ lat: latvar, lng: longvar }} />
               {/* <Marker position={{ lat: 1.3496, lng: 103.9568 }} /> add more of this html for atm/malls etc*/}
            </GoogleMap>
        ))
    );

    return <PriceEstimatorMap    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${APIKEY}&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}/>
};

export default PriceEstimatorMap;
