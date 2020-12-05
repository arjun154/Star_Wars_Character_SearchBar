import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../utils/api";
import "./index.css";
import logo from "../Home/star-wars-logo.png";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import PersonDetails from "../../Components/PersonDetails";

function Person() {
  const [personData, setPersonData] = useState("");
  const { id } = useParams();
  const history = useHistory();

  // useEffect fetch data about the particular character on the basis of id
  useEffect(() => {
    api
      .get(`/${id}/`)
      .then((res) => setPersonData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="person">
      {personData ? (
        <>
          <div>
            <AppBar position="static">
              <Toolbar className="root">
                <img
                  src={logo}
                  alt="Star Wars Logo"
                  height="50px"
                  width="100px"
                  onClick={() => history.push("/")}
                ></img>
              </Toolbar>
            </AppBar>
          </div>
          <PersonDetails person={personData} />
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <CircularProgress thickness={12} style={{ marginTop: "40%" }} />
        </div>
      )}
    </div>
  );
}

export default Person;
