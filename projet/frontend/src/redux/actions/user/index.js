import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = false;

// ** GET user infos
export const loginUser = (usr) => {
  return (dispatch) => {
    return axios
      .post("/user/login", {
        identifiant: usr.identifiant,
        password: usr.password,
      })
      .then((res) => {
        dispatch({
          type: "LOGIN",
          data: res.data,
        });
      });
  };
};

export const logout = (usr) => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
  };
};
