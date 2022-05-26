import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase.js";

export default function Nav() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user));
  }, []);
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <a class="navbar-brand" href="/">
        Home
      </a>
      <a class="navbar-brand" href="/signup">
        Sign Up
      </a>
      <a class="navbar-brand" href="/login">
        Sign In
      </a>
      <a class="navbar-brand" href="/logout">
        Log Out
      </a>
      <label class="d-flex">Current User: {currentUser?.uid}</label>
    </nav>
  );
}
