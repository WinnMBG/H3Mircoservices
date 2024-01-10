import React from "react";
import { NavLink } from "react-router-dom";

/**
 *
 * Header movie component
 */
const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          {window.location.pathname === "/coup-de-coeur" ? (
            <>
              {" "}
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Accueil</li>
              </NavLink>
              <NavLink
                to="/coup-de-coeur"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Coup de Coeur</li>
              </NavLink>
            </>
          ) : null}
          <NavLink
            to="/login"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Se connecter</li>
          </NavLink>
        </ul>
      </nav>
      <h1>CinéDuRaT</h1>
    </div>
  );
};

export default Header;
