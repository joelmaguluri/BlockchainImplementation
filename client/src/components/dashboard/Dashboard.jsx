import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Logo } from "../widgets/Logo";
import { MainTitle } from "../widgets/Typography";
import { INITSTATE, LOGOURL, LOGOUT, SERVER } from "../../constants";
import Blockchain from "./Blockchain";

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  .icon-name {
    padding-right: 100px;
    font-family: "Alegreya Sans", sans-serif;
    font-size: 24pt;
    font-weight: 600;
    span {
      display: inline;
      padding-right: 5px;
    }
  }
  .logout {
    :hover {
      background: linear-gradient(90deg, #1488cc, #2b32b2);
    }
    margin-right: 30px;
    padding: 10px 30px 10px 30px;
    cursor: pointer;
    font-family: "Alegreya Sans", sans-serif;
    font-size: 20pt;
    font-weight: 500;
    margin-top: auto;
    margin-bottom: auto;
    background: linear-gradient(90deg, #ff512f, #dd2476);
    border: none;
    color: #fff;
    line-height: 1.15;
    border-radius: 4px;
    .icon {
      margin-right: 4px;
    }
  }
`;

const Trash = styled.div`
  left: 5vw;
  position: fixed;
  outline: 0;
  text-align: center;
  .button-trash {
    width: 60px;
    height: 60px;
    border-radius: 40px;
    line-height: 40px;
    background: #e94b53;
    color: white;
    outline: 0;
    border: none;
    cursor: pointer;
    .icon {
      font-size: 30px;
    }
  }
`;

const DashboardHeader = ({ logout, user, blockchain }) => {
  return (
    <Header>
      <h2 className="icon-name">
        <span>
          <i className="fa fa-user" />
        </span>
        {user.name}
      </h2>
      <button
        type="button"
        className=" logout"
        onClick={() => logout(blockchain)}
      >
        <i className="fa fa-power-off  icon" />
        <span>LOGOUT</span>
      </button>
    </Header>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  let { authenticated, user, blockchain } = useSelector((state) => ({
    authenticated: state.authentication.authenticated,
    user: state.authentication.user,
    blockchain: state.blockchain.chain,
  }));

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const logout = async (blockchain) => {
    dispatch({
      type: LOGOUT,
    });
    let url = SERVER + "/blockchain";
    await fetch(url, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, blockchain: [...blockchain] }), // body data type must match "Content-Type" header
    }).then(async (response) => {
      console.log(await response.json());
    });
  };

  const resetBlockchain = async (e) => {
    let url = SERVER + "/reset/" + user.email;
    let response = await fetch(url, {
      method: "DELETE",
      mode: "cors", // no-cors, *cors, same-origin
    });
    response = await response.json();
    if (response.data) {
      const { data } = response;
      await dispatch({
        type: INITSTATE,
        payload: { data: data },
      });
    } else {
      alert(response.message);
    }
  };

  return (
    <>
      <DashboardHeader user={user} logout={logout} blockchain={blockchain} />
      <Trash>
        <button
          type="button"
          className="button-trash"
          onClick={() => resetBlockchain()}
        >
          <i className="fa fa-trash icon" />
        </button>
      </Trash>
      <Logo src={LOGOURL} alt="logo.png" />
      <MainTitle>BLOCKCHAIN</MainTitle>
      <Blockchain />
    </>
  );
};

export default Dashboard;
