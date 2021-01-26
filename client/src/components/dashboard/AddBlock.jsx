import React, { useState } from "react";
import styled from "styled-components";

const AddBlockCard = styled.div`
  :hover {
    box-shadow: 0 60px 120px -10px rgba(10, 16, 34, 0.2);
  }

  box-shadow: 0 5px 15px -2px rgba(10, 16, 34, 0.4);
  margin: 60px auto 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 27px;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 8px;
  padding-right: 8px;
  max-width: fit-content;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  border: none;
  border: none;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  position: relative;
  transition: all 0.5s;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  .card-body {
    padding: 24px;
    zoom: 1;
    display: table;
  }
  max-width: fit-content;
`;

const Items = styled.div`
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  .group-wrapper {
    margin-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 100;
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
`;

const InputGroup = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: table;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;

  .data {
    padding: 4px 11px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: rgba(0, 0, 0, 0.65);
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    position: relative;
    display: table-cell;
    width: 1px;
    white-space: nowrap;
    vertical-align: middle;
    border-collapse: separate;
    border-spacing: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: 0;
    span {
      font-family: "Alegreya Sans", sans-serif;
      margin-right: 7px;
      margin-left: 7px;
    }
  }

  .input-box {
    font-family: "Alegreya Sans", sans-serif;
    position: relative;
    display: table-cell;
    width: 100%;
    float: left;
    font-size: 14px;
    line-height: 1.5;
    border-collapse: separate;
    border-spacing: 0;
    color: rgba(0, 0, 0, 0.65);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    border-left: none;
    .prefix {
      left: 12px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      line-height: 0;
      color: rgba(0, 0, 0, 0.65);
    }
    .input {
      width: 100%;
      margin-bottom: 0;
      position: relative;
      display: inline-block;
      padding: 4px 11px;
      width: 100%;
      height: 32px;
      font-size: 14px;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      transition: all 0.3s;
      min-height: 100%;
      padding-left: 30px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
`;

const NewBlock = styled.button`
  animation: pulseShadow 1.5s infinite;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 6.25em;
  padding: 20px 25px;
  height: auto;
  background: linear-gradient(45deg, #d4145a, #fbb03b);
  border: none;
  color: #fff;
  font-size: 12px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  outline: 0;
  span {
    margin-left: 7.5px;
    color: white;
  }
`;

export default function AddBlock({ addBlock }) {
  const [value, setstate] = useState("");

  const createNewBlock = () => {
    const date = new Date();
    addBlock(date.toLocaleString(), value); // timestamp , data
  };
  return (
    <AddBlockCard>
      <div className="card-body">
        <div>
          <Items>
            <span className="group-wrapper">
              <InputGroup>
                <span className="data">
                  <span>DATA</span>
                </span>
                <span className="input-box">
                  <span className="prefix">
                    <i className="anticon anticon-file-text" />
                  </span>
                  <input
                    type="text"
                    className="input"
                    onChange={(e) => setstate(e.target.value)}
                  />
                </span>
              </InputGroup>
            </span>
            <NewBlock onClick={() => createNewBlock()}>
              <i className="anticon anticon-plus" />
              <span>ADD NEW BLOCK</span>
            </NewBlock>
          </Items>
        </div>
      </div>
    </AddBlockCard>
  );
}
