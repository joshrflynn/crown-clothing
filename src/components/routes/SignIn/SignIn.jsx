import React from "react";
import { signInWithGooglePopup } from "../../../util/firebase/Firebase.util";

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Auth</button>
    </>
  );
}
