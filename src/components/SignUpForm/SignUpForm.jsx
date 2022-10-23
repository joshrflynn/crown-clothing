import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../util/firebase/Firebase.util";

import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";

import "./SignUpForm.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  //set to an object and destructured so the handle method can be genericized
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password === confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const auth = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth({ ...auth.user, displayName });
      setFormFields(defaultFormFields);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(err.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label="Display Name"
        />

        <FormInput
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          label="Email"
        />

        <FormInput
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          label="Password"
        />

        <FormInput
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
