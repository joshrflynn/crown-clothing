import SignInForm from "../../SignInForm/SignInForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
