import React from "react";
import { signInWithGooglePopup, createUserDocFromAuth } from "../../../util/firebase/Firebase.util";

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocFromAuth(response.user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Auth</button>
    </>
  );
}
