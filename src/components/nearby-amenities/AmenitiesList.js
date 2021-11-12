import React, { useEffect, useState } from "react";
import "./Amenities.css";

/**
 * Displays list of all the nearby amenities, within 500m (max 10 amenitites per category)
 * @param {object} nearbyPlaces - contains all the nearby amenities for a block selected by the user
 * @returns {JSX.Element} amenties list component
 */
const Amenitiesh4st = (props) => {
    console.log(props.nearbyPlaces);
    const [toRender, setToRender] = useState(false);

    useEffect(() => {
        props.nearbyPlaces && setToRender(true);
    }, [props.nearbyPlaces]);

    if (toRender) {
        return (
            <ul className="amenities">
              <h4>ATM</h4>
              {props.nearbyPlaces[0]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Fire Station</h4>
              {props.nearbyPlaces[1]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Hospital</h4>
              {props.nearbyPlaces[2]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Parking</h4>
              {props.nearbyPlaces[3]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Police</h4>
              {props.nearbyPlaces[4]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Post Office</h4>
              {props.nearbyPlaces[5]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Shopping Mall</h4>
              {props.nearbyPlaces[6]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Supermarket</h4>
              {props.nearbyPlaces[7]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Subway Station</h4>
              {props.nearbyPlaces[8]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Train Station</h4>
              {props.nearbyPlaces[9]["places"].map(item=><p>{item["name"]}</p>)}
              <h4>Restaurant</h4>
              {props.nearbyPlaces[10]["places"].map(item=><p>{item["name"]}</p>)}
            </ul>
        );
    }

    return <div className="instructions">
      <h6>Pick a Town, Street and Block to see nearby amenities (within 500m)</h6>
      <p>Then wait patiently as our API retrieves all the info</p>
    </div>;
};
// <div className="my_table">
//     <table>
//         <thead style={{ display: "block" }}>
//             <tr>
//                 <th>ATM</th>
//                 <th>Fire Station</th>
//                 <th>Hospital</th>
//                 <th>Parking</th>
//                 <th>Poh4ce</th>
//                 <th>Post Office</th>
//                 <th>Shopping Mall</th>
//                 <th>Super market</th>
//                 {/*<th>subwaystation</th> not sure whether we need this cuz same as train station   */}
//                 <th>Train Station</th>
//                 <th>Restaurant</th>
//             </tr>
//         </thead>

/*  <tbody style={{'height': '300px', 'overflow':'scroll', 'display': 'block'}}>
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
          </tbody>*/
//     </table>
// </div>
// );

export default Amenitiesh4st;


// {props.nearbyPlaces.map((item) => {
//   <h4>item["type"]</h4>;
//   {
//       /* <ul>
//               {item["places"].map((places) => {
//                   <h4>{places["name"]}</h4>;
//               })}
//           </ul> */
//   }