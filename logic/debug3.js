// Debugging Address.js
import * as add from './Address.js';
import * as coord from './Coordinates.js';
import * as maps from './gMaps.js';

// let x = new add.Address('', 0, new coord.Coordinates(1.29154,103.80335));
// await x.build();

// let x = await maps.revgeoCode(new coord.Coordinates(1.29154,103.80335));
// console.log(x);

// let y = new add.Address('choa chu kang ave 4',416);
// await y.build()
// console.log(y);

import * as fs from 'fs';
import * as path from 'path';

let filePath = './data/gMaps.txt'
let filePath2 = './CE2006/logic/data/databases.json'
let raw = fs.readFile(path.resolve(__dirname, filePath));
console.log(raw);