// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Form.css"

import LoadingIndicator from "./LoadingIndicator";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
const Form = ({ route, method }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/")
      }else{
        navigate("/login/")

      }
    } catch (err) {
      alert("Error: " + err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {loading && <LoadingIndicator />}
        <button className="form-button" type="submit">
          {name}
        </button>
      </form>
    </>
  );
};
Form.propTypes = {
  route: PropTypes.any,
  method: PropTypes.any,
};
export default Form;
