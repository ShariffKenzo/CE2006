import * as govData from './govData.js';
import * as fs from 'fs';

function readJSON(filePath) {
    let raw = fs.readFileSync(filePath);
    let json = JSON.parse(raw);

    return json;
}

// filepath is from 1 parent up from root
const db = readJSON('./src/logic/data/databases.json');
// console.log(process.cwd());

let resourceID0 = db.resource[0].id;
let resourceID1 = db.resource[1].id;

// console.log(resourceID);
// console.log(db);

let params = {
    //limit: 10,
    //fields: 'quarter, price',
    q: JSON.stringify({
        town: 'choa chu kang',
        flat_type: '5-room',
        street_name: 'choa chu kang loop',
        //block: '341'
    }),
    sort: 'month desc'
}
let filters = {
    town: 'BEDOK',
    flat_type: '5-room'
}
//let data = await govData.getMain(resourceID0, params);
//let data = await govData.getStreets('choa chu kang');
//let data = await govData.getBlocks('choa chu kang', 'choa chu kang dr');
//let data = await govData.getHistory('Choa Chu Kang','5-room');
// let query = {q: 'executive'};
// let data = await govData.getMain(resourceID0, query);
//let data = await govData.getBlocks('bukit panjang','petir rd');//,101);
console.log(data);

let things = {}
things.thing = [
    {x: 'this', y: 'that'},
    {x: 'wow', y:'wew'},
    {x: 'this', y: 'that'}
]

//console.log(data);
import {Coordinates} from './Coordinates.js';

var point1 = new Coordinates(1,1);
var point2 = new Coordinates(1.2,2);

console.log(point1.distanceFrom(point2));
// console.log(new Coordinates(`-2     13   asdfsadg 31.456`,`3°8'59.85"E`));
// console.log(new Coordinates(1.1203957829757, -2.2361293846723906))
// console.log(new Coordinates(-123.1932846593, '-12 degrees 40 minutes and 50 arc seconds East'))
// console.log(new Coordinates())
