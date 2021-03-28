import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory, useLocation } from "react-router-dom";

import { useAppContext } from "../libs/Context";
import { login } from "../libs/Auth";
import "./Register.css";
import axios from "axios";

export default function Register() {
  const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const nextPage = useQuery().get('next');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleRegister(tokens) {
    login(tokens);
    userHasAuthenticated(true);
    console.log("Success regioster");
    console.log(nextPage);
    history.push(nextPage || '/');
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/api/signup", {
        email: email,
        password: password,
      })
      .then((r) => handleRegister(r.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="Register">
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
          Signup
        </Button>
      </Form>
    </div>
  );
}
