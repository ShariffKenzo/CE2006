import * as govData from './govData.mjs';
import * as fs from 'fs';

function readJSON(filePath) {
    let raw = fs.readFileSync(filePath);
    let json = JSON.parse(raw);

    return json;
}

const db = readJSON('./CE2006/logic/data/databases.json');
// console.log(process.cwd());

let index = 1
let resourceID = db.resource_name[db.resource[index]].resource_id;
// console.log(resourceID);
// console.log(db);

let params = {
    limit: 5
}
let filters = {
    town: 'Bedok',
    flat_type: '5-room'
}
let data = await govData.getMain(resourceID, params, filters, true);
//let data = await govData.getStreets('CENTRAL AREA')
console.log(data);