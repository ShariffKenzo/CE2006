/**
 * Cardview that includes names of nearby amenities/travel time/distance
 */
import React from 'react'
import "../global/CustomTable.css";


const AmenitiesList = () => {
    return (
     

<div className="my_table">
      <table>
        <thead style={{'display': 'block'}}>
          <tr>
            <th>ATM</th>
            <th>Fire Station</th>
            <th>Hospital</th>
            <th>Parking</th>
            <th>Police</th>
            <th>Post Office</th>
            <th>Shopping Mall</th>
            <th>Super market</th>
            {/*<th>subwaystation</th> not sure whether we need this cuz same as train station   */} 
            <th>Train Station</th>
            <th>Restaurant</th>
          </tr>
        </thead>

      {/*  <tbody style={{'height': '300px', 'overflow':'scroll', 'display': 'block'}}>
          {HDB.map((item) => 
            <tr>
              <td>{item.month}</td>
              <td>{item.town}</td>
              <td>{item.flat_type}</td>
              <td>{item.block}</td>
              <td>{item.street_name}</td>
              <td>{item.storey_range}</td>
              <td>{item.floor_area_sqm}</td>
              <td>{item.flat_model}</td>
              <td>{item.lease_commence_date}</td>
              <td>{item.resale_price}</td>
            </tr>
          )}
          </tbody>*/}
      </table>
    </div>

    )
}

export default AmenitiesList
