import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/Users.context";
import { signOutUser } from "../../../util/firebase/Firebase.util";

import "./Navigation.scss";

export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (err) {
      console.log(err.message);
    }

    setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGNED IN AS {currentUser.displayName}
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
