/**
 * For exchanging global coordinates
 * Holds coordinate information in both DD or DMS
 * @author cruzerngz
 */
class gCoordinates {
    /**Takes in coordinates in either DMS or DD format
     * @see https://en.wikipedia.org/wiki/Decimal_degrees  
     * @see https://en.wikipedia.org/wiki/Degree_(angle)#Subdivisions
     * @param lat String/Number, in DD or DMS
     * @param lon String/Number, in DD or DMS
     */
    constructor(lat, lon) {
        if (typeof lat == 'number' && typeof lon == 'number') {
            console.log('number');
            this.nLat = lat;
            this.nLon = lon;
            this.sLat = this.DD_DMS(lat, 'N');
            this.sLon = this.DD_DMS(lon, 'E');
        }
        else if (typeof lat == 'string' && typeof lon == 'string') {
            console.log('string');
            this.nLat = this.DMS_DD(lat);
            this.nLon = this.DMS_DD(lon);
            this.sLat = lat;
            this.sLon = lon;
        }
    }
    /**
     * Converts a string coordinate into a decimal number
     * Coordinates to 6 decimal places
     * @param {String} stringIn Format: DDD°MM'SS.SS"N  
     * Other accepted formats: string with 3 distinct numbers:
     * **degrees, minutes, seconds**
     */
    DMS_DD(stringIn) { //convert to decimal degrees
        let regex = /[^0-9.]/;
        let DMSArray = stringIn.split(regex);

        let n = Number(DMSArray[0]) + Number(DMSArray[1])/60 + Number(DMSArray[2])/3600;

        return Number(n.toFixed(6));
    }

    /**
     * Converts a decimal number coordinate into a string
     * @param {Number} numberIn 
     * @param {String} lat_long 'N' or 'E'
     */
    DD_DMS(numberIn, lat_long) { //convert to degrees, minutes and seconds
        let deg = Math.floor(numberIn)
        .toString()

        let min = Math.floor((numberIn - deg) * 60)
        .toString().padStart(2,0);

        let sec = (((numberIn - deg) * 60 - min) * 60)
        .toFixed(2).padStart(4,0);

        //console.log(`${deg}°${min}'${sec}"${lat_long}`);
        return `${deg}°${min}'${sec}"${lat_long}`;
    }
}
