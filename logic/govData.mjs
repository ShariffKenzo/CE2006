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
 * 
 * @param resourceID String, ID of the database in govData
 * @param qParams Object, additional parameters
 * @param filters Object, key-value pairs of matching conditions  
 * (E.g. [col_name]:[matching_condition])  
 * @param getAll Boolean, used if retrieving ALL matching cases  
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
 * This function exclusively queries the resale-flat-prices dataset  
 * Get the list of town names from the reference file town-lists.json (MAKE THE FILE)  
 * @param townName String, name of town to query
 * @returns List of streets for that town
 */  
export async function getStreets(townName) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";
    let qParams = {limit: 1};
    let filters = {town : townName};

    let data = await getMain(resourceID, qParams, filters);
    let total = data['total']; //extract total and query again

    qParams['limit'] = total;
    data = await getMain(resourceID, qParams, filters);

    let streets = [];
    for (let i=0; i<total; i++) {
        streets.push(data['records'][i]['street_name']);
    }
    return [...new Set(streets)]; //return array of unique values
}

/**
 * This function exclusively queries the resale-flat-prices dataset  
 * Get the street name first through getStreets(townName)  
 * @param townName String, name of town to query
 * @param streetName String, name of street to query
 * @returns List of blocks for that town :: street 
 */
export async function getBlocks(townName, streetName) {
    let resourceID = "f1765b54-a209-4718-8d38-a39237f502b3";
    let qParams = {limit: 1};
    let filters = {
        town : townName,
        street_name : streetName
    };

    let data = await getMain(resourceID, qParams, filters);
    let total = data['total']; //extract total and query again

    qParams['limit'] = total; //add new limit
    data = await getMain(resourceID, qParams, filters);

    let blocks = [];
    for(let i=0; i<total; i++) {
        blocks.push(data['records'][i]['block']);
    }
    return [...new Set(blocks)];
}

/**
 * Helper function, packaging up fetch into a smaller function
 * @param urlParams String, concatenated URL and search parameter
 * @returns Object, search result
 */
async function get(urlParams) {
    const response = await fetch(urlParams);
    const json = await response.json();
    return json;
}
