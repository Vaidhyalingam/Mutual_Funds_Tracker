import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    );
  }

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
