import "./Auth.css";
import { useContext } from "react";
import { LogIn, LogOut } from "../../firebase";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);
  console.log("Auth component - user:", user);

  return (
    <div className="Auth">
      {user ? (
        <span>
          {user.photoURL ? (
            <NavLink to="/orders">
              <img
                className="photoURL"
                src={user.photoURL}
                alt={user.displayName}
              />
            </NavLink>
          ) : null}
          <button className="Sign" onClick={LogOut}>
            SIGN OUT
          </button>
        </span>
      ) : (
        <span>
          <button className="Sign" onClick={LogIn}>
            SIGN IN
          </button>
        </span>
      )}
    </div>
  );
}