import { signInWithGooglePopup, createUserDocFromAuth } from "../../../util/firebase/Firebase.util";
import SignUpForm from "../../SignUpForm/SignUpForm";

export default function SignIn()
{
  const logGoogleUser = async () =>
  {
    const response = await signInWithGooglePopup();
    const userDocRef = createUserDocFromAuth(response.user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </>
  );
}
