import React, { useState } from "react";
import { fundHousesData } from "../data/FundHousesData.js";
import Schemes from "./Schemes";

function FundHouses() {
  const [selectedHouse, setSelectedHouse] = useState();
  var id2 = 0;

  return (
    <div>
      <div>
        <label class="form-label">Fund House: </label>
        <select
          onChange={(e) => setSelectedHouse(e.target.value)}
          class="form-select form-select-sm"
        >
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
