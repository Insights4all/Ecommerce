import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Logout() {
  const history = useHistory();

  useEffect(() => {
    logout();
  });

  function logout() {
    axios
      .get("/logout")
      .then((response) => {
        console.log(response.data),
          //console.log("logout done"),
          history.push("/");
      })
      .catch((error) => {
        console.log("Erroorrrr");
      });
  }

  return <div></div>;
}

export default Logout;
