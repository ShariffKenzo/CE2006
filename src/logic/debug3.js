// Debugging Address.js
import * as add from './Place.js';
import * as coord from './Coordinates.js';
import * as maps from './gMaps.js';

// let x = new add.Place('', 0, new coord.Coordinates(1.34815,103.69809));
// await x.build();
// console.log(x);

// let y = new add.Place('choa chu kang ave 4',419);
// await y.build();
// console.log(y);

// let b = new add.Place('','','','ChIJ54OccDQa2jERJ7r7Z01cGOU');
// await b.build();
// console.log(b);


// let a = await maps.placeDetails('ChIJURFAnsIR2jERXCT_t7y2Ryg');
// console.log(a.address_components);

// let c = await maps.revgeoCode(new coord.Coordinates(1.34815,103.69809));
// c = c[0];
//console.log(c)

// let cAdd = c['address_components']
// let result = cAdd.filter(component => component.types[0] == 'street_number')
// [0]['short_name'];

let test = await maps.search('church');
console.log(test);


// console.log(result);