import React, { useState, useEffect } from "react";
import { fundHousesData } from "../data/FundHousesData.js";
import Schemes from "./Schemes";
import { auth, db } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

function FundHouses() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user));
  }, []);

  const [selectedHouse, setSelectedHouse] = useState();
  var id2 = 0;

  async function handleDBSubmit(e) {
    const usersCollectionRef = doc(db, "users", currentUser?.email);
    console.log("Hi Da");
    await setDoc(usersCollectionRef, {
      name: "Manoj",
      age: Number(13),
      selectedHouse: selectedHouse,
    });
  }

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

      <p>FireStore</p>
      <button onClick={handleDBSubmit}>Submit</button>
    </div>
  );
}

export default FundHouses;
