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

    /**
     * Build the remaining address attributes:  
     * ```await this.build();```
     */
    async build() {
        var data;

        //build based off coordinates
        //double query
        if(this.loc) {
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
        //build based off placeID
        //single query
        else if(this.placeID) {
            data = await gMaps.placeDetails(this.placeID);
            this.name = data['name'];
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
}
