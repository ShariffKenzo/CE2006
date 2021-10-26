/**
 * API library for Data.gov.sg
 * This is an ES6 module file!
 * To use this module import it using:
 * ```import * as govData from './path/to/govData.mjs'```
 * @author cruzerngz
 */


import fetch from 'node-fetch'; //use import for .mjs files
const url = "https://data.gov.sg/api/action/datastore_search?"; //data.gov url

/**
 * Main function used to fetch from data.gov  
 * Fetches up to the first 100 entries
 * @param {string} resourceID String, ID of the database in govData
 * @param {Object} qParams Object, additional parameters
 * @param {Object} filters Object, key-value pairs of matching conditions  
 * (E.g. [col_name] : [matching_condition])  
 * @param {Boolean} getAll Boolean (optional), used if retrieving ALL matching cases  
 * If a query requires more than 100 results, set getAll to true  
 * Warning: resulting object can get quite large
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
    //console.log(url + new URLSearchParams(params));
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
    let filters = {town : townName};

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
export async function getBlocks(townName, streetName) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";
    let filters = {
        town : townName,
        street_name : streetName
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
 * @param {string} townName String, name of town to query
 * @param {string} streetName String, name of street to query
 * @param {string} block String, block number to query
 * @returns List of floors for town :: street :: block
 */
export async function getFloors(townName, streetName, block) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";
    let filters = {
        town: townName,
        street_name: streetName,
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
 * Input the town name and flat type
 * the median prices for all quarters
 * @param {string} townName String, name of the town to query
 * @param {string} flatType String, type of flat to query
 * @returns Object, contains median prices for every quarter
 */
export async function getHistory(townName, flatType) {
    let resourceID = "a5ddfc4d-0e43-4bfe-8f51-e504e1365e27";

    //generating alternate names cause of inconsistent data
    let filters = {
        town: townName.toUpperCase(),
        flat_type: flatType.toUpperCase()
    }
    let _filters = {
        town: capFirstLetter(townName),
        flat_type: flatType.toLowerCase()
    }
    let __filters ={ //for the 'Executive' naming convention
        town: capFirstLetter(townName),
        flat_type: capFirstLetter(flatType)
    }

    //fetch once for each name type
    let data1 = await getMain(resourceID, {}, filters, true);
    let data2 = await getMain(resourceID, {}, _filters, true);
    let data3 = await getMain(resourceID, {}, __filters, true);

    //returned object contains the search params inside
    let result = {}
    Object.assign(result, filters);

    //assign if there is any data in records, else continue
    result['data'] = [];
    try {
        Object.assign(result['data'], data1['records']);
    } catch {}
    try {
        Object.assign(result['data'], data2['records']);
    } catch {}
    try {
        Object.assign(result['data'], data3['records']);
    } catch {}

    //delete non-relavant attributes
    for (let i=0; i<result['data'].length; i++) {
        delete result.data[i]['town'];
        delete result.data[i]['flat_type'];
        delete result.data[i]['_id'];
    }
    //sort based on ascending date
    result['data'].sort((a,b) => {
        if (a.quarter < b.quarter) return -1;
        if (a.quarter > b.quarter) return 1;
        return 0;
    });
    //remove duplicate objects (for some reason duplicates exist)
    result.data = result.data.filter((item, index, self) => 
        index === self.findIndex((t) => 
            (t.quarter === item.quarter && t.price === item.price)
        )
    )

    return result;
}

/**
 * Takes any string and capitalises the first letter separated
 * by any non alphanumeric character  
 * Separator throughout the string needs to be the same,
 * Else the first separator type is used.  
 * @param {string} string String to perform operation on
 * @returns String with first letter of each distinct word capitalised
 */
export function capFirstLetter(string) {
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

// console.log(capFirstLetter('KALLANG/WHAOMPA'));
// console.log(capFirstLetter('ang mo kio'))
// console.log(capFirstLetter('ANG MO KIO'))
