import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/user";
import Swal from "sweetalert2";

const Login = ({ logged, setLogged }) => {
  const [identifiant, setIdentifiant] = useState("");
  const [password, setMotDePasse] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const login = () => {
    if (!identifiant.length || !password.length) {
      setError(true);
    } else {
      dispatch(loginUser({ identifiant, password }));
    }
  };

  useEffect(() => {
    if (user.hasOwnProperty("name")) {
      setLogged(true);
      window.location.pathname = "/coup-de-coeur";
    } else {
      setLogged(false);
    }
  }, [user, logged]);

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
      <div className="from-log">
        <input
          type="text"
          placeholder="Identifiant"
          id="search-input"
          onChange={(e) => setIdentifiant(e.target.value)}
          aria-invalid={error}
        />
        <input
          type="text"
          placeholder="Mot de passe"
          id="search-2input"
          onChange={(e) => setMotDePasse(e.target.value)}
          aria-invalid={error}
        />
        <button onClick={login}>Se Connecter</button>
      </div>
    </div>
  );
};

export default Login;
