import React, { useState } from "react";
import { fundHousesData } from "./FundHousesData.js";
import Schemes from "./Schemes";

function FundHouses() {
  const [selectedHouse, setSelectedHouse] = useState();
  var id2 = 0;

  return (
    <div>
      <div>
        <p>Hello World from Schemes</p>
        <label>Fund House: </label>
        <select onChange={(e) => setSelectedHouse(e.target.value)}>
          {fundHousesData.map((fundHouse) => (
            <option key={id2++}>{fundHouse}</option>
          ))}
        </select>
      </div>
      <Schemes selectedHouse={selectedHouse} />
    </div>
  );
}

export default FundHouses;
