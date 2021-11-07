/**
 * API library for Data.gov.sg
 * This is an ES6 module file!
 * To use this module import it using:
 * ```import * as govData from './path/to/govData.mjs'```
 * @author cruzerngz
 */

const url = "https://data.gov.sg/api/action/datastore_search?"; //data.gov url
//import fetch from "node-fetch";

/**
 * Main function used to fetch from data.gov  
 * Fetches up to the first 100 entries  
 * For more information see @see https://data.gov.sg/dataset/ckan-datastore-search  
 * @param {string} resourceID String, ID of the database in govData
 * @param {Object} qParams Object, additional parameters  
 * Accepted parameters:  
 * - limit: max rows  
 * - offset: number of rows to skip   
 * - fields: fields to return  
 * - q: full text query  
 * - sort: append 'asc' or 'desc' to field name  
 * @param {Object} filters Object, key-value pairs of matching conditions  
 * (E.g. [col_name] : [matching_condition])  
 * Note: search string must match **exactly**  
 * @param {Boolean} getAll Boolean (optional), used if retrieving ALL matching cases  
 * If a query requires more than 100 results, set getAll to true  
 * **Warning**: resulting object can get quite large
 * @returns Object, containing query results
 */
export async function getMain(resourceID, qParams={}, filters={}, getAll=false) {

    let params = {
        resource_id : resourceID,
    };
    //concat the objs into params
    params = Object.assign(params, qParams);
    params['filters'] = JSON.stringify(filters);

    //pre-fetch once to get the full count
    //set the limit to this new count to get EVERYTHING
    if (getAll) {
        params['limit'] = 1;
        let temp = await get(url + new URLSearchParams(params));
        let total = temp['result']['total'];
        params['limit'] = total;
    }
    
    // uncomment the line below to print the request URL to console
    console.log(url + new URLSearchParams(params));
    var data = await get(url + new URLSearchParams(params));

    return (data['result']);
}

/**
 * Helper function, packaging up fetch into a smaller function
 * @param {string} urlParams String, concatenated URL and search parameter
 * @returns Object, search result
 */
 async function get(urlParams) {
    const response = await fetch(urlParams);
    const json = await response.json();
    return json;
}

/**
 * This function exclusively queries the resale-flat-prices dataset  
 * Get the list of town names from the reference file town-lists.json (MAKE THE FILE)  
 * @param {string} townName String, name of town to query
 * @returns List of streets for that town
 */
export async function getStreets(townName) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";
    let filters = {town : townName.toUpperCase()};

    let data = await getMain(resourceID, {}, filters, true) //get all

    let total = data['limit'];
    let streets = [];
    for (let i=0; i<total; i++) {
        streets.push(data['records'][i]['street_name']);
    }
    return [...new Set(streets)].sort(); //return array of unique values
}

/**
 * This function exclusively queries the resale-flat-prices dataset  
 * Get the street name first through getStreets(townName)  
 * @param {string} townName String, name of town to query
 * @param {string} streetName String, name of street to query
 * @returns List of blocks for that town :: street 
 */
export async function getBlocks(streetName) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";
    let filters = {
        street_name : streetName.toUpperCase()
    };
    let data = await getMain(resourceID, {}, filters, true) //get all

    let total = data['limit'];
    let blocks = [];
    for(let i=0; i<total; i++) {
        blocks.push(data['records'][i]['block']);
    }
    return [...new Set(blocks)].sort();
}

/**
 * This function exclusively queries the resale-flat-prices dataset
 * Get the flat types for street and block combination
 * @param {String} streetName Street name
 * @param {String} block Block number 
 * @returns List of flat types for street :: block
 */
export async function getFlatType(streetName, block) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";
    let filters = {
        street_name: streetName,
        block: block
    }
    let data = await getMain(resourceID, {}, filters, true);

    let total = data['limit'];
    let floors = [];
    for(let i=0; i<total; i++) {
        floors.push(data['records'][i]['flat_type']);
    }
    return [...new Set(floors)].sort();
}

/**
 * This function exclusively queries the resale-flat-prices dataset  
 * @param {string} townName String, name of town to query
 * @param {string} streetName String, name of street to query
 * @param {string} block String, block number to query
 * @returns List of floors for town :: street :: block
 */
export async function getFloors(streetName, block) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";
    let filters = {
        street_name: streetName.toUpperCase(),
        block: block
    }
    let data = await getMain(resourceID, {}, filters, true);

    let total = data['limit'];
    let floors = [];
    for(let i=0; i<total; i++) {
        floors.push(data['records'][i]['storey_range']);
    }
    return [...new Set(floors)].sort();
}

