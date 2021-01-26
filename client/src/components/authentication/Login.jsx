import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { INITSTATE, LOGOURL, SAVEUSER } from "../../constants";
import { Card, CardWrapper } from "../widgets/Card";
import { InputGroupWrapper, InputWrapper } from "../widgets/Input";
import { Logo } from "../widgets/Logo";
import { authenticateUser, fetchBlockchain } from "./helpers";
import Button from "../widgets/Button";

const Login = () => {
  const [state, setState] = useState({ message: "" });
  const dispatch = useDispatch();
  let { authenticated } = useSelector((state) => ({
    authenticated: state.authentication.authenticated,
  }));

  if (authenticated) {
    return <Redirect to="/blockchain" />;
  }

  const initState = async (data) => {
    await dispatch({
      type: INITSTATE,
      payload: {
        data: data,
      },
    });
  };
  const saveUser = async (name, email) => {
    await dispatch({
      type: SAVEUSER,
      payload: {
        name: name,
        email: email,
      },
    });
  };

  const Authenticate = async (e) => {
    e.preventDefault();

    //retrieve data from form
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    //verifying if the user is present in the DB
    const response = await authenticateUser(email, password);
    /* If user is present then retrive the blockchain of the user
     and trigger dispatch to store details in store*/
    if (response.data) {
      const { name, email } = response.data.user;
      let { blockchain } = await fetchBlockchain(email); //fetching blockchain
      initState(blockchain); //saving blockchain in store
      saveUser(name, email); // saving user details in store
    } else {
      setState(() => ({
        message: response.error, // if authentication failed display reason for failure
      }));
    }
  };

  return (
    <Card>
      <div className="card-body">
        <CardWrapper>
          <form onSubmit={Authenticate}>
            <InputGroupWrapper>
              <Logo src={LOGOURL} alt="logo.png" />
              <span className="alert">{state.message}</span>
              <InputWrapper>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email-login"
                />
              </InputWrapper>
              <InputWrapper>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password-login"
                />
              </InputWrapper>
            </InputGroupWrapper>
            <Button type="submit" id="submit-login">
              Login
            </Button>
          </form>
          <span className="add-info">
            Don't Have an Account Signup <a href="/signup">Here</a>
          </span>
        </CardWrapper>
      </div>
    </Card>
  );
};

export default Login;
