// Debugging Address.js
import * as add from './Address.js';
import * as coord from './Coordinates.js';
import * as maps from './gMaps.js';

let x = new add.Address('', 0, new coord.Coordinates(1.29154,103.80335));
await x.build();
console.log(x);

let y = new add.Address('choa chu kang ave 4',416);
await y.build(); 
console.log(y);