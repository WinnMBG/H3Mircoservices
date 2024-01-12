import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/actions/user";
import { useDispatch } from "react-redux";

/**
 *
 * Header movie component
 */
const Header = ({ logged, setLogged }) => {
  const dispatch = useDispatch();

  const deconnect = () => {
    setLogged(!logged);
    dispatch(logout());
    window.location.pathname = "/login";
  };

  return (
    <div className="header">
      <nav>
        <ul>
          {window.location.pathname === "/coup-de-coeur" ? (
            <>
              <button onClick={deconnect}>Se déconnecter</button>
            </>
          ) : (
            <>
              {" "}
              <NavLink
                to="/login"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Se connecter</li>
              </NavLink>
            </>
          )}
           <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Chercher des films</li>
              </NavLink>
        </ul>
      </nav>
      <h1>CinéDuRaT</h1>
    </div>
  );
};

export default Header;
