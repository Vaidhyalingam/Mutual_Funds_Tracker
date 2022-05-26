import React, { useEffect, useState } from "react";
import axios from "axios";

function Schemes({ selectedHouse }) {
  const [allScheme, setAllScheme] = useState([]);
  const [scheme, setScheme] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedScheme, setSelectedScheme] = useState([
    { date: "0", nav: "0" },
  ]);

  var id = 0;

  useEffect(() => {
    const getMutualFund = async () => {
      await axios
        .get("https://api.mfapi.in/mf")
        .then((res) => setAllScheme(res.data));
    };
    console.log("HEllo1");

    getMutualFund();
    console.log("HEllo3");
  }, []);

  useEffect(() => {
    console.log("HEllo2");
    const loadData = () => {
      setScheme(allScheme.filter((x) => x.schemeName.includes(selectedHouse)));
    };
    loadData();
    console.log("HEllo4");
  }, [allScheme, selectedHouse]);

  useEffect(() => {
    const getNav = async () => {
      await axios
        .get("https://api.mfapi.in/mf/" + selectedOption)
        .then((res) => setSelectedScheme(res.data.data));
    };

    getNav();
  }, [selectedOption]);

  return (
    <div>
      <div>
        <label class="form-label">Scheme Name: </label>
        <select
          onChange={(e) => setSelectedOption(e.target.value)}
          class="form-select form-select-sm"
        >
          {scheme.map((fundHouse) => (
            <option key={id++} value={fundHouse.schemeCode}>
              {fundHouse.schemeName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Nav: </label>
        <span>
          {selectedScheme !== undefined ? selectedScheme[0]["nav"] : null}
        </span>
      </div>
    </div>
  );
}

export default Schemes;
