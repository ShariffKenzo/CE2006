import React, { useEffect } from "react";
import { useState } from "react";
import "../../App.css";
import data from "./Mock-data.json";
/**
 * Displays the past prices from backend
 * @returns block info component
 */
const BlockInfo = (props) => {
  const [HDB, setHDB] = useState([]);
  
  useEffect (()=> {
    setHDB(props.info)
    console.log(props.info)
  }, [props.info])

  return (
    <div className="app-container" style={{ height: '70vh',  width:'10%',  position: 'absolute', left: '58%', top: '57%',
    transform: 'translate(-50%, -50%)' }} >
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Town</th>
            <th>Flat Type</th>
            <th>Block</th>
            <th>Street Name</th>
            <th>Storey Range</th>
            <th>Floor Area (m2)</th>
            <th>Flat Model</th>
            <th>Lease Commencement Date</th>
            <th>Resale Price ($)</th>
          </tr>
        </thead>

        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default BlockInfo;
