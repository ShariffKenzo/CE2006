import React from "react";
import { useState } from "react";
import "../App.css";
import data from "./Mock-data.json";

const Table = () => {
  const [HDB, setHDB] = useState(data);

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
          {HDB.map((HDB) => (
            <tr>
              <td>{HDB.Month}</td>
              <td>{HDB.Town}</td>
              <td>{HDB.FlatType}</td>
              <td>{HDB.Block}</td>
              <td>{HDB.StreetName}</td>
              <td>{HDB.StoreyRange}</td>
              <td>{HDB.FloorArea}</td>
              <td>{HDB.FlatModel}</td>
              <td>{HDB.LeaseCommencementDate}</td>
              <td>{HDB.ResalePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
