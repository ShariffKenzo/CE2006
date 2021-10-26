import * as govData from './govData.mjs';

let resourceID =  "f1765b54-a209-4718-8d38-a39237f502b3";
let params = {}; //testing
let town = 'BEDOK'

//fetch the list of streets for a particular town
let streets = await govData.getStreets(town);
let streetIndex = 9;


// let streets = ['JLN DAMAI'];
// let streetIndex = 0;
//fetch the list of blocks for a particular street in said town
let blks = await govData.getBlocks(town, streets[streetIndex]);
let blkIndex = 0;

let filter = {
    town: town,
    street_name: streets[streetIndex],
    block: blks[blkIndex]
};

//finally, fetch actual data
let data = await govData.getMain(resourceID, params, filter);

//console.log(data);
console.log(town, streets);
console.log(streets[streetIndex], blks);
