/** 
 * Function to return nearby places
 * @param lat: float or string lattitude 
 * @param lng: float or string londititude 
 * @param placeType: string, the type of places searching for 
 * example: nearbySearch('1.368929', 103.7754257,' food')
 * @returns: nothing as of yet, can return the latlng, name, address etc of places. 
 * 
*/
import axios from 'axios';

var APIKEY ='Enter YOUR API KEY'

nearbySearch('1.368929', 103.7754257,' food')

function nearbySearch(lat, lng, placeType){
      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params:{
          location: (lat+','+lng),
          //keyword ='atm',
          type:placeType,
          radius:500,
          key: APIKEY
          }
        })
      .then(function (response) {

       console.log(response.data.results[0].geometry.location);

      })
      .catch(function (error) {
        console.log(error);
      });
}
