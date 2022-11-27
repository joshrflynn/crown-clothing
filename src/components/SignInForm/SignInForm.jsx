import { useState } from "react";
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../util/firebase/Firebase.util";

import "./SignInForm.styles.jsx";
import { ButtonsContainer, SignInContainer } from "./SignInForm.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
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
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
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

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
