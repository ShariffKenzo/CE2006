import * as gMaps from './gMaps.js';
import { Coordinates } from "./Coordinates.js";

/**
 * Object for holding details about a location's address
 */
export class Address {
    /**
     * Geocode/reverse geocode address constructor  
     * Generate address object via 2 methods:  
     * - pass in and streetname **and** street number
     * - pass in coordinates
     * @param {String} streetName Name of street, optional
     * @param {Number} streetNo Street or block number, optional
     * @param {Coordinates} coords Coordinates object, optional
     */
    constructor(streetName='', streetNo=0, coords = null) {
        this.fullAdddress = '';
        this.town = '';
        this.streetName = streetName;
        this.streetNo = streetNo;
        this.loc = coords
        this.type = '';
        this.placeID = '';
    }

    /**
     * Build the remaining address attributes:  
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

        this.fullAdddress = data[0]['formatted_address'];
        this.loc = new Coordinates(
            data[0]['geometry']['location']['lat'],
            data[0]['geometry']['location']['lng']
        );
        this.type = data[0]['types'][0];
        this.placeID = data[0]['place_id'];
    }
}