/**
 * This function exclusively queries the median-resale-prices dataset
 * @param {string} townName String, name of the town to query
 * @param {string} flatType String, type of flat to query
 * @returns Object, contains median prices for every quarter
 */
export async function getMedianHistory(townName, flatType) {
    let resourceID = "a5ddfc4d-0e43-4bfe-8f51-e504e1365e27";
    //using full text query instead of filters
    //because I can use just 1 API call instead of 3 (check prev)
    let params = {
        q: JSON.stringify({
            town: townName,
            flat_type: flatType
        }),
        sort: 'quarter asc', //sorting done server side
        fields: 'quarter, price' //required fields
    }

    //fetch
    let data = await getMain(resourceID, params, {}, true);
    
    //when using q instead of filter, 3 extra fields pop up
    //'_full_count' always appears
    //2 more correspond to the 2 queried fields, with 'rank ' appended 
    for (let i=0; i<data['total']; i++) {
        delete data['records'][i]['_full_count'];
        delete data['records'][i]['rank town']
        delete data['records'][i]['rank flat_type']
    }

    //remove duplicate objects (for some reason duplicates exist ???)
    data['records'] = data['records'].filter((item, index, self) => 
        index === self.findIndex((t) => 
            (t.quarter === item.quarter && t.price === item.price)
        )
    )

    //start date: 2007 Q2
    //end date: 2020 Q4
    //expected length: 55
    //formula for calculating diff:
    // 4(bigY - smallY) + bigQ - smallQ
    let min = data['records'][0]['quarter'];
    let max = data['records'][data['records'].length - 1]['quarter'];
    let regex = /[^0-9]/;
    min = min.split(regex).filter(x => x); //extracting the numbers from quarter
    max = max.split(regex).filter(x => x); //and removing empty strings
    min = 4 * Number(min[0]) + Number(min[1]);
    max = 4 * Number(max[0]) + Number(max[1]);
    const trueMin = 4 * 2007 + 2;
    const trueMax = 4 * 2020 + 4;

    console.log(trueMin, min, max, trueMax);
    var returnArr = [];

    //if there is empty space before
    if(min - trueMin != 0) {
        for(let i=0; i<min - trueMin; i++) {
            returnArr.push(null);
        }
    }
    //push data normally
    for(let j=0; j<data['records'].length; j++) {
        try{
            returnArr.push(Number(data['records'][j]['price']));
        } catch {
            returnArr.push(null);
        }
    }
    //if there is empty space after
    if(trueMax - max != 0) {
        for(let k=0; k<trueMax - max; k++) {
            returnArr.push(null);
        }
    }

    return returnArr
}

/**
 * Helper function
 * Takes any string and capitalises the first letter separated
 * by any non alphanumeric character  
 * Separator throughout the string needs to be the same,
 * else the first separator type is used.  
 * @param {string} string String to perform operation on
 * @returns String with first letter of each distinct word capitalised
 */
function capFirstLetter(string) {
    let regex = /[^A-Za-z0-9]/;
    let arr = string.split(regex);
    let sep = string.charAt(arr[0].length); //get the separator

    for(let i=0; i<arr.length; i++) {
        let firstChar = arr[i].charAt(0).toUpperCase();
        let nextWord = arr[i].slice(1).toLowerCase();
        arr[i] = firstChar + nextWord;
    }
    return arr.join(sep);
}

/**
 * 
 * @param {String} town 
 */
export async function getTownHistoryTrend(town) {

}

/**
 * **UNUSED**  
 * Wrapper function for getMain
 * Simplify fetching price histories
 * Queries the resale-flat-prices dataset
 * @param {String} town Town name
 * @param {Stringt} street Street name
 * @param {Number} block Block number
 * @param {String} sortBy Column to sort values by, ascending
 */
export async function getResaleHistory(town, street='', block='', sortBy='month') {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";

    let query = {};
    if(town) Object.assign(query, {town: town});
    if(street) Object.assign(query,{street_name: street});
    if(block) Object.assign(query, {block: block});

    let params = {
        sort: `${sortBy} asc`,
        //fields:'' //unsure
        q: JSON.stringify(query)
    };

    let data = await getMain(resourceID, params, {});

    return data;
}

/**
 * Returns list containing details of nearby HDBs
 * Minimum nummber of HDBs to return are yet to be determined
 * @param {String} street Street name
 * @param {String} block Block number
 * @param {String} sortBy Column to sort values by, ascending
 */
export async function getSurroundingHDB(street, block, sortBy) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";

    let query = {};
    if(street) Object.assign(query,{street_name: street});
    if(block) Object.assign(query, {block: block});

    let params = {
        sort: `${sortBy} asc`,
        q: JSON.stringify({query})
    }

    let data = await getMain(resourceID, params, {}, true);

}
