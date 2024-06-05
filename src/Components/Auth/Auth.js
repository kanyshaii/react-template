import "./Auth.css";
import { useContext } from "react";
import { LogIn, LogOut } from "../../firebase";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);
  // Логирование состояния пользователя для отладки
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
            Sign out
          </button>
        </span>
      ) : (
        <span>
          <button className="Sign" onClick={LogIn}>
            Sign in
          </button>
        </span>
      )}
    </div>
  );
}