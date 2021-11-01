/**
*This file will take an address and return the longditude/lattitude of the particular place
*
*/
import * as fs from 'fs';

import fetch from 'node-fetch';
import { Coordinates } from './Coordinates.js';

let filePath = './logic/data/gMaps.txt' //locally stored API key
const APIKEY = fs.readFileSync(filePath, 'utf-8');

const geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const nearbyURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
const placeURL = 'https://maps.googleapis.com/maps/api/place/details/json?';

/**
 * Looks up address based on given string
 * @param {String} address Location in string form
 * @returns JSON, result
 */
export async function geoCode(address) {

    let params = {
        key: APIKEY,
        address: address,
        components: "country:SG"
    }

    console.log(geocodeURL + new URLSearchParams(params))
    let resp = await fetch(geocodeURL + new URLSearchParams(params));
    let json = await resp.json();

    if (json['status'] == 'OK') {
        return json['results'];
    }
    else return null;
}

/**
 * Looks up address based on given coordinates
 * @param {Coordinates} coords Coordinates object
 * @returns JSON, result
 */
export async function revgeoCode(coords) {
    let params = {
        key: APIKEY,
        latlng: `${(coords.nLat)}, ${(coords.nLon)}`
    }

    console.log(geocodeURL + new URLSearchParams(params));
    let resp = await fetch(geocodeURL + new URLSearchParams(params));
    let json = await resp.json();

    if (json['status'] == 'OK') {
        return json['results'];
    }
    else return null;

}

/**
 * Searches for nearby places that fit a given type and radius
 * @param {Coordinates} coords Coordinates object
 * @param {String} type Place type, only 1 type accepted
 * @param {Number} radius Radius (meters) around coords to search, optional
 * @returns Array of place details
 */
export async function nearbyPlaces(coords, type, radius = 500) {
    let params = {
        key: APIKEY,
        location: `${(coords.nLat)}, ${(coords.nLon)}`,
		radius: radius,
		type: type
    }

	console.log(nearbyURL + new URLSearchParams(params));
	let resp = await fetch(nearbyURL + new URLSearchParams(params));
	let json = await resp.json();

	if(json['status'] == 'OK') {
		return json['results'];
	}
	else return null;
}

/**
 * Look up details on a location
 * @param {String} place_id Google's place ID 
 * @returns JSON, place details
 */
export async function placeDetails(place_id) {
	let params = {
		key: APIKEY,
		place_id: place_id,
	}

	console.log(placeURL + new URLSearchParams(params));
	let resp = await fetch(placeURL + new URLSearchParams(params));
	let json = await resp.json();

	if(json['status'] == 'OK') {
		return json['result'];
	}
	else return null;
}
