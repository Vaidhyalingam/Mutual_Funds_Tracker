import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    await signInWithEmailAndPassword(
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

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
