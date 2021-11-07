/**
 * Cardview that includes names of nearby amenities/travel time/distance
 */
import React from 'react'
import "../../App.css";

const AmenitiesList = () => {
    return (
     

<div className="app-container" style={{ height: '70vh',  width:'10%',  position: 'absolute', left: '57%', top: '57%',
    transform: 'translate(-50%, -50%)' }} >
      <table>
        <thead style={{'display': 'block'}}>
          <tr>
            <th>atm</th>
            <th>firestation</th>
            <th>hospital</th>
            <th>parking</th>
            <th>police</th>
            <th>postoffice</th>
            <th>shoppingmall</th>
            <th>supermarket</th>
            {/*<th>subwaystation</th> not sure whether we need this cuz same as train station   */} 
            <th>trainstation</th>
            <th>restaurant</th>
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
