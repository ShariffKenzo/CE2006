import * as gMaps from './gMaps.js';
import { Coordinates } from "./Coordinates.js";

/**
 * Object for holding details about a location's address
 */
export class Address {
    /**
     * Generate address object via 2 methods:  
     * - pass in and streetname and street number
     * - pass in coordinates
     * @param {String} streetName Name of street
     * @param {Number} streetNo Street or block number
     * @param {Coordinates} coords Coordinates object, optional
     */
    constructor(streetName='', streetNo=0, coords = null) {
        this.town = '';
        this.streetName = streetName;
        this.streetNo = streetNo;
        this.loc = coords
        this.type = '';
        this.placeid = '';
    }

    /**
     * Call this right after initialising a new instance of Address:  
     * ```await this.build();```
     */
    async build() {
        var data;

        //build based off coordinates
        if(this.loc != null) {
            data = await gMaps.revgeoCode(this.loc);
            this.town = data[0]['address_components'][2]['short_name'].toUpperCase();
            this.streetName = data[0]['address_components'][1]['short_name'].toUpperCase();
            this.streetNo = Number(data[0]['address_components'][0]['short_name']);
        }
        //build based off address
        else if(this.streetName && this.streetNo) {
            data = await gMaps.geoCode(`${this.streetNo} ${this.streetName}`);
            this.town = data[0]['address_components'][3]['short_name'].toUpperCase();
            this.streetName = data[0]['address_components'][2]['short_name'].toUpperCase();
            this.streetNo = Number(data[0]['address_components'][1]['short_name']);
        }

        this.loc = new Coordinates(
            data[0]['geometry']['location']['lat'],
            data[0]['geometry']['location']['lng']
        );
        this.placeid = data[0]['place_id'];
    }





}