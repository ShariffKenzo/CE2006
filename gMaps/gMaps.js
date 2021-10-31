/** 
*This file will take an address and return the longditude/lattitude of the particular place
*
*@param address String; needs to have underscores for each spacing
* example: latLng("123_Petir_Street_Singapore")
*@returns latlng String ; Full longditutde/ lattitude. Returns -1 if there is an error
*this JS file requires the use of axios. 
*download it by typing npm install axios in your terminal
*or using the unpkg cdn
*<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
*/
import axios from 'axios';

var APIKEY ='ENTER UR API KEY'
latLng("123_Petir_Street_Singapore")

function latLng(address){
  var inputAddress =address;

  //API key
  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
  params:{
    address: inputAddress,
    key: APIKEY
    }
  })
  .then(function (response) {
    // handle success
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var geometryOutput = lat+' '+lng;
    console.log(geometryOutput)
    return geometryOutput
  })
  .catch(function (error) {
    // handle error
    console.log("There is an error");
    return -1;
  })
/*
  .then(function(reponse){
    console.log(response);

    //geometry
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var geometryOutput = lat +' ' +lng;
    console.log(geometryOutput)

  .catch(function (error){ //.catch for the errors if any
    console.log(error);
  });    

  })
*/

}
