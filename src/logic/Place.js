import * as gMaps from './gMaps.js';
import { Coordinates } from "./Coordinates.js";

/**
 * Object for holding details about a location's address
 */
export class Place {
    /**
     * Address constructor  
     * Generate address object via 2 methods:  
     * - pass in and streetname **and** street number
     * - pass in coordinates
     * - pass in placeID
     * @param {String} streetName Name of street, optional
     * @param {String} streetNo Street or block number, string or number, optional
     * @param {Coordinates} coords Coordinates object, optional
     * @param {String} placeID Google's placeID, optional
     */
    constructor(streetName='', streetNo='', coords=null, placeID=null) {
        this.name = ''
        this.fullAdddress = '';
        this.town = '';
        this.streetName = streetName;
        this.streetNo = streetNo;
        this.postCode = 0;
        this.loc = coords
        this.type = '';
        this.placeID = placeID;
    }

    reset() {
        this.name = ''
        this.fullAdddress = '';
        this.town = '';
        this.streetName = '';
        this.streetNo = '';
        this.postCode = 0;
        this.loc = ''
        this.type = '';
        this.placeID = '';   
    }

    /**
     * Build the remaining address attributes:  
     * ```await this.build();```
     */
    async build() {
        var data;

        //build based off placeID
        //single query
        if(this.placeID) {
            data = await gMaps.placeDetails(this.placeID);
            this.name = data['name'];
        }

        //build based off coordinates
        //double query
        else if(this.loc) {
            data = await gMaps.revgeoCode(this.loc);
            data = data[0];

            this.placeID = data['place_id'];
            this.name = await gMaps.placeDetails(this.placeID);
            this.name = this.name['name'];
        }
        //build based off address
        //double query
        else if(this.streetName && this.streetNo) {
            data = await gMaps.geoCode(`${this.streetNo} ${this.streetName}`);
            data = data[0];
            
            this.placeID = data['place_id'];
            this.name = await gMaps.placeDetails(this.placeID);
            this.name = await this.name['name'];
        }

        //build the rest (common)
        this.town = data['address_components']
        .filter(component => component.types[0] == 'neighborhood')
        [0]['short_name'];

        this.streetName = data['address_components']
        .filter(component => component.types[0] == 'route')
        [0]['short_name'];

        this.streetNo = data['address_components']
        .filter(component => component.types[0] == 'street_number')
        [0]['short_name'];

        this.postCode = data['address_components']
        .filter(component => component.types[0] == 'postal_code')
        [0]['short_name'];

        this.fullAdddress = `${this.streetNo} ${this.streetName}, Singapore ${this.postCode}`;
        this.loc = new Coordinates(
            data['geometry']['location']['lat'],
            data['geometry']['location']['lng']
        );
        this.type = data['types'][0];
    }

    /**
     * Build based on best match  
     * @param {String} query General text query
     */
    async find(query) {
        this.reset();
        let data = await gMaps.search(query);
        
        this.placeID = data['place_id'];
        this.name = data['name'];

        try{
        this.town = data['address_components']
        .filter(component => component.types[0] == 'neighborhood')
        [0]['short_name'];
        } catch{}

        try{
        this.streetName = data['address_components']
        .filter(component => component.types[0] == 'route')
        [0]['short_name'];
        } catch{}

        try{
        this.streetNo = data['address_components']
        .filter(component => component.types[0] == 'street_number')
        [0]['short_name'];
        } catch{}

        try{
        this.postCode = data['address_components']
        .filter(component => component.types[0] == 'postal_code')
        [0]['short_name'];
        } catch{}

        this.fullAdddress = `${this.streetNo} ${this.streetName}, Singapore ${this.postCode}`;
        this.loc = new Coordinates(
            data['geometry']['location']['lat'],
            data['geometry']['location']['lng']
        );
        this.type = data['types'][0];
    }

    /**
     * Build based on json passed
     * @param {JSON} json_in JSON containing search result
     */
    parse(json_in) {
        this.reset();
        this.name = json_in['name'];
        this.placeID = json_in['place_id'];

        try{
        this.town = json_in['address_components']
        .filter(component => component.types[0] == 'neighborhood')
        [0]['short_name'];
        } catch{}

        try{
        this.streetName = json_in['address_components']
        .filter(component => component.types[0] == 'route')
        [0]['short_name'];
        } catch{}

        try{
        this.streetNo = json_in['address_components']
        .filter(component => component.types[0] == 'street_number')
        [0]['short_name'];
        } catch{}

        try{
        this.postCode = json_in['address_components']
        .filter(component => component.types[0] == 'postal_code')
        [0]['short_name'];
        } catch{}

        this.fullAdddress = `${this.streetNo} ${this.streetName}, Singapore ${this.postCode}`;
        this.loc = new Coordinates(
            json_in['geometry']['location']['lat'],
            json_in['geometry']['location']['lng']
        );
        this.type = json_in['types'][0]
    }

    /**
     * Looks for predefined nearby points of interest 
     * @param {Number} radius Radius to search, default 500 meters
     * @param {Number} max Maximum number of each type to find, default 10
     * @returns JSON array
     */
    async nearby(radius = 500, max = 2) {
        let jsonArr = [ //long boi
            {type:"atm",            places:[]},
            {type:"fire_station",   places:[]},
            {type:"hospital",       places:[]},
            {type:"parking",        places:[]},
            {type:"police",         places:[]},
            {type:"post_office",    places:[]},
            {type:"shopping_mall",  places:[]},
            {type:"supermarket",    places:[]},
            {type:"subway_station", places:[]},
            {type:"train_station",  places:[]},
            {type:"restaurant",     places:[]}
        ]

        var tempArr;
        //building the array
        for(let i=0; i<jsonArr.length; i++) {

            console.log(jsonArr[i]['type']);
            tempArr = await gMaps.nearbyPlaces(this.loc, jsonArr[i]['type'], radius);

            //try to build if there are results
            try {tempArr.length;} catch {continue;}

            for(let j=0; j<tempArr.length && j<max; j++) {
                jsonArr[i]['places'][j] = new Place();
                await jsonArr[i]['places'][j].parse(tempArr[j]);
            }
        }
        
        return jsonArr;
    }
}
