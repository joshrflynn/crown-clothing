import { useState, useContext } from "react";
import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
import { UserContext } from "../../context/Users.context";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../util/firebase/Firebase.util";

import "./SignInForm.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(response.user);
      setFormFields(defaultFormFields);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect Password, please try again");
          setFormFields({ ...formFields, password: "" });
          break;
        case "auth/user-not-found":
          alert("No user found with that email");
          break;
        default:
          console.log(err.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const response = await signInWithGooglePopup();
    setCurrentUser(response.user);
    await createUserDocFromAuth(response.user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
