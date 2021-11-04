/**
 * For exchanging global coordinates  
 * Holds coordinate information in both DD or DMS
 * @author cruzerngz
 */
export class Coordinates {
    /**Takes in coordinates in either DMS or DD format
     * @see https://en.wikipedia.org/wiki/Decimal_degrees  
     * @see https://en.wikipedia.org/wiki/Degree_(angle)Subdivisions
     * @param lat String/Number, in DD or DMS
     * @param lon String/Number, in DD or DMS
     */
    constructor(lat, lon) {
        this.nLat = 0;
        this.nLon = 0;
        this.sLat = '0N';
        this.sLon = '0E';

        if (typeof lat == 'number') {
            this.nLat = this.DD_DD(lat);
            this.sLat = this.DD_DMS(lat, 'N');
        }
        else if (typeof lat == 'string') {
            this.nLat = this.DMS_DD(lat);
            this.sLat = this.DMS_DMS(lat, 'N');
        }
        
        if (typeof lon == 'number') {
            this.nLon = this.DD_DD(lon);
            this.sLon = this.DD_DMS(lon, 'E');
        }
        else if (typeof lon == 'string') {
            this.nLon = this.DMS_DD(lon);
            this.sLon = this.DMS_DMS(lon, 'E');
        }
    }

    /**
     * Calculate the distance between itself and another set of coordinates  
     * Calculates a great circle distance (line sitting on sphere)  
     * Uses the *haversine* formula
     * @see https://www.movable-type.co.uk/scripts/latlong.html
     * @param {Coordinates} coord Coordinates object
     * @returns Number, distance in metres, up to 2 D.P.
     */
    distanceFrom(coord) {
        //earth equatorial radius in metres
        //using this instead of mean radius
        //since singapore basically sits on the eqtr
        const radius = 6378000; 

        // s: latitude, p: longitude
        const s1 = this.nLat * Math.PI/180;
        const s2 = coord.nLat * Math.PI/180;
        const deltaS = (coord.nLat - this.nLat) * Math.PI/180;
        const deltaP = (coord.nLon - this.nLon) * Math.PI/180;

        const q =   Math.sin(deltaS/2) ** 2 +
                    Math.cos(s1) * Math.cos(s2) *
                    Math.sin(deltaP/2) ** 2;

        const arc = 2 * Math.atan2(Math.sqrt(q), Math.sqrt(1-q));

        return Number((radius * arc).toFixed(2));
    }

    /**
     * Parses DD coordinates into the correct format
     * @param {Number} numberIn 
     */
    DD_DD(numberIn) {
        return Number(numberIn.toFixed(6));
    }

    /**
     * Parses DMS coordinates into the correct format
     * @param {String} stringIn 
     * @param {String} lat_long 
     */
    DMS_DMS(stringIn, lat_long) {
        let regex = /[^0-9.-]/;
        let DMSArray = stringIn.split(regex).filter(x => x);
        let deg = DMSArray[0];
        let min = DMSArray[1].padStart(2,0);
        let sec = Number(DMSArray[2]).toFixed(2).padStart(4,0);
        return `${deg}°${min}'${sec}"${lat_long}`;
    }

    /**
     * Converts a string coordinate into a decimal number
     * Coordinates to 6 decimal places
     * @param {String} stringIn Format: **DDD°MM'SS.SS"N**  
     * Other formats: string containing 3 distinct numbers:
     * **degrees, minutes, seconds**
     * @returns Number formatted to 6 DP
     */
    DMS_DD(stringIn) { //convert to decimal degrees
        let regex = /[^0-9.-]/;
        let DMSArray = stringIn.split(regex).filter(x => x);
        var n = Math.abs(Number(DMSArray[0])) + Number(DMSArray[1])/60 + Number(DMSArray[2])/3600;

        if (Math.sign(Number(DMSArray[0])) == 1) {
            return Number(n.toFixed(6));
        }
        else {
            return 0 - Number(n.toFixed(6));
        }
    }

    /**
     * Converts a decimal number coordinate into a string
     * @param {Number} numberIn 
     * @param {String} lat_long 'N' or 'E'
     * @returns String formatted DMS coordinates
     */
    DD_DMS(numberIn, lat_long) { //convert to degrees, minutes and seconds
        let sign = Math.sign(numberIn); //get the sign
        numberIn = Math.abs(numberIn); //remove the sign

        let deg = Math.floor(numberIn)
        .toString()

        let min = Math.floor((numberIn - Number(deg)) * 60)
        .toString().padStart(2,0);

        let sec = (((numberIn - Number(deg)) * 60 - Number(min)) * 60)
        .toFixed(2).padStart(4,0);

        //console.log(`${deg}°${min}'${sec}"${lat_long}`);
        if (sign == 1) {
            return `${deg}°${min}'${sec}"${lat_long}`;
        }
        else {
            return `-${deg}°${min}'${sec}"${lat_long}`;
        }
    }
}
