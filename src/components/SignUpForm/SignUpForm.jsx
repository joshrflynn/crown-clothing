import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../util/firebase/Firebase.util";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function SignUpForm()
{
    //set to an object and destructured so the handle method can be genericized
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) =>
    {
        event.preventDefault();

        if (!password == confirmPassword)
        {
            alert("Passwords do not match!");
            return;
        }

        try
        {
            const auth = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth({ ...auth.user, displayName });
            setFormFields(defaultFormFields);
        } catch (err)
        {
            if (err.code == "auth/email-already-in-use")
            {
                alert("Email already in use");
            } else
            {
                console.log(err.message);
            }
        }
    };

    const handleChange = (event) =>
    {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </>
    );
}
