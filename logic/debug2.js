import * as govData from './govData.mjs';
import * as fs from 'fs';
import { getHistory } from './govData.mjs';

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
//let data = await govData.getMain(resourceID, params, filters, true);
//let data = await govData.getStreets('CENTRAL AREA')
let data = govData.getHistory('CHOA CHU KANG','4-ROOM');

let things = {}
things.thing = [
    {x: 'this', y: 'that'},
    {x: 'wow', y:'wew'},
    {x: 'this', y: 'that'}
]
console.log(data);


