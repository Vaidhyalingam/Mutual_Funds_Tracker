import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase.js";

export default function Nav() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user));
  }, []);
  return (
    <div>
      <a href="/signup">Sign Up </a>
      <a href="/login">Sign In</a>
      <label>Current User: {currentUser?.email}</label>
      <a href="/logout">Log Out</a>
    </div>
  );
}
