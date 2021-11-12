import React, { useEffect } from "react";
import { useState } from "react";
import "../global/CustomTable.css";

/**
 * Displays the past prices from backend
 * @param {object} info - contains all the past resale flat prices for the block and flat type selected by the user
 * @returns {JSX.Element} component with table containing past resale flat transaction details
 */
const BlockInfo = (props) => {
  const [HDB, setHDB] = useState([]);
  
  useEffect (()=> {
    setHDB(props.info)
    console.log(props.info)
  }, [props.info])

  return (
      <table className="my_table">
        <thead style={{'display': 'table-header-group'}}>
          <tr>
            <th>Month</th>
            <th>Town</th>
            <th>Flat Type</th>
            <th>Block</th>
            <th>Street Name</th>
            <th>Storey Range</th>
            <th>Floor Area (sqm)</th>
            <th>Flat Model</th>
            <th>Lease Start Date</th>
            <th>Resale Price ($)</th>
          </tr>
        </thead>

        <tbody style={{'display': 'block'}}>
          {HDB.map((item) => 
            <tr>
              <td>{item.month}</td>
              <td>{item.town.toLowerCase()}</td>
              <td>{item.flat_type.toLowerCase()}</td>
              <td>{item.block}</td>
              <td>{item.street_name.toLowerCase()}</td>
              <td>{item.storey_range.toLowerCase()}</td>
              <td>{item.floor_area_sqm}</td>
              <td>{item.flat_model}</td>
              <td>{item.lease_commence_date}</td>
              <td>{parseInt(item.resale_price).toLocaleString()}</td>
            </tr>
          )}
        </tbody>
      </table>
  );
};

export default BlockInfo;
