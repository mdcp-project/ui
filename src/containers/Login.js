import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory, useLocation } from "react-router-dom";

import { useAppContext } from "../libs/Context";
import { login } from "../libs/Auth";
import "./Login.css";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const nextPage = useQuery().get('next');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleLogin(tokens) {
    login(tokens);
    userHasAuthenticated(true);
    console.log("Success login");
    console.log(nextPage);
    history.push(nextPage || '/');
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:12345/login", {
        email: email,
        password: password,
      })
      .then((r) => handleLogin(r.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
