import React, { useEffect, useRef } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.js";

export default function Logout() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    );
  }

  useEffect(() => {
    signOut(auth);
  }, []);

  return (
    <div>
      <div>
        <label>Email Address:</label>
        <input ref={emailRef} />
      </div>
      <div>
        <label>Password:</label>
        <input ref={passwordRef} />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
