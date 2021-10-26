import * as govData from './govData.mjs';
import * as fs from 'fs';

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
    limit: 2,
    fields: 'quarter, price',
    q: JSON.stringify({
        town: 'Bedok',
        flat_type: '5-room'
    }),
    //sort: ['quarter asc']
}
let filters = {
    town: 'BEDOK',
    flat_type: '5-room'
}
//let data = await govData.getMain(resourceID1, params);
//let data = await govData.getStreets('CENTRAL AREA')
let data = await govData.getHistory('Choa Chu Kang','5-room');
// let query = {q: 'executive'};
// let data = await govData.getMain(resourceID0, query);

let things = {}
things.thing = [
    {x: 'this', y: 'that'},
    {x: 'wow', y:'wew'},
    {x: 'this', y: 'that'}
]

console.log(data);
 

