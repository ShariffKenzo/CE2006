import * as govData from './govData.mjs';
import * as fs from 'fs';
import { getHistory } from './govData.mjs';

function readJSON(filePath) {
    let raw = fs.readFileSync(filePath);
    let json = JSON.parse(raw);

    return json;
}

//filepath is from 1 parent up from root
const db = readJSON('./CE2006/logic/data/databases.json');
// console.log(process.cwd());

let resourceID0 = db.resource_name[db.resource[0]].resource_id;
let resourceID1 = db.resource_name[db.resource[1]].resource_id;

// console.log(resourceID);
// console.log(db);

let params = {
    limit: 5
}
let filters = {
    town: 'Bedok',
    flat_type: '5-room'
}
//let data = govData.getMain(resourceID, params, filters);
//let data = await govData.getStreets('CENTRAL AREA')
let data = await govData.getHistory('Choa Chu Kang','executive');
// let query = {q: 'executive'};
// let data = await govData.getMain(resourceID0, query);
let things = {}
things.thing = [
    {x: 'this', y: 'that'},
    {x: 'wow', y:'wew'},
    {x: 'this', y: 'that'}
]
console.log(data);


