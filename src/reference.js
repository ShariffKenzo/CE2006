import fs from 'fs';

//relative file path is from root
import * as gov from '../logic/govData.js';         //data gov
import * as maps from '../logic/gMaps.js';          //gmaps
import * as coord from '../logic/Coordinates.js';   //coords obj
import * as place from '../logic/Place.js';         //place obj

function readJSON(filePath) {
    let raw = fs.readFileSync(filePath);
    let json = JSON.parse(raw);
    return json;
}

//filepath is from root
const db = readJSON('./logic/data/databases.json');

//assigning resource ids here
const resourceID0 = db.resource[0].id; //0 is resale-price-index
const resourceID1 = db.resource[1].id; // median resale

// all govData functions are prefixed with 'get'
let townName = 'pasir ris'
let streets = await gov.getStreets(townName);
console.log(streets);

// gmaps text search, returns the best match as json
let searchString = 'takashimaya'
let results = await maps.search(searchString);
console.log(results);

// a better way to do the above is this:
// a place object is created and modified directly
let location1 = new place.Place();
await location1.find(searchString);
console.log(location1);
