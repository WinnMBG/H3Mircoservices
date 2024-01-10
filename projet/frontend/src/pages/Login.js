import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Accueil</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <form className="from-log">
        <input
          type="text"
          placeholder="Identifiant"
          id="search-input"
        //   onChange={(e) => setIdentifiant(e.target.value)}
        />
         <input
          type="text"
          placeholder="Mot de passe"
          id="search-2input"
        //   onChange={(e) => setMotDePasse(e.target.value)}
        />
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
};

export default Login;
