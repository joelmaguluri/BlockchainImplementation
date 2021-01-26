import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, CardWrapper } from "../widgets/Card";
import { InputGroupWrapper, InputWrapper } from "../widgets/Input";
import { Logo } from "../widgets/Logo";
import { register } from "./helpers";
import Button from "../widgets/Button";
import { LOGOURL } from "../../constants";

const Signup = () => {
  const [state, setState] = useState({ message: "" });
  let { authenticated } = useSelector((state) => ({
    authenticated: state.authentication.authenticated,
  }));

  if (authenticated) {
    return <Redirect to="/blockchain" />;
  }
  const saveToDB = async (e) => {
    e.preventDefault();
    const password = e.target["password"].value;
    const confirmpassword = e.target["confirmpassword"].value;

    if (password !== confirmpassword)
      setState(() => ({
        message: "passwords donot match",
      }));
    else {
      const email = e.target["email"].value;
      const name = e.target["name"].value;
      const { message } = await register(name, email, password);
      setState(() => ({
        message: message,
      }));
    }
  };

  return (
    <Card>
      <div className="card-body">
        <CardWrapper>
          <form onSubmit={saveToDB}>
            <InputGroupWrapper>
              <Logo src={LOGOURL} alt="logo.png" />

              <span className="altert">{state.message}</span>
              <InputWrapper>
                <input type="text" placeholder="Name" name="name" />
              </InputWrapper>
              <InputWrapper>
                <input type="text" placeholder="Email" name="email" />
              </InputWrapper>
              <InputWrapper>
                <input type="password" placeholder="Password" name="password" />
              </InputWrapper>
              <InputWrapper>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                />
              </InputWrapper>
              <Button type="submit">Signup</Button>
            </InputGroupWrapper>

            <span className="add-info">
              Already Have an account? click <a href="/">Here</a>
            </span>
          </form>
        </CardWrapper>
      </div>
    </Card>
  );
};

export default Signup;
