import styled from "styled-components";

export const InputGroupWrapper = styled.span`
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 100;
  .alert {
    margin: 3px auto 7px auto;
    padding: 20px 25px;
    display: block;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;
  input {
    font-size: 15px;
    line-height: 1.5;
    color: #666666;
    display: block;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 30px 0 68px;
    outline: none;
    border: none;
    font-weight: 400;
  }
`;
