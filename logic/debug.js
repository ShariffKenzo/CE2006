import * as govData from './govData.mjs';

let resourceID =  "f1765b54-a209-4718-8d38-a39237f502b3";
let params = {limit: 1};
let filter = {town: 'BEDOK'};

//let data = await govData.getMain(resourceID, params, filter);
//let data = await govData.getBlocks('BEDOK', 'BEDOK NTH RD');

console.log(data);
// let data = await govData.get("https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=1&filters=%7B%22town%22%3A%22BEDOK%22%7D");
