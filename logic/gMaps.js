/** 
*This file will take an address and return the longditude/lattitude of the particular place
*
*/
import fetch from 'node-fetch';
import { Coordinates } from './Coordinates.js';

const APIKEY ='AIzaSyC0TKO_0cGq2LsVVBg3cUYwMJ-URAD7w7s' //free trial api key
const geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const placeURL = 'https://maps.googleapis.com/maps/api/place/details/json?';
const nearbyURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

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
    latlng : `${String(coords.nLat)}, ${coords.nLon}`
  }
  console.log(geocodeURL + new URLSearchParams(params));
  let resp = await fetch(geocodeURL + new URLSearchParams(params));
  let json = await resp.json();

  if (json['status'] == 'OK') {
    return json['results'];
  } 
  else return null;
  
}


// export async function searchNearby(coords) {

// }

// export async function getPlace(placeID) {
//   params = {
//     place_id : placeID,

//   }
// }
